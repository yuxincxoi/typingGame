import { initTime, timerp } from "../modules/initTime.js";
import { loosingHeart, chance, chancep } from "../modules/loosingHeart.js";
import { randomExample, example } from "../modules/randomExample.js";
import { clear, input, score, scorep } from "../modules/clear.js";

const root = document.getElementById("root");

// 받아쓰기 문장
const expBox = document.createElement("div");

// 입력 form
const inputBox = document.createElement("div");
const form = document.createElement("form");
const btn = document.createElement("input");
const reset = document.createElement("input");
const startBtn = document.createElement("input");

btn.type = "button";
btn.value = "Enter";
reset.type = "button";
reset.value = "Reset";
startBtn.type = "button";
startBtn.value = "Start";

// 추가된 스타트 버튼
inputBox.appendChild(startBtn);

randomExample();

// 점수
const scoreBox = document.createElement("div");

scoreBox.appendChild(scorep);

localStorage.setItem("score", 0);
scorep.innerText = `점수 : ${localStorage.getItem("score")}`;

// 생명
const chanceBox = document.createElement("div");

chanceBox.appendChild(chancep);

localStorage.setItem("chance", chance);
chancep.innerText = `Chance : ${localStorage.getItem("chance")}`;

// 타이머
const timerBox = document.createElement("div");
timerBox.appendChild(timerp);

// element create
expBox.appendChild(example);
root.append(expBox, inputBox, scoreBox, chanceBox, timerBox);
inputBox.appendChild(form);
form.append(input, btn, reset);

// Enter를 눌렀을 때
form.addEventListener("submit", (e) => {
  if (input.value === example.innerText) {
    // 입력 값이 문장과 같으면
    score += 5;
    localStorage.setItem("score", score);
    scorep.innerText = `점수 : ${localStorage.getItem("score")}`;
    // 다음 문장 할당
    randomExample();
    // 입력창 초기화
    input.value = "";
    // 타이머 초기화
    initTime();
  } else {
    // 입력 값이 문장과 다르면
    loosingHeart();
  }
  e.preventDefault();
});

//  Reset을 눌렀을 때
reset.addEventListener("click", () => {
  // 모든 값 초기화
  clear();
});

// Start 버튼을 눌렀을 때
startBtn.addEventListener("click", () => {
  // 타이머 시작
  initTime();
});

// 타이머
function Timer(onOff) {
  if (!onOff && timerInterval) {
    clearInterval(timerInterval);
    let timerInterval = null;
    console.log("bye");
  }
}

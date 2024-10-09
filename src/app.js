import { initTime, timer } from "../modules/initTime.js";
import { loosingHeart } from "../modules/loosingHeart.js";
import { randomExample } from "../modules/randomExample.js";
import { clear, score } from "../modules/clear.js";

const form = document.querySelector("form");
const typingInput = document.getElementById("typing-input");
const typingSentence = document.getElementById("typing-sentence");
const totalScore = document.getElementById("total-score");
const submitBtn = document.getElementById("submit-button");

const root = document.getElementById("root");
const startBtn = document.createElement("button");
startBtn.type = "button";
startBtn.value = "Start";

root.append(startBtn, timer);


randomExample();

localStorage.setItem("score", 0);
scorep.innerText = `점수 : ${localStorage.getItem("score")}`;

localStorage.setItem("chance", chance);
chancep.innerText = `Chance : ${localStorage.getItem("chance")}`;

// Enter를 눌렀을 때
form.addEventListener("submit", (e) => {
  if (typingInput.value === typingSentence.innerText) {
    // 입력 값이 문장과 같으면
    score += 5;
    localStorage.setItem("score", score);
    totalScore.innerText = `점수 : ${localStorage.getItem("score")}`;
    // 다음 문장 할당
    randomExample();
    // 입력창 초기화
    typingInput.value = "";
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

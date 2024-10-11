import { initTime, timer } from "../modules/initTime.js";
import { loosingHeart } from "../modules/loosingHeart.js";
import { randomExample } from "../modules/randomExample.js";
import { clear } from "../modules/clear.js";

const form = document.querySelector("form");
const prevSentence = document.getElementById("prev-sentence");
const nextSentence = document.getElementById("next-sentence");
const typingInput = document.getElementById("typing-input");
const typingSentence = document.getElementById("typing-sentence");
const totalScore = document.getElementById("total-score");
const submitBtn = document.getElementById("submit-button");

const root = document.getElementById("root");
const startBtn = document.createElement("button");
startBtn.type = "button";
startBtn.value = "Start";

root.append(startBtn, timer);

window.onload = () => {
  typingSentence.innerText = "hi";
  initTime();
};

let score = 0;
// Enter를 눌렀을 때
form.addEventListener("submit", (e) => {
  if (typingInput.value === typingSentence.innerText) {
    // 입력 값이 문장과 같으면
    const sentence = randomExample();
    score += 5;
    localStorage.setItem("score", score);
    totalScore.innerText = `${localStorage.getItem("score")}`;
    // 다음 문장 할당
    typingSentence.innerText = "hello";
    // 입력창 초기화
    typingInput.value = "";
    // 타이머 초기화
    initTime();
  } else {
    // 입력 값이 문장과 다르면
    loosingHeart();
    typingInput.value = "";
  }
  e.preventDefault();
});

import { initTime, timer } from "../modules/initTime.js";
import { loosingHeart } from "../modules/loosingHeart.js";
import { randomExample } from "../modules/randomExample.js";

const form = document.querySelector("form");
const prevSentence = document.getElementById("prev-sentence");
const nextSentence = document.querySelectorAll(".next-sentence");
const typingInput = document.getElementById("typing-input");
const typingSentence = document.getElementById("typing-sentence");
const totalScore = document.getElementById("total-score");

const root = document.getElementById("root");

root.append(timer);

const sentence = randomExample();

let score = 0;
let i = 0;

localStorage.setItem("score", score);

window.onload = () => {
  typingSentence.innerText = sentence[i];
  nextSentence[0].innerText = sentence[i + 1];
  nextSentence[1].innerText = sentence[i + 2];
  nextSentence[2].innerText = sentence[i + 3];
  nextSentence[3].innerText = sentence[i + 4];
  nextSentence[4].innerText = sentence[i + 5];
  initTime();
};

// Enter를 눌렀을 때
form.addEventListener("submit", (e) => {
  if (typingInput.value === typingSentence.innerText) {
    // 입력 값이 문장과 같으면
    score += 5;
    localStorage.setItem("score", score);
    totalScore.innerText = `${localStorage.getItem("score")}`;
    // 다음 문장 할당
    prevSentence.innerText = sentence[i];
    typingSentence.innerText = sentence[i + 1];
    nextSentence[0].innerText = sentence[i + 2];
    nextSentence[1].innerText = sentence[i + 3];
    nextSentence[2].innerText = sentence[i + 4];
    nextSentence[3].innerText = sentence[i + 5];
    nextSentence[4].innerText = sentence[i + 6];
    i++;
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

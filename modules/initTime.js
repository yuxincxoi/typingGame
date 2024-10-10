import { loosingHeart } from "./loosingHeart.js";

const timer = document.getElementById("timer");
let timerInterval = null; // 타이머 인터벌을 저장할 변수
let i = 5;

const initTime = () => {
  clearInterval(timerInterval);
  i = 5;
  timer.innerText = `Timer : ${i}`;

  timerInterval = setInterval(() => {
    i -= 1;
    timer.innerText = `Timer : ${i}`;

    if (i < 0) {
      clearInterval(timerInterval);
      loosingHeart();
    }
  }, 1000);
};

export { initTime, timer };

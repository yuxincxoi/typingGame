import { loosingHeart } from "./loosingHeart.js";

const timer = document.getElementById("timer");
let timerInterval = null; // 타이머 인터벌을 저장할 변수
let i = 10;

const initTime = (isGameOver = false) => {
  clearInterval(timerInterval);

  if (isGameOver) {
    i = 0;
    timer.innerText = `Timer : ${i}`;
    return; // Game Over 상태에서는 타이머를 더 이상 실행하지 않음
  }

  i = 10;
  timer.innerText = `Timer : ${i}`;

  timerInterval = setInterval(() => {
    i -= 1;
    timer.innerText = `Timer : ${i}`;

    if (i <= 0) {
      clearInterval(timerInterval);
      loosingHeart();
    }
  }, 1000);
};

export { initTime, timer };

import { loosingHeart } from "./loosingHeart.js";

const timerp = document.createElement("p");

const initTime = () => {
  let timerInterval = null; // 타이머 인터벌을 저장할 변수
  let i = 5;
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  timerInterval = setInterval(() => {
    timerp.innerText = `Timer : ${i}`;
    i -= 1;
    if (i < 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      loosingHeart();
    }
  }, 1000);
};

export { initTime, timerp };

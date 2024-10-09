import { loosingHeart } from "./loosingHeart.js";

const timer = document.createElement("p");
timer.id = "timer";

const initTime = () => {
  let timerInterval = null; // 타이머 인터벌을 저장할 변수
  let i = 5;
  if (timerInterval) {
    clearInterval(timerInterval);
  }
  timerInterval = setInterval(() => {
    timer.innerText = `Timer : ${i}`;
    i -= 1;
    if (i < 0) {
      clearInterval(timerInterval);
      timerInterval = null;
      loosingHeart();
    }
  }, 1000);
};

export { initTime, timer };

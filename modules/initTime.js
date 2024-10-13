import { loosingHeart } from "./loosingHeart.js";
import updateTimerLine from "./updateTimerLine.js";

let timerInterval = null; // 타이머 인터벌을 저장할 변수
let i = 10;

const initTime = (isGameOver = false) => {
  clearInterval(timerInterval);

  if (isGameOver) {
    i = 0;
    updateTimerLine(i);
    return; // Game Over 상태에서는 타이머를 더 이상 실행하지 않음
  }

  i = 15;
  updateTimerLine(i);

  timerInterval = setInterval(() => {
    i -= 1;
    updateTimerLine(i);

    if (i <= 0) {
      clearInterval(timerInterval);
      loosingHeart();
    }
  }, 1000);
};

export { initTime };

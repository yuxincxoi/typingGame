import { loosingHeart } from "./loosingHeart.js";
import updateTimerLine from "./updateTimerLine.js";

let timerInterval = null; // 타이머 인터벌을 저장할 변수
let count = 15;

const initTime = (isGameOver = false) => {
  clearInterval(timerInterval);

  if (isGameOver) {
    count = 0;
    updateTimerLine(count);
    return; // Game Over 상태에서는 타이머를 더 이상 실행하지 않음
  }

  count = 15;
  updateTimerLine(count);

  timerInterval = setInterval(() => {
    count -= 1;
    updateTimerLine(count);

    if (count <= 0) {
      clearInterval(timerInterval);
      loosingHeart();
    }
  }, 1000);
};

export { initTime };

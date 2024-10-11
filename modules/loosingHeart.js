import heartOnOff from "./heartOnOff.js";
import { initTime } from "./initTime.js";

const hearts = document.getElementById("hearts");
let chance = 3;
localStorage.setItem("chance", chance);

const loosingHeart = () => {
  let timerInterval = null;

  heartOnOff(chance);

  if (chance > 0) {
    chance -= 1;
    localStorage.setItem("chance", chance);
    // hearts.innerText = `Chance : ${localStorage.getItem("chance")}`;
    if (chance > 0) {
      // 생명이 남아있는 경우
      initTime(); // 타이머를 다시 초기화
    } else {
      // 생명이 다된 경우
      alert("Game Over !");
      initTime(true);
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
      document.getElementById("timer").innerText = "Timer : 0";
    }
  } else if (chance === 0) {
    alert("Game Over !");
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }
};

export { loosingHeart };

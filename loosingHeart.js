const loosingHeart = () => {
  if (chance > 0) {
    chance -= 1;
    localStorage.setItem("chance", chance);
    chancep.innerText = `Chance : ${localStorage.getItem("chance")}`;
    if (chance > 0) {
      // 생명이 남아있는 경우
      initTime(); // 타이머를 다시 초기화
    } else {
      // 생명이 다된 경우
      alert("Game Over !");
      if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
      }
    }
  } else if (chance === 0) {
    alert("Game Over !");
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }
};

export default loosingHeart;

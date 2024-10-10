const typingInput = document.getElementById("typing-input");
const totalScore = document.getElementById("total-score");
const hearts = document.getElementById("hearts");
let score = 0;

const clear = () => {
  typingInput.value = "";
  localStorage.clear();
  localStorage.setItem("score", 0);
  localStorage.setItem("chance", 3);
  score = 0;
  let chance = 3;
  totalScore.innerText = `점수 : ${localStorage.getItem("score")}`;
  hearts.innerText = `Chance : ${localStorage.getItem("chance")}`;
  // 타이머 중지
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
};

export { clear, score };

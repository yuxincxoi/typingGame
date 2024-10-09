const input = document.createElement("input");
const scorep = document.createElement("p");
let score = 0;

const clear = () => {
  input.value = "";
  localStorage.clear();
  localStorage.setItem("score", 0);
  localStorage.setItem("chance", 3);
  score = 0;
  let chance = 3;
  scorep.innerText = `점수 : ${localStorage.getItem("score")}`;
  chancep.innerText = `Chance : ${localStorage.getItem("chance")}`;
  // 타이머 중지
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  timerp.innerText = `Timer : 0`;
};

export { clear, input, score, scorep };

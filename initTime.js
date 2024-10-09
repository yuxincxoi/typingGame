export default initTime = () => {
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
      LoosingHeart();
    }
  }, 1000);
};

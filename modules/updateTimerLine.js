let timerLine = document.getElementById("timer-line");

const updateTimerLine = (i) => {
  const width = ((i - 1) / 15) * 95;
  timerLine.style.width = `${width}%`;
};

export default updateTimerLine;

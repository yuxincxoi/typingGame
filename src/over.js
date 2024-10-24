import "../styles/style.css";

const finalScore = document.getElementById("final-score");

finalScore.innerText = localStorage.getItem("score");

const howToPlay = document.getElementById("how-to-play");
const rules = document.getElementById("rules");

howToPlay.addEventListener("mouseover", () => {
  rules.style.display = "block";
});

howToPlay.addEventListener("mouseout", () => {
  rules.style.display = "none";
});

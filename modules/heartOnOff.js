const heartOnOff = (chance) => {
  const firstHeart = document.getElementById("firstHeart");
  const secondHeart = document.getElementById("secondHeart");
  const thirdHeart = document.getElementById("thirdHeart");

  const heartFull = "url('./img/heart-full.png')";
  const heartEmpty = "url('./img/heart-empty.png')";

  if (chance > 2) {
    firstHeart.style.backgroundImage = heartFull;
    secondHeart.style.backgroundImage = heartFull;
    thirdHeart.style.backgroundImage = heartEmpty;
  } else if (chance > 1) {
    firstHeart.style.backgroundImage = heartFull;
    secondHeart.style.backgroundImage = heartEmpty;
    thirdHeart.style.backgroundImage = heartEmpty;
  } else if (chance > 0) {
    firstHeart.style.backgroundImage = heartEmpty;
    secondHeart.style.backgroundImage = heartEmpty;
    thirdHeart.style.backgroundImage = heartEmpty;
  }
};

export default heartOnOff;

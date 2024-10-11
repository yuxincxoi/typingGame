import data from "../data.js";

const randomArray = () => {
  let basicArray = [];
  for (let i = 0; i < 8; i++) {
    const randomData = data[Math.floor(Math.random() * data.length)];
    basicArray.push(randomData);
  }
  return basicArray;
};

export { randomArray };

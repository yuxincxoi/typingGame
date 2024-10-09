import data from "../data.js";

const example = document.createElement("p");

const randomExample = () => {
  const randomData = data[Math.floor(Math.random() * data.length)];
  example.innerText = randomData;
};

export { randomExample, example };

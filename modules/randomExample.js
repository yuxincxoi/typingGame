import data from "../data.js";

const randomExample = () => {
  const example = document.createElement("p");

  const randomData = data[Math.floor(Math.random() * data.length)];
  example.innerText = randomData;

  return example;
};

export default randomExample;

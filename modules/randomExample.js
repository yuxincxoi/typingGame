import data from "../data.js";

const randomExample = () => {
  const randomData = data[Math.floor(Math.random() * data.length)];
  example.innerText = randomData;
};

export default randomExample;

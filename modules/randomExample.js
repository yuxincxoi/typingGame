import data from "../data.js";

const randomExample = () => {
  const randomData = data[Math.floor(Math.random() * data.length)];
  return randomData;
};

export { randomExample };

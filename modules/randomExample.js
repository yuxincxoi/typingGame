import data from "../data.js";

let array = [];

const randomExample = () => {
  const randomData = data[Math.floor(Math.random() * data.length)];
  array.push(randomData);

  return array;
};

export { randomExample };

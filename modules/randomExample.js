import data from "../data.js";
import { randomArray } from "./randomArray.js";

let array = randomArray();

const randomExample = () => {
  const randomData = data[Math.floor(Math.random() * data.length)];
  array.push(randomData);

  return array;
};

export { randomExample };

import getRandomNumber from '../random.js';
import { getGame, getName } from '../index.js';

const taskGame = 'What number is missing in the progression?';

const startGame = () => {
  const numbers = [];
  let firstNumber = getRandomNumber(0, 50);
  const interval = getRandomNumber(2, 10);
  while (numbers.length <= 10) {
    firstNumber += interval;
    numbers.push(firstNumber);
  }
  const index = getRandomNumber(0, 9);
  const answer = numbers[index].toString();
  numbers[index] = '..';
  const question = numbers.join(' ');
  return [answer, question];
};

export default () => {
  getName();
  getGame(taskGame, startGame);
};

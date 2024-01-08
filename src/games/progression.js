import getRandomNumber from '../random.js';
import { getGame } from '../index.js';

const taskGame = 'What number is missing in the progression?';

const getProgression = (number, interval) => {
  const numbers = [];
  while (numbers.length <= 10) {
    number += interval;
    numbers.push(number);
  }
  return numbers;
};

const startGame = () => {
  let firstNumber = getRandomNumber(0, 50);
  const interval = getRandomNumber(2, 10);
  const index = getRandomNumber(0, 9);
  let progression = getProgression(firstNumber, interval);
  const answer = progression[index].toString();
  progression[index] = '..';
  const question = progression.join(' ');
  return [answer, question];
};

export default () => {
  getGame(taskGame, startGame);
};

import getRandomNumber from '../random.js';
import { getGame, getName } from '../index.js';

const taskGame = 'Find the greatest common divisor of given numbers.';

const startGame = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const question = `${firstNumber} ${secondNumber}`;
  const stack = [];
  let divisor = 1;
  while (divisor <= firstNumber && divisor <= secondNumber) {
    if (firstNumber % divisor === 0 && secondNumber % divisor === 0) {
      stack.push(divisor);
    }
    divisor += 1;
  }
  const answer = stack.pop().toString();
  return [answer, question];
};

export default () => {
  getName();
  getGame(taskGame, startGame);
};

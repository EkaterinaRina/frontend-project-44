import getRandomNumber from '../random.js';
import { getGame, getName } from '../index.js';

const taskGame = 'What is the result of the expression?';

const startGame = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const symbols = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, 2);
  const randomSymbol = symbols[randomIndex];
  const question = `${firstNumber} ${randomSymbol} ${secondNumber}`;
  let result;
  switch (randomSymbol) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    default:
      result = firstNumber * secondNumber;
      break;
  }
  const answer = result.toString();
  return [answer, question];
};

export default () => {
  getName();
  getGame(taskGame, startGame);
};

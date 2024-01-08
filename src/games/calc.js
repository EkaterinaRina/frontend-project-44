import getRandomNumber from '../random.js';
import { getGame } from '../index.js';

const taskGame = 'What is the result of the expression?';

const calculate = (numberOne, numberTwo, symbol) => {
  let result;
  switch (symbol) {
    case '+':
      result = numberOne + numberTwo;
      break;
    case '-':
      result = numberOne - numberTwo;
      break;
    default:
      result = numberOne * numberTwo;
      break;
  }
  return result;
};

const startGame = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const symbols = ['+', '-', '*'];
  const randomIndex = getRandomNumber(0, 2);
  const randomSymbol = symbols[randomIndex];
  const question = `${firstNumber} ${randomSymbol} ${secondNumber}`;
  const result = calculate(firstNumber, secondNumber, randomSymbol);
  const answer = result.toString();
  return [answer, question];
};

export default () => {
  getGame(taskGame, startGame);
};

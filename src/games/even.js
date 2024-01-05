import { getRandomNumber } from '../random.js';
import { getGame, getName } from '../index.js';

const isEven = (number) => number % 2 === 0;

const taskGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGame = () => {
  const randomNumber = getRandomNumber(1, 101);
  const question = randomNumber;
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [answer, question];
};

export default () => {
  getName();
  getGame(taskGame, startGame);
};

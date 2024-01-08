import getRandomNumber from '../random.js';
import getGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const taskGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGame = () => {
  const question = getRandomNumber(1, 101);
  const answer = isEven(question) ? 'yes' : 'no';
  return [answer, question];
};

export default () => {
  getGame(taskGame, startGame);
};

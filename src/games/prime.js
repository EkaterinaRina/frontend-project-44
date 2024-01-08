import getRandomNumber from '../random.js';
import { getGame } from '../index.js';

const taskGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let i = 2;
  while (i < number) {
    if (number === 1) {
      return true;
    }
    if (number % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const startGame = () => {
  const question = getRandomNumber(1, 100);
  let answer;
  answer = isPrime(question) === true ? 'yes' : 'no';
  return [answer, question];
};

export default () => {
  getGame(taskGame, startGame);
};

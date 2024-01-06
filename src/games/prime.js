import { getRandomNumber } from '../random.js';
import { getGame, getName } from '../index.js';

const taskGame =
  'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  let i = 2;
  while (i < number) {
    if (number % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const startGame = () => {
  const randomNumber = getRandomNumber(1, 100);
  let answer;
  if (isPrime(randomNumber) === true) {
    answer = 'yes';
  } else {
    answer = 'no';
  }

  const question = randomNumber;
  return [answer, question];
};

export default () => {
  getName();
  getGame(taskGame, startGame);
};

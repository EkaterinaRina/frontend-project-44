import readlineSync from 'readline-sync';
import { taskGame, startGame, answer } from './games/even.js';

let nameUser;
export const getName = () => {
  nameUser = readlineSync.question('May I have your name? ');
  console.log('Hello, ' + nameUser + '!');
};

export const getGame = () => {
  console.log(taskGame);
  let i = 0;
  while (i < 3) {
    startGame();
    const answerUser = readlineSync.question('Your answer: ');
    let result;
    if (answerUser === answer) {
      result = 'Correct!';
    } else {
      result =
        "'" +
        answerUser +
        "'" +
        " is wrong answer ;(. Correct answer was '" +
        answer +
        "'.\nLet's try again, " +
        nameUser +
        '!';
      console.log(result);
      return;
    }
    console.log(result);
    i += 1;
  }
  console.log('Congratulations, ' + nameUser + '!');
};

import readlineSync from 'readline-sync';
import { nameUser } from './cli.js';
import { taskGame, startGame, answer } from './games/even.js';

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
        answer +
        "'" +
        " is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, " +
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

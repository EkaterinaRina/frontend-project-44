import readlineSync from 'readline-sync';

let nameUser;
export const getName = () => {
  console.log('Welcome to the Brain Games!');
  nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}!`);
};

export const getGame = (taskGame, startGame) => {
  console.log(taskGame);
  let i = 0;
  while (i < 3) {
    const [answer, question] = startGame();
    console.log(`Question: ${question}`);
    const answerUser = readlineSync.question('Your answer: ');
    let result;
    if (answerUser === answer) {
      result = 'Correct!';
    } else {
      result = `'${answerUser}' is wrong answer ;(. Correct answer was '${answer}'.\nLet's try again, ${nameUser}!`;
      console.log(result);
      return;
    }
    console.log(result);
    i += 1;
  }
  console.log(`Congratulations, ${nameUser}!`);
};

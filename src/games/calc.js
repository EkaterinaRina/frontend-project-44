import { getRandomNumber } from "../random";

const taskGame = 'What is the result of the expression?';



let answer;
const startGame = () => {
    const firstNumber = getRandomNumber(1, 101);
    const secondNumber = getRandomNumber(1, 101);

    console.log('Question: ' + randomNumber);
    answer = isEven(randomNumber) ? 'yes' : 'no';
};

export { startGame, taskGame };
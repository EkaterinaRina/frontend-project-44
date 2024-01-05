import { getRandomNumber } from '../random.js';

const isEven = (number) => number % 2 === 0;

const taskGame = 'Answer "yes" if the number is even, otherwise answer "no".';

let answer;
const startGame = () => {
    const randomNumber = getRandomNumber(1, 101);
    console.log('Question: ' + randomNumber);
    answer = isEven(randomNumber) ? 'yes' : 'no';
};


export { taskGame, startGame, answer };

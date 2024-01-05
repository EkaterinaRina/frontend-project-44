import readlineSync from 'readline-sync';
import { getRandomNumber } from './random.js';
import { nameUser } from './cli.js';

const isEven = (number) => number % 2 === 0;
export const questionAnswer = () => {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let i = 0;
    while (i < 3) {
        const randomNumber = getRandomNumber(1, 101);
        console.log('Question: ' + randomNumber);
        const answer = isEven(randomNumber) ? 'yes' : 'no';
        const answerUser = readlineSync.question('Your answer: ');
        let result;
        if (answerUser === answer) {
            result = 'Correct!';
        } else {
            result = "'" + answer + "'" + " is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, " + nameUser + '!';
            console.log(result);
            return;
        }
        console.log(result);
        i += 1;
    }
    console.log('Congratulations, ' + nameUser + '!');
};





    

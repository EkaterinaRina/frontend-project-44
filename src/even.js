import readlineSync from 'readline-sync';
import { getRandomNumber } from './random.js';
import { getName, nameUser } from './cli.js';

export const questionAnswer = () => {
    getName();
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
    let i = 0;
    while (i < 3) {
        const randomNumber = getRandomNumber(1, 101);
        console.log('Question: ' + randomNumber);
        const answer = readlineSync.question('Your answer: ');
        let result;
        if (randomNumber % 2 === 0) {
            if (answer === 'yes') {
                result = 'Correct!';
            } else {
                result = "'" + answer + "'" + " is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, " + nameUser + '!';
                console.log(result);
                return;
            }
        
        } else if (randomNumber % 2 !== 0) {
            if (answer === 'no') {
            result = 'Correct!';
            } else {
                result = "'" + answer + "'" + " is wrong answer ;(. Correct answer was 'no'.\nLet's try again, " + nameUser + '!';
                console.log(result);
                return;
            }
        }
        console.log(result);
        i += 1;
    }
    console.log('Congratulations, ' + nameUser + '!');
};





    

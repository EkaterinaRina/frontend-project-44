import readlineSync from 'readline-sync';

//export const getName = () => {
	
//};

export const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const questionAnswer = () => {
    const nameUser = readlineSync.question('May I have your name? ');
	console.log('Hello, ' + nameUser + '!');
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
                result = "'" + answer + "'" + " is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, " + nameUser;
                console.log(result);
                return;
            }
        
        } else if (randomNumber % 2 !== 0) {
            if (answer === 'no') {
            result = 'Correct!';
            } else {
                result = "'" + answer + "'" + " is wrong answer ;(. Correct answer was 'no'.\nLet's try again, " + nameUser;
                console.log(result);
                return;
            }
        }
        console.log(result);
        i += 1;
    }
    console.log('Congratulations,' + nameUser + '!');
};





    

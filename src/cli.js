import readlineSync from 'readline-sync';

let nameUser;
const getName = () => {
	nameUser = readlineSync.question('May I have your name? ');
	console.log('Hello, ' + nameUser + '!');
};

export { getName, nameUser };

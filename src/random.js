const getRandomNumber = (minNumber, maxNumber) => {
  minNumber = Math.ceil(minNumber);
  maxNumber = Math.floor(maxNumber);
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};

export default getRandomNumber;

const getRandomNumber = (numberMin, numberMax) => {
  numberMin = Math.ceil(numberMin);
  numberMax = Math.floor(numberMax);
  return Math.floor(Math.random() * (numberMax - numberMin + 1)) + numberMin;
};

export default getRandomNumber;

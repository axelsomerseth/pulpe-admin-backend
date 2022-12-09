const getRandomId = (): number => {
  return getRandomNumber();
};

const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 1000);
};

export { getRandomNumber, getRandomId };

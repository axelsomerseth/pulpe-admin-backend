const getRandomId = (): number => {
  return Math.floor(Math.random() * 1000);
};

const getRandomNumber = (): number => {
  return Math.floor(Math.random() * 2000);
};

export { getRandomNumber, getRandomId };

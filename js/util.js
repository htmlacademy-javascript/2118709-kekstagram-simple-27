const getRandomNumber = (min, max)=> {
  if (min < 0 || max < 0 || max < min) {
    return NaN;
  }
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
};

const getRandomArrayElement = (array) => array[getRandomNumber(0, array.length - 1)];

const isEscapeKey = (evt) => evt.key === 'Escape';

export {getRandomNumber, getRandomArrayElement, isEscapeKey};

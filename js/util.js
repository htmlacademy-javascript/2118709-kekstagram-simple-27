// Функция, возвращающая случайное целое число из переданного диапазона включительно
const getRandomNumber = (min, max)=> {
  if (min < 0 || max < 0) {
    return NaN;
  }
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  const result = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  if (maximum > minimum ){
    return result;
  }
  return NaN;
};

// Функция, возвращающая случайный элемент
const getRandomArrayElement = (array) => array[getRandomNumber(0, array.length - 1)];

// Функция для проверки максимальной длины строки.
function checkStringLength (string, maxLength, minLength) {
  return string.length <= maxLength && string.length >= minLength;
}
checkStringLength('', 140, 20);

export {getRandomNumber, getRandomArrayElement};

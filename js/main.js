// Функция, возвращающая случайное целое число из переданного диапазона включительно

function getRandomNumber (min, max) {
  if (min < 0 || max < 0) {
    return NaN;
  }
  const minimum = Math.ceil(min);
  const maximum = Math.floor(max);
  if (maximum > minimum ){
    return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  }
  return NaN;
}

getRandomNumber(3,50);


//Функция для проверки максимальной длины строки.

function checkStringLength (string, maxLength, minLength) {
  return string.length <= maxLength && string.length >= minLength;
}

checkStringLength('', 140, 20);

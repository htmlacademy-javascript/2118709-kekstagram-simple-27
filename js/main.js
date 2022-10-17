// Функция, возвращающая случайное целое число из переданного диапазона включительно

function getRandom (min, max) {
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

getRandom(3,50);


// Функция для проверки максимальной длины строки.

function checkStringLength (string, maxLength, minLength) {
  return string.length <= maxLength && string.length >= minLength;
}

checkStringLength('', 140, 20);


//Домашняя работа module 4
const SIMILAR_PHOTO_COUNT = 25;

const DESCRIPTIONS = [
  'Белки в парке - я в порядке',
  'Милый песик',
  'Лето, солнце, жара',
  'Красивое фото',
  'Очень красивое фото',
  'Не очень-то удачный кадр',
  'Закат на пляже',
];

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

const getRandomArrayElement = (array) => array[getRandomNumber(0, array.length - 1)];

const createPhotoDescription = () => ({
  id: getRandomNumber(1,SIMILAR_PHOTO_COUNT),
  url: `photos/${getRandomNumber(1,SIMILAR_PHOTO_COUNT)}.jpg`,
  description:getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNumber(15,200),
  comments:getRandomNumber(0,200),
});

const similarPhotoDescription = () => Array.from({length: SIMILAR_PHOTO_COUNT},createPhotoDescription);

similarPhotoDescription();

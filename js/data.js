import {getRandomNumber,getRandomArrayElement} from './util.js';

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

const createPhotoDescription = () => ({
  id: getRandomNumber(1,SIMILAR_PHOTO_COUNT),
  url: `photos/${getRandomNumber(1,SIMILAR_PHOTO_COUNT)}.jpg`,
  description:getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNumber(15,200),
  comments:getRandomNumber(0,200),
});

const similarPhotoDescription = () => Array.from({length: SIMILAR_PHOTO_COUNT},createPhotoDescription);

export {similarPhotoDescription};

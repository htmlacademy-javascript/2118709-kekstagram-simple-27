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

const createPhoto = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description:getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomNumber(15,200),
  comments:getRandomNumber(0,200),
});

const getPhotos = () => Array.from({length: SIMILAR_PHOTO_COUNT}, (_, photoIndex) => createPhoto(photoIndex + 1));

export {getPhotos};

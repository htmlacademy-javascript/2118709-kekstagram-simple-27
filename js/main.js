import {renderPhotoThumbnail} from './thumbnail.js';
import {initSlider} from './effects.js';
import {initFormModal} from './form.js';
import {getData} from './api.js';

const PHOTO_COUNT = 25;

initSlider();
initFormModal();

getData((photos)=> {
  renderPhotoThumbnail(photos.slice(0,PHOTO_COUNT));
});

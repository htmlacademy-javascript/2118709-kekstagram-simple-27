import {renderPhotoThumbnail} from './thumbnail.js';
import {initModals,setUserFormSubmit, closeModal} from './form.js';
import {getData} from './api.js';

const PHOTO_COUNT = 25;

initModals();

getData((photos)=> {
  renderPhotoThumbnail(photos.slice(0,PHOTO_COUNT));
});

setUserFormSubmit(closeModal);

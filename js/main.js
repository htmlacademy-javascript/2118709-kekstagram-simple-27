import {getPhotos} from './data.js';
import {createThumbnail} from './thumbnail.js';
import {initModals} from './form.js';

const photos = getPhotos();

createThumbnail(photos);

initModals();

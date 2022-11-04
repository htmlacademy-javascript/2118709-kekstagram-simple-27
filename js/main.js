import {generatePhotos} from './data.js';
import {renderPhotoThumbnail} from './thumbnail.js';
import {initModals} from './form.js';

const PHOTO_COUNT = 25;

const photos = generatePhotos(PHOTO_COUNT);

renderPhotoThumbnail(photos);

initModals();

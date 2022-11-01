import {getPhotos} from './data.js';
import {createThumbnail} from './thumbnail.js';
const photos = getPhotos();

createThumbnail(photos);

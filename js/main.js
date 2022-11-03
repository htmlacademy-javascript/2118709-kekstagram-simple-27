import {getPhotos} from './data.js';
import {createThumbnail} from './thumbnail.js';
import {allModal} from './form.js';

const photos = getPhotos();

createThumbnail(photos);

allModal();

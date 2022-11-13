import {isEscapeKey} from './util.js';
import {resetValue} from './scale.js';
import {resetEffects} from './effects.js';

const imageWindow = document.querySelector('.img-upload');
const imageForm = imageWindow.querySelector('.img-upload__form');
const imageFormOverlay = imageForm.querySelector('.img-upload__overlay');
const cancelButton = imageFormOverlay.querySelector('.img-upload__cancel');
const uploadFileButton = imageForm.querySelector('#upload-file');

const pristine = new Pristine(imageForm,{
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text__error-text'
});

const onFormSubmit = (evt) => {
  if ( pristine.validate()) {
    evt.preventDefault();
  } else {
    evt.preventDefault();
  }
};

const openModal = () => {
  imageFormOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onEscapeKeydown);
};

const closeModal = () => {
  imageForm.reset();
  resetValue();
  resetEffects();
  pristine.reset();
  imageFormOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscapeKeydown);
};

function onEscapeKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

const onCancelButtonClick = () => {
  closeModal();
};

const onChangeFile = () => {
  openModal();
};

const initModals = () => {
  uploadFileButton.addEventListener('change', onChangeFile);
  cancelButton.addEventListener('click', onCancelButtonClick);
  imageForm.addEventListener('submit', onFormSubmit);
};

export {initModals};

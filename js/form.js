import {isEscapeKey} from './util.js';

const bodyElement = document.querySelector('body');
const imageWindow = bodyElement.querySelector('.img-upload');
const imageForm = imageWindow.querySelector('.img-upload__form');
const imageFormOverlay = imageForm.querySelector('.img-upload__overlay');
const cancelButton = imageFormOverlay.querySelector('.img-upload__cancel');
const downloadImageButton = imageForm.querySelector('#upload-file');

const pristine = new Pristine(imageForm,{
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text__error-text'
});

const onFormSubmit = (evt) => {
  evt.preventDefault();
  pristine.validate();
};

const openModal = () => {
  imageFormOverlay.classList.remove('hidden');
  bodyElement.classList.add('modal-open');
  document.addEventListener('keydown', onEscapeKeydown);
};

const closeModal = () => {
  imageForm.reset();
  pristine.reset();
  imageFormOverlay.classList.add('hidden');
  bodyElement.classList.remove('modal-open');
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

const allModal = () => {
  downloadImageButton.addEventListener('change', onChangeFile);
  cancelButton.addEventListener('click', onCancelButtonClick);
  imageForm.addEventListener('submit', onFormSubmit);
};

export {allModal};

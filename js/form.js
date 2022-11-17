import {isEscapeKey} from './util.js';
import {resetValue} from './scale.js';
import {resetEffects} from './effects.js';
import {sendData} from './api.js';
import {showErrorMessage, showSuccessMessage} from './message.js';

const imageWindow = document.querySelector('.img-upload');
const imageForm = imageWindow.querySelector('.img-upload__form');
const imageFormOverlay = imageForm.querySelector('.img-upload__overlay');
const cancelButton = imageFormOverlay.querySelector('.img-upload__cancel');
const uploadFileButton = imageForm.querySelector('#upload-file');
const submitButton = imageFormOverlay.querySelector('.img-upload__submit');

const pristine = new Pristine(imageForm,{
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text__error-text'
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Отправляю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Опубликовать';
};

function openModal() {
  imageFormOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onFormEscapeKeydown);
  imageForm.addEventListener('submit',onFormSubmit);
}

function closeModal() {
  imageForm.reset();
  resetValue();
  resetEffects();
  pristine.reset();
  imageFormOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onFormEscapeKeydown);
  imageForm.removeEventListener('submit',onFormSubmit);
}

function onFormSubmit (evt) {
  evt.preventDefault();

  if (pristine.validate()) {
    blockSubmitButton();
    sendData(
      () => {
        closeModal();
        unblockSubmitButton();
        showSuccessMessage();
      },
      () => {
        unblockSubmitButton();
        document.removeEventListener('keydown', onFormEscapeKeydown);
        showErrorMessage();
      },
      new FormData(evt.target),
    );
  }
}

function onFormEscapeKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
}

const onCancelButtonClick = () => {
  closeModal();
};

const onFileChange = () => {
  openModal();
};

const initFormModal = () => {
  uploadFileButton.addEventListener('change', onFileChange);
  cancelButton.addEventListener('click', onCancelButtonClick);
};

export {initFormModal, onFormEscapeKeydown};

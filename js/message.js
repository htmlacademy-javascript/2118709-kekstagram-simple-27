import {isEscapeKey} from './util.js';
import {onFormEscapeKeydown} from './form.js';

const successAlertTemplate = document.querySelector('#success').content.querySelector('.success');
const errorAlertTemplate = document.querySelector('#error').content.querySelector('.error');

const showSuccessMessage = () => {
  const successAlert = successAlertTemplate.cloneNode(true);
  document.body.append(successAlert);
  successAlertTemplate.querySelector('.success__button').addEventListener('click', onSuccessButtonClick);
  document.addEventListener('click', onSuccessMessageOutsideClick);
  document.addEventListener('keydown', onSuccessMessageEscapeKeydown);
};

function onSuccessButtonClick () {
  closeSuccessMessage();
}

function onSuccessMessageOutsideClick () {
  closeSuccessMessage();
}

function onSuccessMessageEscapeKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeSuccessMessage();
  }
}

function closeSuccessMessage() {
  document.removeEventListener('click', onSuccessButtonClick);
  document.removeEventListener('click', onSuccessMessageOutsideClick);
  document.removeEventListener('keydown', onSuccessMessageEscapeKeydown);
  document.querySelector('.success').remove();
}


const showErrorMessage = () => {
  const errorAlert = errorAlertTemplate.cloneNode(true);
  document.body.append(errorAlert);
  errorAlertTemplate.querySelector('.error__button').addEventListener('click', onErrorButtonClick);
  document.addEventListener('click', onErrorMessageOutsideClick);
  document.addEventListener('keydown', onErrorMessageEscapeKeydown);
};

function onErrorButtonClick () {
  closeErrorMessage();
}

function onErrorMessageOutsideClick () {
  closeErrorMessage();
}

function onErrorMessageEscapeKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeErrorMessage();
  }
}

function closeErrorMessage() {
  document.removeEventListener('click', onErrorButtonClick);
  document.removeEventListener('click', onErrorMessageOutsideClick);
  document.removeEventListener('keydown', onErrorMessageEscapeKeydown);
  document.removeEventListener('keydown', onFormEscapeKeydown);
  document.querySelector('.error').remove();
}

export {showErrorMessage, showSuccessMessage};

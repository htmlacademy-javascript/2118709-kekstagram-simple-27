import {isEscapeKey} from './util.js';

const successAlertTemplate = document.querySelector('#success').content.querySelector('.success');
const errorAlertTemplate = document.querySelector('#error').content.querySelector('.error');


const showSuccessAlert = () => {
  const successAlert = successAlertTemplate.cloneNode(true);
  document.body.append(successAlert);
  const successButton = successAlertTemplate.querySelector('.success__button');
  successButton.addEventListener('click', onButtonClick);
  document.addEventListener('click', onOutsideClick);
  document.addEventListener('keydown', onMessageEscapeKeydown);
};

const showErrorAlert = () => {
  const errorAlert = errorAlertTemplate.cloneNode(true);
  document.body.append(errorAlert);
  const errorButton = errorAlertTemplate.querySelector('.error__button');
  errorButton.addEventListener('click', onButtonClick);
  document.addEventListener('click', onOutsideClick);
  document.addEventListener('keydown', onMessageEscapeKeydown);
};

const closeAlert = () => {
  const alertBlock =
    document.querySelector('.success') || document.querySelector('.error');
  alertBlock.remove();
  document.removeEventListener('click', onButtonClick);
  document.removeEventListener('click', onOutsideClick);
  document.removeEventListener('keydown', onMessageEscapeKeydown);
};

function onButtonClick () {
  closeAlert();
}

function onOutsideClick () {
  closeAlert();
}


function onMessageEscapeKeydown(evt) {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeAlert();
  }
}

export {showErrorAlert, showSuccessAlert};

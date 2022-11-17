import {showGetDataAlert} from './util.js';

const GET_DATA_URL = 'https://27.javascript.pages.academy/kekstagram-simple/data';
const SEND_DATA_URL = 'https://27.javascript.pages.academy/kekstagram-simple';

const getData = (onSuccess) => {
  fetch(GET_DATA_URL)
    .then((response) => response.json())
    .then(onSuccess)
    .catch(() => {
      showGetDataAlert ('Ошибка загрузки данных. Перезагрузите страницу');
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    SEND_DATA_URL,
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export {getData, sendData};

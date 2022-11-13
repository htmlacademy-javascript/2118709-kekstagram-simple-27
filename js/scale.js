const plusButton = document.querySelector('.scale__control--bigger');
const minusButton = document.querySelector('.scale__control--smaller');
const scaleValue = document.querySelector('.scale__control--value');
const imagePreview = document.querySelector('.img-upload__preview img');

const STEP = 25;
const DEFAULT_VALUE = 100;
const MIN_VALUE = 25;
const MAX_VALUE = 100;

const scaleImage = (value = DEFAULT_VALUE) => {
  imagePreview.style.transform = `scale(${value / 100})`;
  scaleValue.value = `${value}%`;
};

const onMinusButtonClick = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let newValue = currentValue - STEP;
  if (newValue < MIN_VALUE){
    newValue = MIN_VALUE;
  }
  scaleImage(newValue);
};

const onPlusButtonClick = () => {
  const currentValue = parseInt(scaleValue.value, 10);
  let newValue = currentValue + STEP;
  if (newValue > MAX_VALUE){
    newValue = MAX_VALUE;
  }
  scaleImage(newValue);
};

const resetValue = () => {
  scaleImage();
};

plusButton.addEventListener('click',onPlusButtonClick);
minusButton.addEventListener('click',onMinusButtonClick);

export {resetValue};

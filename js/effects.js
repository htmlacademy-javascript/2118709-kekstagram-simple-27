import {resetValue} from './scale.js';

const form = document.querySelector('.img-upload__form');
const imagePreview = document.querySelector('.img-upload__preview img');
const filterSlider = document.querySelector('.effect-level__slider');
const filterValue = document.querySelector('.effect-level__value');

const EFFECTS = [
  {
    name:'none',
    min: 0,
    max: 100,
    step: 1,
    unit:'',
  },
  {
    name:'chrome',
    filter: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit:'',
  },
  {
    name:'sepia',
    filter: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit:'',
  },
  {
    name:'marvin',
    filter: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit:'%'
  },
  {
    name:'phobos',
    filter: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit:'px'
  },
  {
    name:'heat',
    filter: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit:'',
  }
];

const DEFAULT_EFFECT = EFFECTS[0];
let chosenEffect = DEFAULT_EFFECT;

const changeSlider = ()=>{
  filterSlider.classList.remove('hidden');
  filterSlider.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    step: chosenEffect.step,
    start: chosenEffect.max,
  });
  if (chosenEffect === DEFAULT_EFFECT) {
    filterSlider.classList.add('hidden');
  }
};

noUiSlider.create(filterSlider, {
  range: {
    min: DEFAULT_EFFECT.min,
    max: DEFAULT_EFFECT.max,
  },
  start: DEFAULT_EFFECT.max,
  step: DEFAULT_EFFECT.step,
  connect: 'lower',
  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    },
  },
});
changeSlider();


const onRadioChange = (evt) => {
  if (!evt.target.classList.contains('effects__radio')) {
    return;
  }
  chosenEffect = EFFECTS.find((effect)=> effect.name === evt.target.value);
  imagePreview.className = '';
  imagePreview.classList.add(`effects__preview--${chosenEffect.name}`);
  resetValue();
  changeSlider();
};

const onSliderChange = () => {
  imagePreview.style.filter = 'none';
  filterValue.value = '';
  if (chosenEffect === DEFAULT_EFFECT){
    return;
  }
  const effectValue = filterSlider.noUiSlider.get();
  imagePreview.style.filter = `${chosenEffect.filter}(${effectValue}${chosenEffect.unit})`;
  filterValue.value = effectValue;
};

const resetEffects = () => {
  chosenEffect = DEFAULT_EFFECT;
  changeSlider();
};


form.addEventListener('change', onRadioChange);
filterSlider.noUiSlider.on('update', onSliderChange);

export {resetEffects};

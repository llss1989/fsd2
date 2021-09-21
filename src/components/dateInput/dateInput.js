import Inputmask from 'inputmask';

const dateInput = () => {
  window.addEventListener('DOMContentLoaded', (e) => {
    const input = document.querySelector('.date-input__item');
    Inputmask('99.99.9999', { placeholder: 'ДД.ММ.ГГГГ' }).mask(input);
  });
};

dateInput();

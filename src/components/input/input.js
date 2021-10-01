import Inputmask from 'inputmask';

const inputs = () => {
  window.addEventListener('DOMContentLoaded', (e) => {
    const dateInput = document.querySelector('.input_date-text');
    Inputmask('99.99.9999', { placeholder: 'ДД.ММ.ГГГГ' }).mask(dateInput);
  });
};
inputs();

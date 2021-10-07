import Inputmask from 'inputmask';

const inputs = () => {
  window.addEventListener('DOMContentLoaded', (e) => {
    const dateInput = document.querySelectorAll('.input__date-text');
    Inputmask('99.99.9999', { placeholder: 'ДД.ММ.ГГГГ' }).mask(dateInput);
    const emailInput = document.querySelectorAll('.input__email');
    Inputmask('email', { placeholder: 'Email' }).mask(emailInput);
    const textInput = document.querySelectorAll('.input__text');
    Inputmask('9-a{1,3}9{1,3}').mask(textInput);
  });
};
inputs();

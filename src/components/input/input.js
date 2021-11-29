import Inputmask from 'inputmask';

const inputs = () => {
  window.addEventListener('DOMContentLoaded', (e) => {
    const dateInput = document.querySelectorAll('.input__date-text');
    Inputmask('99.99.9999', { placeholder: 'ДД.ММ.ГГГГ' }).mask(dateInput);
    const emailInput = document.querySelectorAll('.input__email');
    Inputmask('email', { placeholder: 'Email' }).mask(emailInput);
    // const passwordInputs = document.querySelectorAll('.input__password');
    // Inputmask('password', { placeholder: 'Пароль' }).mask(passwordInputs);
  });
};
inputs();

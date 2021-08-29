import Inputmask from 'inputmask';
import $ from 'jquery';

const dateInput = () => {
  window.addEventListener('DOMContentLoaded', (e) => {
    const input = document.querySelector('.dateInput__item');
    Inputmask('99.99.9999', { placeholder: 'ДД.ММ.ГГГГ' }).mask(input);
    $('.dateInput').addClass('AAAA');
  });
};

dateInput();

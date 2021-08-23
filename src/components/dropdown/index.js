import dropdown from './dropdown.js';

window.addEventListener('DOMContentLoaded', (e) => {

  const dropdownFromFirstBlockGuests = document.querySelectorAll('.dropdown_guests');
  const optionsForGuestsDropdown = {
    question: 'Сколько гостей?',
    options: ['Взрослые', 'Дети', 'Младенцы'],
    endings: [['гость', 'гостя', 'гостей'], ['ребенок', 'ребенка', 'детей'], ['младенец', 'младенца', 'младенцев']],
    buttons: ['Очистить', 'Применить'],
  };

  const dropdownForRooms = document.querySelectorAll('.dropdown_rooms');
  const optionsForDropdownRooms = {
    question: 'Какие удобства?',
    options: ['Спальни', 'Кровати', 'Ванные комнаты'],
    endings: [['спальня', 'спальни', 'спален'], ['кровать', 'кровати', 'кроватей'], ['ванная комната', 'ванные комнаты', 'ванных комнат']],
    buttons: ['Очистить', 'Применить'],
  };
  dropdown(dropdownFromFirstBlockGuests, optionsForGuestsDropdown)
  dropdown(dropdownForRooms, optionsForDropdownRooms)
});

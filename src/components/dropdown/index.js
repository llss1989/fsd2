import dropdown from './dropdown.js';

window.addEventListener('DOMContentLoaded', (e) => {

  const dropdownForGuests = document.querySelectorAll('.dropdown_guests');
  const optionsForGuestsDropdown = {
    question: 'Сколько гостей?',
    options: ['Взрослые', 'Дети', 'Младенцы'],
    endings: [['гость', 'гостя', 'гостей'], ['ребенок', 'ребенка', 'детей'], ['младенец', 'младенца', 'младенцев']],
    buttons: ['Очистить', 'Применить'],
    optionsValues: [0, 0, 0],
  };

  const dropdownForRooms = document.querySelectorAll('.dropdown_rooms');
  const optionsForDropdownRooms = {
    question: 'Какие удобства?',
    options: ['Спальни', 'Кровати', 'Ванные комнаты'],
    endings: [['спальня', 'спальни', 'спален'], ['кровать', 'кровати', 'кроватей'], ['ванная комната', 'ванные комнаты', 'ванных комнат']],
    buttons: ['Очистить', 'Применить'],
    optionsValues: [0, 0, 0],
  };

  const dropdownForRoomsShowcase = document.querySelectorAll('.dropdown_rooms_showcase');
  const optionsForDropdownRoomsShowcase = {
    question: 'Какие удобства?',
    options: ['Спальни', 'Кровати', 'Ванные комнаты'],
    endings: [['спальня', 'спальни', 'спален'], ['кровать', 'кровати', 'кроватей'], ['ванная комната', 'ванные комнаты', 'ванных комнат']],
    buttons: ['Очистить', 'Применить'],
    optionsValues: [2, 2, 0],
    status: 'active',
  };

  const dropdownForGuestsShowcaseExampleOne = document.querySelectorAll('.dropdown_guests_showcase-one');
  const dropdownForGuestsShowcaseExampleTwo = document.querySelectorAll('.dropdown_guests_showcase-two');
  const optionsForGuestsDropdownShowcaseOne = {
    question: 'Сколько гостей?',
    options: ['Взрослые', 'Дети', 'Младенцы'],
    endings: [['гость', 'гостя', 'гостей'], ['ребенок', 'ребенка', 'детей'], ['младенец', 'младенца', 'младенцев']],
    buttons: ['Очистить', 'Применить'],
    optionsValues: [0, 0, 0],
    status: 'active',
  };
  const optionsForGuestsDropdownShowcaseTwo = {
    question: 'Сколько гостей?',
    options: ['Взрослые', 'Дети', 'Младенцы'],
    endings: [['гость', 'гостя', 'гостей'], ['ребенок', 'ребенка', 'детей'], ['младенец', 'младенца', 'младенцев']],
    buttons: ['Очистить', 'Применить'],
    optionsValues: [1, 2, 3],
    status: 'active',
  };
  dropdown(dropdownForGuests, optionsForGuestsDropdown);
  dropdown(dropdownForRooms, optionsForDropdownRooms);
  dropdown(dropdownForRoomsShowcase, optionsForDropdownRoomsShowcase);
  dropdown(dropdownForGuestsShowcaseExampleOne, optionsForGuestsDropdownShowcaseOne);
  dropdown(dropdownForGuestsShowcaseExampleTwo, optionsForGuestsDropdownShowcaseTwo);
});

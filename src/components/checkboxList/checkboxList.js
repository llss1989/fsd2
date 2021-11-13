const checkBoxListButtons = document.querySelectorAll('.checkboxList__button');

[...checkBoxListButtons].map((button) => button.addEventListener('click', (e) => {
  const checkboxList = e.target.closest('.checkboxList');
  const list = checkboxList.querySelector('.checkboxList__list');
  const button = checkboxList.querySelector('.checkboxList__button');
  list.classList.toggle('checkboxList__list_closed');
  button.classList.toggle('checkboxList__button_opened');
  console.log(button)
}));

const dropdownListButtons = document.querySelectorAll('.dropdown-list__button');

[...dropdownListButtons].map((button) => button.addEventListener('click', (e) => {
  const dropdownList = e.target.closest('.dropdown-list');
  const list = dropdownList.querySelector('.dropdown-list__list');
  const dropDownListButton = dropdownList.querySelector('.dropdown-list__button');
  list.classList.toggle('dropdown-list__list_closed');
  dropDownListButton.classList.toggle('dropdown-list__button_opened');
}));

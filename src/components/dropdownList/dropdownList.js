const dropdownListButtons = document.querySelectorAll('.dropdown-list__button');

[...dropdownListButtons].map((button) => button.addEventListener('click', (e) => {
  const dropdownList = e.target.closest('.dropdown-list');
  const list = dropdownList.querySelector('.dropdown-list__list');
  const button = dropdownList.querySelector('.dropdown-list__button');
  list.classList.toggle('dropdown-list__list_closed');
  button.classList.toggle('dropdown-list__button_opened');
  console.log(button);
}));

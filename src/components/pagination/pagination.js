import $ from 'jquery';

const items = $('.pagination__list-wrapper > *');
const numItems = items.length;
const perPage = 12;
const boxPagination = document.querySelector('.pagination__controller');

items.slice(perPage).hide();

$('.pagination__controller').pagination({
  items: numItems,
  itemsOnPage: perPage,
  prevText: '&laquo;',
  nextText: '&raquo;',
  displayedPages: 3,
  edges: 1,
  onPageClick(pageNumber) {
    const nextButtonText = $('.page-link.next');
    const showFrom = perPage * (pageNumber - 1);
    const showTo = showFrom + perPage;
    items.hide().slice(showFrom, showTo).show();
    const countItems = $('.pagination__list-wrapper > *').length;
    const currentPage = $('.pagination__controller').pagination('getCurrentPage');
    const labelText = countItems > 100 ? `${currentPage * perPage - 3} - ${currentPage * perPage} из 100+ вариантов аренды` : `${currentPage * perPage - 3} - ${currentPage * perPage} из ${countItems} вариантов аренды`;
    const textElement = document.createElement('h2');
    textElement.textContent = labelText;
    nextButtonText.text('');
    boxPagination.appendChild(textElement);
  },
  onInit() {
    const countItems = $('.pagination__list-wrapper > *').length;
    const currentPage = $('.pagination__controller').pagination('getCurrentPage');
    const nextButtonText = $('.page-link.next');
    const labelText = countItems > 100 ? `${currentPage * perPage - 3} - ${currentPage * perPage} из 100+ вариантов аренды` : `${currentPage * perPage - 3} - ${currentPage * perPage} из ${countItems} вариантов аренды`;
    const textElement = document.createElement('h2');
    textElement.textContent = labelText;
    textElement.classList.add('pagination__info');
    nextButtonText.text('');
    boxPagination.appendChild(textElement);
  },
});

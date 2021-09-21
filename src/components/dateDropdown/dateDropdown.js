import 'air-datepicker';
import $ from 'jquery';

$(() => {
  const $datepicker = $('.date-dropdown__input_one');
  $datepicker.datepicker({
    range: true,
    todayButton: new Date(),
    dateFormat: 'dd.mm.yy',
    clearButton: true,
    autoClose: true,
    prevHtml: '<span class="material-icons">arrow_back</span>',
    nextHtml: '<span class="material-icons">arrow_forward</span>',
    multipleDatesSeparator: ' - ',
    navTitles: {
      days: 'MM yyyy',
    },
    // inline: true,
    // classes: 'extra',
    onRenderCell(date, cellType) {
      if (cellType === 'day') {
        const day = date.getDay();
        return day;
      }
    },
    onSelect(fd) {
      $('.date-dropdown__input_one').val(fd.split('-')[0]);
      $('.date-dropdown__input_two').val(fd.split('-')[1]);
    },
  }).data('datepicker');
});

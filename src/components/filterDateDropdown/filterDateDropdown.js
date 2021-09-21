import 'air-datepicker';
import $ from 'jquery';

$(() => {
  const $datepicker = $('.js-datepicker');
  // const disabledDates = [0, 6];

  // const datepicker = $datepicker.datepicker({
  $datepicker.datepicker({
    range: true,
    todayButton: new Date(),
    dateFormat: 'd M',
    clearButton: true,
    autoClose: true,
    inline: true,
    // startDate: new Date('September 17, 2021'),
    prevHtml: '<span class="material-icons">arrow_back</span>',
    nextHtml: '<span class="material-icons">arrow_forward</span>',
    navTitles: {
      days: 'MM yyyy',
    },
    // offset: 22,
    multipleDatesSeparator: ' - ',
    onRenderCell(date, cellType) {
      if (cellType === 'day') {
        const day = date.getDay();
        return day;
      }
      return null;
    },
  }).data('datepicker');
});

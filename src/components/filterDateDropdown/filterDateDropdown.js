import 'air-datepicker';
import $ from 'jquery';

$(() => {
  const $datepicker = $('.js-datepicker');
  const disabledDates = [0, 6];

  const datepicker = $datepicker.datepicker({
    range: true,
    todayButton: new Date(),
    dateFormat: 'd M',
    clearButton: true,
    autoClose: true,
    // classes: 'datepicker__calendar',
    // position: 'bottom right',
    // offset: 22,
    multipleDatesSeparator: ' - ',
    onRenderCell(date, cellType) {
      if (cellType === 'day') {
        const day = date.getDay();
        const isDisabled = disabledDates.indexOf(day) != -1;
        return {
          disabled: isDisabled,
        };
      }
    },
    // onSelect(formattedDate, date, inst) {
    //   if (date) {
    //     // alert(date);
    //   }
    // },
  }).data('datepicker');
});

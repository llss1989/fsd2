import 'air-datepicker';
import $ from 'jquery';

$(() => {
  const $datepicker = $('.dateDropdown__input_one');

  // const disabledDates = [0, 6];
  // const datepicker = $datepicker.datepicker({
  $datepicker.datepicker({
    range: true,
    todayButton: new Date(),
    dateFormat: 'dd.mm.yy',
    clearButton: true,
    autoClose: true,
    prevHtml: '<span class="material-icons">arrow_back</span>',
    nextHtml: '<span class="material-icons">arrow_forward</span>',
    // placeholder: 'aaa',
    // classes: 'datepicker__calendar',
    // position: 'bottom right',
    // offset: 22,
    multipleDatesSeparator: ' - ',
    onRenderCell(date, cellType) {
      if (cellType === 'day') {
        const day = date.getDay();
        // const isDisabled = disabledDates.indexOf(day) != -1;
        // return {
        //   disabled: isDisabled,
        // };
        return day;
      }
    },
    onSelect(fd) {
      $('.dateDropdown__input_one').val(fd.split('-')[0]);
      $('.dateDropdown__input_two').val(fd.split('-')[1]);
    },
    // onShow(inst, animationCompleted) {
    //   const viewButton = document.querySelector('.expandMore__icon_dateDropdown');
    //   viewButton.addEventListener('click', () => {
    //     console.log('aaa')

    //   });
    // },
    // onHide(inst, animationCompleted) {
    //   const viewButton = document.querySelector('.expandMore__icon_dateDropdown');
    //   viewButton.addEventListener('click', () => {
    //     console.log('bb')

    //   });
    // },
  }).data('datepicker');
});

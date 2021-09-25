import 'air-datepicker';
import $ from 'jquery';

$(() => {
  // const $datepicker = $('.js-datepicker');
  // const disabledDates = [0, 6];

  // const datepicker = $datepicker.datepicker({
  // $datepicker.datepicker({
  // range: true,
  // todayButton: new Date(),
  // dateFormat: 'd M',
  // clearButton: true,
  // autoClose: true,
  // inline: true,
  // // startDate: new Date('September 17, 2021'),
  // prevHtml: '<span class="material-icons">arrow_back</span>',
  // nextHtml: '<span class="material-icons">arrow_forward</span>',
  // navTitles: {
  //   days: 'MM yyyy',
  // },
  //   // offset: 22,
  //   multipleDatesSeparator: ' - ',
  //   onRenderCell(date, cellType) {
  //     if (cellType === 'day') {
  //       const day = date.getDay();
  //       return day;
  //     }
  //     return null;
  //   },
  // }).data('datepicker');
  $('.js-datepicker').datepicker({
    // todayButton: new Date(),
    dateFormat: 'd M',
    clearButton: true,
    // autoClose: true,
    // inline: true,
    // startDate: new Date('September 17, 2021'),
    // prevHtml: '<span class="material-icons">arrow_back</span>',
    // nextHtml: '<span class="material-icons">arrow_forward</span>',
    multipleDatesSeparator: '-',
    navTitles: {
      days: 'MM yyyy',
    },
    // language: 'en',
    // timepicker: true,
    // position: 'bottom center',
    range: true,
    onShow(dp, animationCompleted) {
      if (!animationCompleted) {
        if (dp.$datepicker.find('button').html() === undefined) { /* ONLY when button don't existis */
          const boxWithButtons = dp.$datepicker.find('.datepicker--buttons');
          console.log(boxWithButtons);
          boxWithButtons.append('<button type="button" class="uk-button uk-button-default uk-button-small uk-width-1-1 uk-margin-small-bottom" disabled="disabled"><i class="fas fa-check"></i> Применить</button>');
          dp.$datepicker.find('button').click((event) => {
            console.log('aaa');
            dp.hide();
          });
        }
      }
    },
    onSelect(formattedDate, date, dp) {
      if (formattedDate.length > 0) {
        dp.$datepicker.find('button').prop('disabled', false).removeClass('uk-button-default').addClass('uk-button-primary');
      } else {
        dp.$datepicker.find('button').prop('disabled', true).removeClass('uk-button-primary').addClass('uk-button-default');
      }
    },
  });
});

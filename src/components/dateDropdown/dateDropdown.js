import 'air-datepicker';
import $ from 'jquery';

$(() => {
  const $datepicker = $('.date-dropdown__input_one');
  $datepicker.datepicker({
    range: true,
    dateFormat: 'dd.mm.yy',
    clearButton: true,
    autoClose: true,
    prevHtml: '<span class="material-icons">arrow_back</span>',
    nextHtml: '<span class="material-icons">arrow_forward</span>',
    multipleDatesSeparator: ' - ',
    navTitles: {
      days: 'MM yyyy',
    },
    onShow(dp, animationCompleted) {
      if (!animationCompleted) {
        if (dp.$datepicker.find('button').html() === undefined) { /* ONLY when button don't existis */
          const boxWithButtons = dp.$datepicker.find('.datepicker--buttons');
          boxWithButtons.append('<button type="button" class="uk-button uk-button-default uk-button-small uk-width-1-1 uk-margin-small-bottom" disabled="disabled"><i class="fas fa-check"></i> Применить</button>');
          dp.$datepicker.find('button').click((event) => {
            dp.hide();
          });
        }
      }
    },
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

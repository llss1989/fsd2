import 'air-datepicker';
import $ from 'jquery';

$(() => {
  $('.filter-date-dropdown__datepicker').datepicker({
    dateFormat: 'd M',
    clearButton: true,
    multipleDatesSeparator: '-',
    startDate: new Date(),
    prevHtml: '<span class="material-icons">arrow_back</span>',
    nextHtml: '<span class="material-icons">arrow_forward</span>',
    navTitles: {
      days: 'MM yyyy',
    },
    range: true,
    onShow(dp, animationCompleted) {
      if (!animationCompleted) {
        if (dp.$datepicker.find('button').html() === undefined) {
          const boxWithButtons = dp.$datepicker.find('.datepicker--buttons');
          boxWithButtons.append('<button type="button" class="filter-date-dropdown__apply-button" disabled="disabled">Применить</button>');
          dp.$datepicker.find('button').click((event) => {
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

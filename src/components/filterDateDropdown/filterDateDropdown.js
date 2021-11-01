import 'air-datepicker';
import $ from 'jquery';

$(() => {
  $('.js-datepicker').datepicker({
    // todayButton: new Date(),
    dateFormat: 'd M',
    clearButton: true,
    multipleDatesSeparator: '-',
    navTitles: {
      days: 'MM yyyy',
    },
    range: true,
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
    onSelect(formattedDate, date, dp) {
      if (formattedDate.length > 0) {
        dp.$datepicker.find('button').prop('disabled', false).removeClass('uk-button-default').addClass('uk-button-primary');
      } else {
        dp.$datepicker.find('button').prop('disabled', true).removeClass('uk-button-primary').addClass('uk-button-default');
      }
    },
  });
});

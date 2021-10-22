import $ from 'jquery';
import ionRangeSlider from 'ion-rangeslider';

$('.js-range-slider').ionRangeSlider({
  type: 'double',
  skin: 'round',
  min: 5000,
  max: 10000,
  from: 6000,
  to: 9000,
  // grid: true,
  hide_from_to: true,
  hide_min_max: true,
  // force_edges: true,
});

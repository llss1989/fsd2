import $ from 'jquery';

import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

$('.room-card__slick-slider').slick({
  slidesToShow: 1,
  dots: true,
  arrow: true,
  prevArrow: '<button type="button" class="material-icons room-card__slick-arrow room-card__slick-arrow_prev">expand_more</button>',
  nextArrow: '<button type="button" class="material-icons room-card__slick-arrow room-card__slick-arrow_next">expand_more</button>',
});

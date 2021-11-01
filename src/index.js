import '../node_modules/air-datepicker/dist/css/datepicker.min.css';
import '../node_modules/ion-rangeslider/css/ion.rangeSlider.min.css';
// import '../node_modules/paginationjs/dist/pagination.css';
import  '../node_modules/flaviusmatis-simplePagination.js-da97104/jquery.simplePagination.js';
import '../node_modules/flaviusmatis-simplePagination.js-da97104/simplePagination.css';

function importAll(resolve) {
  resolve.keys().forEach(resolve);
}
importAll(require.context('../src/', true, /\.js$|\.scss$/));

// window.addEventListener('DOMContentLoaded', () => {
//   importAll(require.context('../src/', true, /\.js$|\.scss$/));
// });

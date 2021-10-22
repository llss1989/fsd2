import '../node_modules/air-datepicker/dist/css/datepicker.min.css';
import '../node_modules/ion-rangeslider/css/ion.rangeSlider.min.css';
import './components/rangeSlider/rangeSlider.scss';

function importAll(resolve) {
  resolve.keys().forEach(resolve);
}
importAll(require.context('../src/', true, /\.js$|\.scss$/));

// window.addEventListener('DOMContentLoaded', () => {
//   importAll(require.context('../src/', true, /\.js$|\.scss$/));
// });

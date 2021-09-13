import '../node_modules/air-datepicker/dist/css/datepicker.min.css';

function importAll(resolve) {
  resolve.keys().forEach(resolve);
}
importAll(require.context('../src/', true, /\.js$|\.scss$/));

// window.addEventListener('DOMContentLoaded', () => {
//   importAll(require.context('../src/', true, /\.js$|\.scss$/));
// });

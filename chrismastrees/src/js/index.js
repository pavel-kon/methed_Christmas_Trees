import hello from './modules/hello';
import garlandInit from './modules/garland';
import createSnow from './modules/snow';
import './modules/burger';
import './modules/modal';
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

new AirDatepicker('#date');

console.log(hello);
// garlandInit();
// createSnow(5, 20, 500);

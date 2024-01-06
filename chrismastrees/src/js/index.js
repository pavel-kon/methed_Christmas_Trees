import hello from './modules/hello';
import garlandInit from './modules/garland';
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';

new AirDatepicker('#date');

console.log(hello);
garlandInit();

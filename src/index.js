import './styles/main.scss';
import { navCreate } from './related/nav';
import createChart from './related/graph';
import { moveSlides } from './related/carousel';
import { getData } from './related/data';

navCreate();
createChart();
moveSlides();
const obj = await getData('tel aviv');
console.log(obj.city);

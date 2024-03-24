import './styles/main.scss';
import { navCreate } from './related/nav';
import { moveSlides } from './related/carousel';
import { getData } from './related/data';
import { updatingUi } from './related/updatingUi';
navCreate();
moveSlides();
updatingUi('tel aviv');

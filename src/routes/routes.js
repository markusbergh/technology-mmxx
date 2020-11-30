import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';

const routes = [
  {
    path: '/',
    exact: true,
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage,
  },
];

export default routes;

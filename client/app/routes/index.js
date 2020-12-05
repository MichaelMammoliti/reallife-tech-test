import Home from './home';
import Movies from './movies';

const routes = [
  {
    component: Home,
    props: {
      path: '/',
      exact: true,
    },
  },
  {
    component: Movies,
    props: {
      path: '/movies/:id',
      exact: true,
    },
  },
];

export default routes;

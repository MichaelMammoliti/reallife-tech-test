import Home from './home';
import AddMovie from './add-movie';
import Movie from './movie';
import Search from './search';

const routes = [
  {
    component: Home,
    props: {
      path: '/',
      exact: true,
    }
  },
  {
    component: AddMovie,
    props: {
      path: '/add-movie',
      exact: true,
    }
  },
  {
    component: Movie,
    props: {
      path: '/movie',
      exact: true,
    }
  },
  {
    component: Search,
    props: {
      path: '/search',
      exact: true,
    }
  }
];

export default routes;

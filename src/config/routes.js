import Header from 'containers/Header';
import Home from 'containers/Home';
import Login from 'containers/Login';
import News from 'containers/News';
import Profile from 'containers/Profile';


const routes = [
  {
    path: null,
    component: Header,
    isPrivate: false,
    isExact: true,
  },
  {
    path: '/',
    component: Home,
    isPrivate: false,
    isExact: true,
  },
  {
    path: '/login',
    component: Login,
    isPrivate: false,
    isExact: true,
  },
  {
    path: '/news',
    component: News,
    isPrivate: false,
    isExact: true,
  },
  {
    path: '/profile',
    component: Profile,
    isPrivate: false,
    isExact: true,
  },
];

export default routes;

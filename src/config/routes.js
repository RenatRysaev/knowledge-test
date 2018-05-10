import HomePage from 'containers/HomePage';
import LoginPage from 'containers/LoginPage';
import NewsPage from 'containers/NewsPage';
import ProfilePage from 'containers/ProfilePage';


const routes = [
  {
    path: '/',
    component: HomePage,
    isPrivate: false,
    isExact: true,
  },
  {
    path: '/login',
    component: LoginPage,
    isPrivate: false,
    isExact: true,
  },
  {
    path: '/news',
    component: NewsPage,
    isPrivate: false,
    isExact: true,
  },
  {
    path: '/profile',
    component: ProfilePage,
    isPrivate: true,
    isExact: true,
  },
];

export default routes;

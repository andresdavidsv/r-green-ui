import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Request from '../containers/Request';
import NotFound from '../containers/NotFound';
import Profile from '../components/Profile';
import Order from '../containers/Order';
import ForgetPassword from '../containers/ForgetPassword';

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    exact: true,
    path: '/login',
    component: Login,
  },
  {
    exact: true,
    path: '/register',
    component: Register,
  },
  {
    exact: true,
    path: '/forgetPassword',
    component: ForgetPassword,
  },
  {
    exact: true,
    path: '/request',
    component: Request,
  },
  {
    exact: true,
    path: '/profile',
    component: Profile,
  },
  {
    exact: true,
    path: '/order',
    component: Order,
  },
  {
    name: 'NotFound',
    component: NotFound,
  },
];

export default routes;
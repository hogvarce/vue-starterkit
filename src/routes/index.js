import Home from 'pages/Home';
import Login from 'pages/Login';

export const routes = [
  { path: '/login', component: Login },
  { path: '/', component: Home,  meta: { requiresAuth: true } },
];

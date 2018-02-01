import Home from 'pages/Home';
import About from 'pages/About';
import Login from 'pages/Login';

export const routes = [
  { path: '/login', component: Login },
  { path: '/', component: Home,  meta: { requiresAuth: true } },
  { path: '/about', component: About }
];

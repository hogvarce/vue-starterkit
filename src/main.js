import Vue from 'vue';
import VueRouter from 'vue-router';
import { routes } from 'routes';
import BootstrapVue from 'bootstrap-vue';
import Vuex from 'vuex';
import Store from 'store';
import VueProgressiveImage from 'vue-progressive-image';
import App from './App.vue';

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(Vuex);
Vue.use(VueProgressiveImage, {
  placeholder: 'https://unsplash.it/1920/1080?image=20',
  blur: 30,
});

const router = new VueRouter({
  mode: 'history',
  routes,
});

const store = new Vuex.Store({
  ...Store,
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});

import Vue from 'vue';
import Router from 'vue-router';
import { routes } from './router/index';
import Fragment from 'vue-fragment';
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import App from './App.vue';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-pro/css/all.css';
import '@fortawesome/fontawesome-pro/js/all.js';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fas, far, fal, fab);

import { store } from './store/store';
Vue.config.productionTip = false
Vue.prototype.$EventBus = new Vue();

Vue.use(
    Router,
    Fragment.Plugin,
    BootstrapVue
);

Vue.component('font-awesome-icon', FontAwesomeIcon)

const router = new Router({
  /*base : `/${window.location.href.split('/').slice(3, window.location.href.split('/').indexOf(packageName)+1).join('/')}`,*/
  base : '',
  routes : routes
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

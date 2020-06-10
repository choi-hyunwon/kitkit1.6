import Vue from 'vue';
import Router from 'vue-router';
import App from './App.vue';
import Fragment from 'vue-fragment';
import { routes } from './router/index';
import { store } from './store/store';
import { BootstrapVue } from 'bootstrap-vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/pro-solid-svg-icons';
import { far } from '@fortawesome/pro-regular-svg-icons';
import { fal } from '@fortawesome/pro-light-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-pro/css/all.css';
import '@fortawesome/fontawesome-pro/js/all.js';
import 'bootstrap-vue/dist/bootstrap-vue.css';
library.add(fas, far, fal, fab);

Vue.config.productionTip = false;
Vue.prototype.$EventBus = new Vue();
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(
    Router,
    Fragment.Plugin,
    BootstrapVue
);

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
};

const router = new Router({
  mode : 'history',
  routes : routes
});

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app');

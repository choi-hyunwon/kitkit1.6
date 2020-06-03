import Vue from 'vue'
import Router from 'vue-router';
import { routes } from './router/index';
import Fragment from 'vue-fragment'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(
    Router,
    Fragment.Plugin
);
const router = new Router({
  /*base : `/${window.location.href.split('/').slice(3, window.location.href.split('/').indexOf(packageName)+1).join('/')}`,*/
  base : '/',
  routes : routes
})



new Vue({
  render: h => h(App),
  router
}).$mount('#app')

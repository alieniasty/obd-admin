import Vue from 'vue';
import App from './App';

import BootstrapVue from 'bootstrap-vue';
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faMicrochip, faDatabase, faCar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import router from './router';

Vue.use(BootstrapVue);
Vue.use(ElementUI);

library.add(faMicrochip, faDatabase, faCar);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,    
  template: '<App/>',
  components: { App }
});
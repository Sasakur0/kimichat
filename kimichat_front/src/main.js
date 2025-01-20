import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import './plugins/element.js'
import 'normalize.css'
import '@/assets/css/base.css'

axios.defaults.baseURL = "http://127.0.0.1:5000"; // 后端基础 URL
axios.defaults.headers.common["Content-Type"] = "application/json";

Vue.prototype.$http = axios;

Vue.prototype.axios = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

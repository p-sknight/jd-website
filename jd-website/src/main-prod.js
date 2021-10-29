import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './assets/css/global.css'
import common from './store/common.js'
import map from './store/map.js'
import * as echarts from 'echarts'

import axios from 'axios'
axios.defaults.baseURL = 'http://47.102.213.164:8080'
axios.interceptors.request.use(config => {
  // config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.prototype.$http = axios
Vue.prototype.$echarts = echarts
Vue.prototype.$global = common
Vue.prototype.$map = map

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

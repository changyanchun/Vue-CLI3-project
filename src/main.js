import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './vuex/store'
import Star from './components/Star/Star.vue'
import './Validate.js'
import Header from './components/Header/Header.vue'
import { Button } from 'mint-ui'
import './mock/mockServer'
//注册全局组件
Vue.component('Header', Header)
Vue.component('Star', Star)
Vue.component(Button.name, Button)  // mt-button

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  //配置路由器
  router,
  //配置Vuex
  store
})

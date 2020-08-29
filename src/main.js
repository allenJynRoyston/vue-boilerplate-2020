import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

// import global components
import {Header, Footer} from './components/'

Vue.component('Header', Header)
Vue.component('Footer', Footer)

new Vue({
  el: '#app',
  router,
  store,
  render: site => site(App)
})

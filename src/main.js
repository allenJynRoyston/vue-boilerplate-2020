import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

// import global components
import {Header, Footer, SplitInput, ListResults} from './components/_index'
Vue.component('Header', Header)
Vue.component('Footer', Footer)
Vue.component('SplitInput', SplitInput)
Vue.component('ListResults', ListResults)


// render app
new Vue({
  el: '#app',
  router,
  store,
  render: site => site(App)
})

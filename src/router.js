// require vue and vue modules
import Vue from 'vue'
import Router from 'vue-router'

// import route components
import {Home} from './routes/_index'

// set routes
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }      
  ]
})


// register router
Vue.use(Router)
import Vue from 'vue'
import Router from 'vue-router'

import Login from '../views/login/'
import hello from '../components/Hello'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/hello',
      name: 'hello',
      component: hello
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Button from 'example/pages/button'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'Home',
      redirect: '/Button'
    },
    {
      path: '/Button',
      name: 'Button',
      component: Button
    }
  ]
})
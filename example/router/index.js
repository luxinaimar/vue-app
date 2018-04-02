import Vue from 'vue'
import Router from 'vue-router'

//webpackChunkName为chunkFilename: '[name].[chunkhash:8].js'中的[name]
const Button = () => import(/* webpackChunkName: 'button' */'example/pages/button')

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
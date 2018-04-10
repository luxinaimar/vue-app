import Vue from 'vue'
import Router from 'vue-router'

//webpackChunkName为chunkFilename: '[name].[chunkhash:8].js'中的[name]
const Button = () => import(/* webpackChunkName: 'button' */'example/pages/button')
const Loading = () => import(/* webpackChunkName: 'loading' */'example/pages/loading')
const Tip = () => import(/* webpackChunkName: 'tip' */'example/pages/tip')

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'Home',
      redirect: '/button'
    },
    {
      path: '/button',
      name: 'Button',
      component: Button
    },
    {
      path: '/loading',
      name: 'Loading',
      component: Loading
    },
    {
      path: '/tip',
      name: 'tip',
      component: Tip
    }
  ]
})
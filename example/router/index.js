import Vue from 'vue'
import Router from 'vue-router'

//webpackChunkName为chunkFilename: '[name].[chunkhash:8].js'中的[name]
const Button = () => import(/* webpackChunkName: 'button' */'example/pages/button')
const Loading = () => import(/* webpackChunkName: 'loading' */'example/pages/loading')
const Tip = () => import(/* webpackChunkName: 'tip' */'example/pages/tip')
const Popup = () => import(/* webpackChunkName: 'popup' */'example/pages/popup')
const Slide = () => import(/* webpackChunkName: 'slide' */'example/pages/slide')
const Toast = () => import(/* webpackChunkName: 'toast' */'example/pages/toast')
const Input = () => import(/* webpackChunkName: 'input' */'example/pages/input')
const Switch = () => import(/* webpackChunkName: 'switch' */'example/pages/switch')

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
    },
    {
      path: '/popup',
      name: 'popup',
      component: Popup
    },
    {
      path: '/slide',
      name: 'slide',
      component: Slide
    },
    {
      path: '/toast',
      name: 'toast',
      component: Toast
    },
    {
      path: '/input',
      name: 'input',
      component: Input
    },
    {
      path: '/switch',
      name: 'switch1',
      component: Switch
    }
  ]
})
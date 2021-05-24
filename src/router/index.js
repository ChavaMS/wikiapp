import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import AddTopic from '@/components/AddTopic'
import ShowInvestigation from '@/components/ShowInvestigation'
import Registry from '@/components/Registry'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/addtopic',
      name: 'addtopic',
      component: AddTopic
    },
    {
      path: '/investigation/:id',
      name: 'ShowInvestigation',
      component: ShowInvestigation
    },
    {
      path: '/registry',
      name: 'Registry',
      component: Registry
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})

import Vue from 'vue'
import VueRouter from 'vue-router'

import defaultRouter from './default'
import userinfoRouter from './userinfo'
import personRouter from './person'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    defaultRouter,
    userinfoRouter,
    ...personRouter,
    {
      path: '/*',
      redirect: '/default'
    }
  ]
})

export default router


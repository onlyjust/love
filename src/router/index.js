import Vue from 'vue'
import VueRouter from 'vue-router'

import homeRouter from './home'
import mineRouter from './mine'
import dynamicRouter from './dynamic'
import messageRouter from './message'
import personRouter from './person'

Vue.use(VueRouter)
/*
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

// 引入一级组件
import Default from "../views/default/Default";

//  引入组件
// const Home = ()=> import('./../views/home/Home.vue');
const Dynamic = ()=> import('./../views/dynamic/Dynamic.vue');
const Message = ()=> import('./../views/message/Message.vue');
const Mine = ()=> import('./../views/mine/Mine.vue');

const Editor = ()=> import('./../views/mine/edit/Editor.vue');



const routes = [
  {
    path: '/',
    redirect: '/default'
  },
  {
    path: '/default',
    name: 'default',
    component: Default,
    children : [
      {
        path: '/default',
        redirect: '/default/home'
      },
      {
        path: 'home',
        name: 'home',
        component: Home
      },
      {
        path: 'dynamic',
        name: 'dynamic',
        component: Dynamic
      },
      {
        path: 'message',
        name: 'message',
        component: Message
      },
      {
        path: 'mine',
        name: 'mine',
        component: Mine,
        children:[
          {
            path: 'editor',
            component: Editor
          }
        ]
      }
    ]
  }
]*/

// 引入一级组件
import Default from "../views/default/Default";

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    {
      path: '/',
      redirect: '/default'
    },
    {
      path: '/default',
      component: Default,
      children:[
        {
          path: '/default',
          redirect: '/home'
        },
        homeRouter,
        mineRouter,
        dynamicRouter,
        messageRouter
      ]
    },
    personRouter
  ]
})

export default router


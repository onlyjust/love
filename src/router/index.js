import Vue from 'vue'
import VueRouter from 'vue-router'


// 引入一级组件
import Default from "../views/default/Default";


const Home = ()=> import('./../views/home/Home.vue');
const Dynamic = ()=> import('./../views/dynamic/Dynamic.vue');
const Message = ()=> import('./../views/message/Message.vue');
const Mine = ()=> import('./../views/mine/Mine.vue');

Vue.use(VueRouter)

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
        component: Mine
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

import wechatPlugin from './../plugins/index'
import axios from 'axios'

import defaultRouter from './default'
import userinfoRouter from './userinfo'
import personRouter from './person'
import myDynamicRouter from './mydynamic'
import loginRouter from './login'
import identity from './auth'
import topic from './topic'

import chatRouter from './message/chat'

import store from '../store'

Vue.use(VueRouter)


const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes:[
    defaultRouter,
    userinfoRouter,
    ...personRouter,
    ...myDynamicRouter,
    ...chatRouter,
    ...loginRouter,
      ...identity,
      ...topic,
    {
      path: '/*',
      redirect: '/default',
      /*meta: {
        wechatAuth: true // 如果此路由需要微信授权请设置为true,默认为false
      },*/
    }
  ]
});

// websocket插件初始化
Vue.use(wechatPlugin,{router});

import {setStore} from './../config/global';
import {TOKEN,USER_INFO} from "../store/mutations-type";

// 微信授权插件初始化
/*Vue.use(wechatPlugin , {
  router, // 路由实例对象
  appid: process.env.VUE_APP_WX_APPID, // 您的微信appid
  responseType: 'code', // 返回类型，请填写code
  scope: 'snsapi_userinfo', // 应用授权作用域，snsapi_base （不弹出授权页面，直接跳转，只能获取用户openid），snsapi_userinfo （弹出授权页面，可通过openid拿到昵称、性别、所在地。并且，即使在未关注的情况下，只要用户授权，也能获取其信息）
  redirectUri: 'http://wx.ngrok.51vipyuan.com:8888', //微信回调地址
  getCodeCallback (next, code) {
    // 用户同意授权后回调方法
    // code：用户同意授权后，获得code值
    // code说明： code作为换取access_token的票据，每次用户授权带上的code将不一样，code只能使用一次，5分钟未被使用自动过期。
    // next： 无论access_token是否获取成功,一定要调用该方法
    // next说明：next方法接收两个参数
    // 参数1(必填，切换到的路由地址，空字符串为当前路由，指定切换对象 next('/') 或者 next({ path: '/' })
    // 参数2为通过code值请求后端获取access_token的结果，true或者false，默认为false
    axios.get('/api/wx/accessToken', {
      params: {
        code,
        state: ''
      },
    }).then(response => {
      let data = response.data
      console.log("后端获取accessToken响应",data);
      let result = data.success; //后端返回的获取accessToken成功或失败，布尔型
      if (result) {
        // 存储用户信息
        console.log(USER_INFO,data.data)
        setStore(USER_INFO,data.data);
        next('', code); // 获取access_toeken成功
      } else {
        next('/login'); // 获取access_token失败
      }
    }).catch(() => {
      next('/login'); // ajax出现错误
    })
  },
});*/



/*
function checkToken() {
  // return store.getters.expiredTime && store.getters.expiredTime > Date.now()
  return false;
}

function subscribe() {
  if (!store.getters.connected) {
    store.dispatch('subscribe_msg',
        {
          accessToken: store.getters.token,
          username: store.getters.username
        }
    ).catch(
        () => {
          //ignore
        }
    )
  }
}*/
/*
const un_check_url = ['/login', '/register', '/testRtc']

router.beforeEach((to, from, next) => {
  console.log("to.fullPath",to.fullPath);
  console.log(un_check_url.indexOf(to.fullPath))
  console.log(!~un_check_url.indexOf(to.fullPath))
  if (!~un_check_url.indexOf(to.fullPath)) {
    console.log("token",store.getters.token);
    if (!store.getters.token) {
      console.log("跳转login")
      return next({name: 'login'})
    }
    if (!checkToken()) {
      store.commit('LOGOUT')
      return next({path: '/login'})
    } else {
      subscribe()
      if (from.fullPath === '/messageSection') {
        store.dispatch('clearSession').then(
            () => {
              return next()
            }
        )
      } else {
        return next()
      }
    }
  } else {
    if (checkToken()) {
      subscribe()
      return next({path: '/'})
    }
    return next()
  }
})*/



export default router


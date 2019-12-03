import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


// 2. 引入全局的样式
import '@/style/common.less'

// 引入全局UI组件库
import '@/plugins/vant'

//引入rem
import '@/config/rem.js'

Vue.config.productionTip = false



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

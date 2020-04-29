import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/index'


// 2. 引入全局的样式
import '@/style/common.less'
import '@/style/icon.css'
import '@/style/iconfont.less'
import '@/style/iconfontcolor.less'
import '@/style/iconfont/iconfont.css'

// 引入全局UI组件库
import '@/plugins/vant'

//引入rem
import '@/config/rem.js'

// 导入htmlEditor
import initRichText from './editor/initHTMLEditor'
// console.info(initRichText)
initRichText();

// Vue.use(initRichText)

// 导入font-awesome.css
import 'font-awesome.css'

Vue.config.productionTip = false


window.onload = setHtmlFontSize;
window.onresize = setHtmlFontSize;
function setHtmlFontSize(){
  const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
  const htmlDom = document.getElementsByTagName('html')[0];
  htmlDom.style.fontSize = htmlWidth / 37.5 + 'px';
  console.info("fontSize:",htmlDom.style.fontSize)
};
setHtmlFontSize();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')





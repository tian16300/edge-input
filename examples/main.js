import Vue from 'vue'
import App from './App.vue'

import hljs from 'highlight.js'
import Antd from 'ant-design-vue';
import EdgeInput from './../packages/index'
import 'highlight.js/styles/railscasts.css'
import 'ant-design-vue/dist/antd.css';
Vue.directive('hljs', el => {
  let blocks = el.querySelectorAll('pre')
  Array.prototype.forEach.call(blocks, hljs.highlightBlock)
})
Vue.use(Antd);
Vue.use(EdgeInput)


Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

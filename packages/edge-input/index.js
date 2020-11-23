// 导入组件
import EdgeInput from './src/edge-input.vue'

// 为组件提供 install 安装方法，供按需引入
EdgeInput.install = function (Vue) {
  Vue.component(EdgeInput.name, EdgeInput)
}

// 默认导出组件
export default EdgeInput

<template>
  <div id="app">
    <div class="page-header">
      <h1>EdgeInput</h1>
      <h2>边距输入控件</h2>
      <!-- <a href="https://github.com/zuley/vue-color-picker" class="btn" target="_blank">View on GitHub</a> -->
    </div>
    <div class="page-content" v-hljs>
      <h2>Demo</h2>
      <EdgeInput v-model="marginValue"></EdgeInput>&nbsp;
      <h2>安装</h2>
      <pre>$ npm install edgeinput -S</pre>
      <h2>使用</h2>
      <h3>在 `main.js` 文件中引入插件并注册</h3>
      <pre>
# main.js
import edgeinput from 'edgeinput'
Vue.use(edgeinput)
</pre
      >
      <h3>在项目中使用 edgeinput</h3>
      <pre>
&lt;template&gt;
  &lt;EdgeInput v-model=&quot;marginValue&quot; /&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    data () {
      return {
        marginValue: ["calc(100% - 2px)", "10px","3px","3px","10px"];
      }
    }
  }
&lt;/script&gt;</pre
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      marginValue: ["calc(100% - 2px)", "10px","3px","3px","10px"],
      color2: "#000000",
    };
  },
  methods: {
    headleChangeColor(color) {
      console.log(`颜色值改变事件：${color}`);
    },
  },
};
</script>

<style lang="less">
@import "assets/style.less";
</style>
  
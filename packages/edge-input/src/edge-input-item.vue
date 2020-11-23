<template>
  <div class="edge-input-item">
    <input
      type="text"
      class="edge-input-item-input"
      :value="value"
      @keyup="handleInputValue"
    />
    <ul v-if="isShown" class="edge-input-item-option">
      <li v-for="i of units" :key="i" :class="unit == i?'edge-input-item-option-selected':''" @click="handleChangeUnit(i)">
        {{ value + i }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "EdgeInputItem",
  props: {
    value: String,
  },
  model: {
    event: "change",
    prop: "value",
  },
  data() {
    return {
      units: ["px", "%", "rem", "em", "vw", "vh"],
      unit: "px",
      isNumber: false,
      isShown:false
    };
  },
  methods: {
    handleInputValue(e){
      let value = e.target.value;
      this.$emit("change", value);
      if('' == value.trim()){
         this.hiddenOptions();
      }else{
        this.showOptions();
      }
    },
    handleChangeUnit(i) {
      this.unit = i;
      let text = this.value + i;
      this.$emit("change", text);
      this.hiddenOptions();
    },
    isNum() {
      return /^\d+$/.test(this.value);
    },
    showOptions(){
      if(this.isNum()){
         this.isShown = true;
      }else{
        this.isShown = false;
      }
    },
    hiddenOptions(){
       this.isShown = false;
    },
    blurHiddenOptions(e){
        if(!e.target.closest('.edge-input-item')){
            this.hiddenOptions();
            this.$emit('blur')
        }
    }
  },
  mounted(){
      document.body.addEventListener("click",this.blurHiddenOptions.bind(this))
  },
  beforeDestroy(){
       document.body.removeEventListener("click",this.blurHiddenOptions.bind(this))
  }

};
</script>
<style lang="less" scoped>
.edge-input-item {
  position: relative;
  z-index: 2;
  .edge-input-item-input {
    box-sizing: border-box;
    margin: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: "tnum";
    position: relative;
    display: inline-block;
    width: 100%;
    height: 32px;
    padding: 4px 11px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.5;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    transition: all 0.3s;
    text-align: center;
    &:focus,
    &:hover {
      border-color: #1890ff;
    }
  }
  ul {
    list-style: none;
    margin: 0;
  }
  .edge-input-item-option{
    position: absolute;
    margin: 0;
    padding: 0;
    color: rgba(0,0,0,.65);
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    font-feature-settings: "tnum";
    position: absolute;
    z-index: 1050;
    box-sizing: border-box;
    font-size: 14px;
    font-variant: normal;
    background-color: #fff;
    border-radius: 4px;
    outline: none;
    box-shadow: 0 2px 8px rgba(0,0,0,.15);
    width:100%;
    padding: 5px 0px;
    >li{
        padding: 2px 10px;
        cursor: pointer;
    }
    >li:hover, >li.edge-input-item-option-selected{
       background-color: #e6f7ff;
    }
  }
}
</style>
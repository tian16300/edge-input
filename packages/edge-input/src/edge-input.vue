<template lang="html">
 <div class="box-model-wrapper">
   <div class="edge-input-pos edge-input-left">
      <EdgeInputItem v-model="leftValue" @blur="handleChange" />
   </div>
   <div class="edge-input-pos edge-input-top">
      <EdgeInputItem  v-model="topValue" @blur="handleChange"  />
   </div>
   <div class="edge-input-pos edge-input-center">
      <EdgeInputItem v-model="centerValue" @blur="handleChangeCenter" />
   </div>
   <div class="edge-input-pos edge-input-right">
      <EdgeInputItem v-model="rightValue" @blur="handleChange"  />
   </div>
   <div class="edge-input-pos edge-input-bottom">
      <EdgeInputItem v-model="bottomValue" @blur="handleChange" />
   </div>
   <div class="box-model"></div>
 </div>
</template>
<script>
import EdgeInputItem from "./edge-input-item.vue";
function analyValue(value) {
  return {
    topValue: value[0]||'',
    rightValue: value[1]||'',
    bottomValue: value[2]||'',
    leftValue: value[3]||'',
    centerValue: value[4]||'',
  };
}
export default {
  name: "EdgeInput",
  components: {
    EdgeInputItem,
  },
  props: {
    value: {
      type: Array,
      default() {
        return ["", "", "", "", ""];
      },
    },
  },
  model: {
    prop: "value",
    event: "change",
  },
  watch: {
    value: {
      handler() {
        let values = analyValue(this.value);
        this.centerValue = values.centerValue;
        this.topValue = values.topValue;
        this.rightValue = values.rightValue;
        this.bottomValue = values.bottomValue;
        this.leftValue = values.leftValue;
      },
    },
  },
  data() {
    return {
      ...analyValue(this.value),
    };
  },
  methods: {
    handleChangeCenter() {
      if ("" !== this.centerValue.trim()) {
        this.leftValue = this.centerValue;
        this.rightValue = this.centerValue;
        this.topValue = this.centerValue;
        this.bottomValue = this.centerValue;
        this.handleChange();
      }
    },
    handleChange() {
      this.$emit("change", [
        this.topValue,
        this.rightValue,
        this.bottomValue,
        this.leftValue,
        this.centerValue,
      ]);
    },
  },
};
</script>
<style lang="less">
@input-width: 90px;
@input-height: 32px;
.box-model-wrapper {
  height: 80px;
  margin: 20px @input-width*0.5;
  position: relative;
  z-index: 1;
  .edge-input-pos {
    position: absolute;
    width: @input-width;
  }
  .edge-input-left {
    left: 0;
    margin-top: -(@input-height*0.5);
    margin-left: -(@input-width*0.5);
    top: 50%;
  }
  .edge-input-right {
    right: -(@input-width*0.5);
    margin-top: -(@input-height*0.5);
    top: 50%;
  }
  .edge-input-top {
    top: 0;
    margin-top: -(@input-height*0.5);
    left: 50%;
    margin-left: -(@input-width*0.5);
    z-index: 3;
  }
  .edge-input-bottom {
    bottom: -(@input-height*0.5);
    margin-left: -(@input-width*0.5);
    left: 50%;
    z-index: 1;
  }
  .edge-input-center {
    top: 50%;
    margin-top: -(@input-height*0.5);
    margin-left: -(@input-width*0.5);
    left: 50%;
    z-index: 2;
  }

  .box-model {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: 1px solid #d9d9d9;
  }
}
</style>


  

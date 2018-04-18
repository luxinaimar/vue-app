<template>
  <div class="ccm-switch">
    <input class="ccm-switch-input" type="checkbox" v-model="checkboxValue" :disabled="disabled">
    <i class="ccm-switch-ui"></i>
    <span class="ccm-switch-label"><slot></slot></span>
  </div>
</template>

<script type="text/ecmascript-6">
const COMPONENT_NAME = 'ccm-switch'
const EVENT_INPUT = 'input'

export default {
  name: COMPONENT_NAME,
  props: {
    value: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      checkboxValue: this.value
    }
  },
  watch: {
    value(newValue) {
      console.log(newValue)
      this.checkboxValue = newValue
    },
    checkboxValue(newValue) {
      this.$emit(EVENT_INPUT, newValue)
    }
  }
}
</script>
<style lang="less">
  @import "~common/less/variable";

  @switch-width : 48px;
  @switch-height : 28px;

  .ccm-switch{
    display: flex;
    position: relative;
    align-items: center;
    .ccm-switch-input{
      position: absolute;
      z-index: 1;
      width: @switch-width;
      height: @switch-height;
      opacity: 0;
      &:checked + .ccm-switch-ui{
        border-color: @switch-on-bgc;
        background-color: @switch-on-bgc;
        &::before{
          transform: scale(0);
        }
        &::after{
          transform: translateX(@switch-width - @switch-height);
        }
      }
    }
    .ccm-switch-ui{
      position: relative;
      display: inline-block;
      width: @switch-width;
      height: @switch-height;
      border: 1px solid @switch-off-border-color;
      border-radius: @switch-height;
      background-color: @switch-off-border-color;
      &::before, &::after{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: @switch-off-bgc;
        border-radius: @switch-height;
        transition: transform .4s cubic-bezier(.25, .1, .25, 1.28);
      }
      &::after{
        width: @switch-height;
        background-color: @color-white;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5)
      }
    }
    .ccm-switch-label{
      display: inline-block;
      margin-left: 10px;
      &:empty{
        margin-left: 0;
      }
    }
  }
</style>

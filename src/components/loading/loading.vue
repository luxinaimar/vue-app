<template>
  <div class="ccm-loading">
    <span class="ccm-loading-spinners" :style="style">
      <i class="ccm-loading-spinner" v-for="item in balde" :key="item"></i>
    </span>
  </div>
</template>
<script type="text/ecmascript-6">
const COMPONENT_NAME = 'ccm-loading'

export default {
  name: COMPONENT_NAME,
  data() {
    return {
      balde: 12
    }
  },
  props: {
    size: {
      type: Number
    }
  },
  computed: {
    style() {
      if (!this.size) {
        return
      }
      const value = `${this.size}px`
      return {
        width: value,
        height: value
      }
    }
  }
}
</script>
<style lang="less">
  @import "~common/less/variable";

  .ccm-loading{
    font-size: @fontsize-large-xxx;
  }
  .ccm-loading-spinners{
    position: relative;
    display: block;
    width: 1em;
    height: 1em;
  }
  .ccm-loading-spinner{
    position: absolute;
    left: 44.5%;
    top: 37%;
    width: 2px;
    height: 25%;
    border-radius: ~"50%/20%";
    opacity: .25;
    background-color: currentColor;
    animation: spinner-fade 1s linear infinite;
    .loop(12);

  }
  .loop( @num )when( @num > 0 ){
      &:nth-child(@{num}){
        animation-delay: (@num - 1) / 12s;
        transform: rotate(30deg * (@num - 6)) translateY(-150%);
      }
      .loop(@num - 1);
  }
  @keyframes spinner-fade{
    0% {
      opacity: .85;
    }
    50% {
      opacity: .25;
    }
    100% {
      opacity: .25;
    }
  }
</style>

<template>
  <div class="ccm-page" :class="type">
    <div class="wrapper">
      <main class="content">
        <slot name="content"></slot>
      </main>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      default: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "~common/less/variable";
.ccm-page{
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #efeff4;
}
</style>
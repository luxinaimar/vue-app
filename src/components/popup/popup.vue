<template>
  <div class="ccm-popup" :style="{'z-index': zIndex}" :class="typeClass" v-show="isVisible">
    <div class="ccm-popup-mask" v-show="mask" @click="maskClick">
      <slot name="mask"></slot>
    </div>
    <div class="ccm-popup-container" :class="{'ccm-popup-center': center}">
      <div class="ccm-popup-content" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="ccm-popup-content" v-else v-html="content">
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import apiMixin from '../../common/mixins/api'
const COMPONENT_NAME = 'ccm-popup'
const EVENT_MASK_CLICK = 'mask-click'

export default {
  name: COMPONENT_NAME,
  mixins: [apiMixin],
  props: {
    type: {
      type: String,
      default: ''
    },
    zIndex: {
      type: Number,
      default: 100
    },
    mask: {
      type: Boolean,
      default: true
    },
    content: {
      type: String,
      default: ''
    },
    center: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    typeClass() {
      return this.type ? `ccm-${this.type}` : ''
    }
  },
  methods: {
    maskClick(e) {
      this.$emit(EVENT_MASK_CLICK, e)
    }
  }
}
</script>
<style lang="less">
  @import "~common/less/variable";

  .ccm-popup{
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 100;
  }
  .ccm-popup-mask, .ccm-popup-container{
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .ccm-popup-mask{
    overflow: hidden;
    background-color: @popup-mask-bgc;
    opacity: @popup-mask-opacity;
    // fix some android webview opacity render bug
    &::before{
      content: ".";
      display: block;
      width: 1px;
      height: 1px;
      background-color: rgba(0, 0, 0, .1);
      margin-left: -10px;
    }
  }
  .ccm-popup-container{
    transform: translate(100%, 100%);
  }
  .ccm-popup-content{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    box-sizing: border-box;
    transform: translate(-100%, -100%);
  }
  .ccm-popup-center{
    .ccm-popup-content{
      position: absolute;
      top: -50%;
      left: -50%;
      width: auto;
      max-width: 100%;
      transform: translate(-50%, -50%);
    }
  }
</style>

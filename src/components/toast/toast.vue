<template>
  <transition name="ccm-toast-fade">
    <ccm-popup type="toast" :z-index="zIndex" :mask="mask" v-show="isVisible">
      <i v-show="!isLoading" class="ccm-toast-icon" :class="iconClass"></i>
      <ccm-loading v-show="isLoading"></ccm-loading>
      <div class="ccm-toast-tip" v-show="txt">{{txt}}</div>
    </ccm-popup>
  </transition>
</template>
<script type="text/ecmascript-6">
import CcmPopup from 'components/popup/popup'
import CcmLoading from 'components/loading/loading'
import apiMixin from '../../common/mixins/api'

const COMPONENT_NAME = 'ccm-toast'

export default {
  name: COMPONENT_NAME,
  mixins: [apiMixin],
  props: {
    type: {
      type: String,
      default: 'loading'
    },
    zIndex: {
      type: Number,
      default: 900
    },
    mask: {
      type: Boolean,
      default: false
    },
    txt: {
      type: String,
      default: ''
    },
    time: {
      type: Number,
      default: 3000
    }
  },
  computed: {
    iconClass() {
      const iconClass = {}
      const classMap = {
        correct: 'ccmic-cricle-checked',
        error: 'ccmic-close2',
        warn: 'ccmic-error'
      }
      const icon = classMap[this.type]
      if (icon) {
        iconClass[icon] = true
      }
      return iconClass
    },
    isLoading() {
      return this.type === 'loading'
    }
  },
  components: {
    CcmPopup,
    CcmLoading
  },
  methods: {
    show() {
      this.isVisible = true
      this.clearTimer()
      this.$nextTick(() => {
        if (this.time !== 0) {
          this.timer = setTimeout(() => {
            this.hide()
          }, this.time)
        }
      })
    },
    hide() {
      this.isVisible = false
      this.clearTimer()
    },
    clearTimer() {
      clearTimeout(this.timer)
      this.timer = null
    }
  }
}
</script>
<style lang="less">
  @import "~common/less/variable";

  .ccm-toast{
    &.ccm-popup{
      z-index: 900;
    }
    .ccm-popup-content{
      display: flex;
      align-items: center;
      padding: 13px 16px;
      background-color: @toast-bgc;
      color: @toast-color;
      border-radius: 2px;
    }
  }
  .ccm-toast-icon{
    width: 24px;
    height: 24px;
    font-size: @fontsize-large-xxx;
  }
  .ccm-toast-tip{
    margin-left: 8px;
    line-height: 20px;
    max-height: 40px;
    max-width: 12em;
    overflow: hidden;
    font-size: @fontsize-medium;
  }
  .ccm-toast-fade-enter-active{
    animation: toast-in .2s;
  }
  .ccm-toast-fade-leave-active{
    animation: toast-out .2s;
  }
  @keyframes toast-in{
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }

  @keyframes toast-out{
    0%{
      opacity: 1;
    }
    100%{
      opacity: 0;
    }
  }
</style>

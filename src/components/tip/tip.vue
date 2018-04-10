<template>
  <div class="ccm-tip" :data-dir="direction" v-show="isVisible" @click="handleClick">
    <i class="ccm-tip-angle" ref="angle"></i>
    <div class="ccm-tip-content">
      <slot></slot>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
import apiMixin from '../../common/mixins/api'

const COMPONENT_NAME = 'ccm-tip'
const EVENT_CLICK = 'click'

export default {
  name: COMPONENT_NAME,
  mixins: [apiMixin],
  props: {
    direction: {
      type: String,
      default: 'top'
    },
    offsetLeft: {
      type: [String, Number],
      default: 0
    },
    offsetRight: {
      type: [String, Number],
      default: 0
    },
    offsetTop: {
      type: [String, Number],
      default: 0
    },
    offsetBottom: {
      type: [String, Number],
      default: 0
    }
  },
  mounted() {
    this.$nextTick(() => {
      let angleEleStyle = this.$refs.angle.style
      const boxMap = {
        left: 'right',
        right: 'left',
        top: 'bottom',
        bottom: 'top'
      }
      const offsets = [
        {
          name: 'offsetLeft',
          target: 'left',
          percentFix: {
            marginLeft: '-6px'
          }
        },
        {
          name: 'offsetRight',
          target: 'right',
          percentFix: {
            marginRight: '-6px'
          }
        },
        {
          name: 'offsetTop',
          target: 'top',
          percentFix: {
            marginTop: '-6px'
          }
        },
        {
          name: 'offsetBottom',
          target: 'bottom',
          percentFix: {
            marginBottom: '-6px'
          }
        }
      ]
      offsets.forEach((offset) => {
        const value = this[offset.name]
        if (value !== 0) {
          const isNum = typeof value === 'number'
          // 如果props传入为数字，给小三角设置相应的left，right，top，bottom值
          angleEleStyle[offset.target] = value + (isNum ? 'px' : '')
          if (offset.percentFix && !isNum) { // 如果props传入为非数字，给小三角设置6px的偏移量
            Object.keys(offset.percentFix).forEach((key) => {
              angleEleStyle[key] = offset.percentFix[key]
            })
          }
          angleEleStyle[boxMap[offset.target]] = 'auto'
        }
      })
    })
  },
  methods: {
    handleClick() {
      this.hide()
      this.$emit(EVENT_CLICK)
    },
    close() {
      this.hide()
    }
  }
}
</script>
<style lang="less">
  @import "~common/less/variable";

  .ccm-tip{
    display: flex;
    z-index: 10;
    position: absolute;
    padding: 10px 38px 10px 16px;
    max-height: 60px;
    font-size: @fontsize-small;
    color: @tip-color;
    background: @tip-bgc;
    border-radius: 2px;
    transition: opacity .2s;
    &[data-dir="top"], &[data-dir="bottom"]{
      .ccm-tip-angle{
        left: 50%;
        transform: translateX(-50%);
      }
    }
    &[data-dir="top"]{
      .ccm-tip-angle{
        top: 0;
        &::before{
          margin-top: -6px;
          transform: rotate(0deg);
        }
      }
    }
    &[data-dir="bottom"]{
      .ccm-tip-angle{
        bottom: 0;
        &::before{
          margin-bottom: -6px;
          transform: rotate(180deg);
        }
      }
    }
    &[data-dir="left"], &[data-dir="right"]{
      .ccm-tip-angle{
        top: 50%;
        transform: translateY(-50%);
      }
    }
    &[data-dir="left"]{
      .ccm-tip-angle{
        left: 0;
        &::before{
          margin-left: -9px;
          transform: rotate(-90deg);
        }
      }
    }
    &[data-dir="right"]{
      .ccm-tip-angle{
        right: 0;
        &::before{
          margin-right: -9px;
          transform: rotate(90deg);
        }
      }
    }
  }
  .ccm-tip-angle{
    position: absolute;
    &::before{
      content: '';
      display: block;
      border-width: 0 6px 6px;
      border-style: solid;
      border-color: transparent transparent @tip-bgc;
    }
  }
  .ccm-tip-content{
    min-height: 18px;
    line-height: 18px;
    overflow: hidden;
  }
</style>

<template>
  <div class="ccm-slide" ref="slide">
    <div class="ccm-slide-group" ref="slideGroup">
      <slot>
        <ccm-slide-item v-for="(item, index) in data" :key="index" :item="item"></ccm-slide-item>
      </slot>
    </div>
    <div class="ccm-slide-dots">
      <slot name="dots">
      </slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import CcmSlideItem from './slide-item.vue'
import BScroll from 'better-scroll'

const COMPONENT_NAME = 'ccm-slide'

export default {
  name: COMPONENT_NAME,
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    loop: {
      type: Boolean,
      default: true
    },
    threshold: {
      type: Number,
      default: 0.3
    },
    speed: {
      type: Number,
      default: 400
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  computed: {

  },
  methods: {
    refresh() {
      this.$nextTick(() => {
        this._setSlideWidth()
        this._initSlide()

        if (this.autoPlay) {
          this._play()
        }
      })
    },
    _refresh() {
      this._setSlideWidth(true)
      this.slide.refresh() // 调用BScroll的刷新
    },
    _setSlideWidth(isResize) {
      this.children = this.$refs.slideGroup.children
      let width = 0
      let slideWidth = this.$refs.slide.clientWidth // 获取slide视窗宽度
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        child.style.width = slideWidth + 'px' // 给每个item设置width为slide视窗宽度
        width += slideWidth
      }
      if (this.loop && !isResize) {
        width += 2 * slideWidth
      }
      this.$refs.slideGroup.style.width = width + 'px' // 设置group总宽度
    },
    _initSlide() {
      this.slide = new BScroll(this.$refs.slide, {
        scrollX: true,
        scrollY: false,
        momentum: false, // 关闭滚动动画 当快速在屏幕上滑动一段距离的时候，会根据滑动的距离和时间计算出动量，并生成滚动动画
        bounce: false, // 关闭回弹动画
        eventPassthrough: '',
        snap: {
          loop: this.loop, // 循环播放开关
          threshold: this.threshold, // 表示可滚动到下一个的阈值
          speed: this.speed // 动画执行的时间
        },
        click: true,
        observeDOM: false
      })

      this.slide.on('scrollEnd', this._onScrollEnd) // 绑定滚动结束事件

      this.slide.on('beforeScrollStart', () => {
        if (this.autoPlay) {
          clearTimeout(this._timer) // touch，autoPlay等多个事件都会调用_play，所以如果打开自动滚动时先终止
        }
      }) // 滚动开始之前

      window.removeEventListener('touchend', this._touchEndEvent, false)
      window.addEventListener('touchend', this._touchEndEvent, false)
    },
    _play() {
      clearTimeout(this._timer) // touch，autoPlay等多个事件都会调用_play，所以先终止
      this._timer = setTimeout(() => {
        this.slide.next()
      }, this.interval)
    },
    _onScrollEnd() {
      if (this.autoPlay) {
        this._play()
      }
    },
    _touchEndEvent() {
      if (this.autoPlay) {
        this._play()
      }
    },
    _resizeHandler() {
      if (!this.slide) {
        return
      }
      clearTimeout(this._resizeTimer)
      this._resizeTimer = setTimeout(() => {
        if (this.slide.isInTransition) { // 动画结束前刷新BScroll，无法执行_onScrollEnd，手动之行
          this._onScrollEnd()
        } else {
          if (this.autoPlay) {
            this._play()
          }
        }
        this._refresh()
      }, 60)
    }
  },
  mounted() {
    this.refresh()
    window.addEventListener('resize', this._resizeHandler)
  },
  components: {
    CcmSlideItem
  }
}
</script>
<style lang="less">
  @import "~common/less/variable";

  .ccm-slide{
    position: relative;
    min-height: 1px;
    height: 100%;
  }
  .ccm-slide-group{
    position: relative;
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
  }
</style>

<template>
  <div class="ccm-slide" ref="slide">
    <div class="ccm-slide-group" ref="slideGroup">
      <slot>
        <ccm-slide-item v-for="(item, index) in data" :key="index" :item="item" @click.native="clickItem(item, index)"></ccm-slide-item>
      </slot>
    </div>
    <div class="ccm-slide-dots">
      <slot name="dots">
        <span :class="{active: currentPageIndex === index}" v-for="(item, index) in dots" :key="index"></span>
      </slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import CcmSlideItem from './slide-item.vue'
import BScroll from 'better-scroll'

const COMPONENT_NAME = 'ccm-slide'
const EVENT_CHANGE = 'change'
const EVENT_SELECT = 'click'

export default {
  name: COMPONENT_NAME,
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    initialIndex: {
      type: Number,
      default: 0
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
    },
    allowVertical: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      dots: 0,
      currentPageIndex: this.initialIndex || 0
    }
  },
  created() { // 开放页面中随时修改以下属性功能
    const needRefreshProps = ['data', 'loop', 'autoPlay', 'threshold', 'speed', 'allowVertical']
    needRefreshProps.forEach((key) => {
      this.$watch(key, () => {
        this.refresh()
      })
    })
  },
  watch: {
    initialIndex(newIndex) { // 提供用户设置起始位置
      if (newIndex !== this.currentPageIndex) {
        this.slide && this.slide.goToPage(newIndex)
      }
    }
  },
  methods: {
    clickItem(item, index) {
      this.$emit(EVENT_SELECT, item, index)
    },
    refresh() { // 开放页面中随时修改以下属性功能,每次刷新要销毁slide
      this.slide && this.slide.destroy()
      clearTimeout(this._timer)
      this.$nextTick(() => {
        if (this.slide === null) {
          return
        }
        if (this.slide !== undefined) {
          this.currentPageIndex = 0
        }
        this.dots = 0
        this._setSlideWidth()
        this._initDots()
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
        eventPassthrough: this.allowVertical ? 'vertical' : '',
        snap: {
          loop: this.loop, // 循环播放开关
          threshold: this.threshold, // 表示可滚动到下一个的阈值
          speed: this.speed // 动画执行的时间
        },
        click: true,
        observeDOM: false
      })

      this.slide.goToPage(this.currentPageIndex, 0, 0)

      this.slide.on('scrollEnd', this._onScrollEnd) // 绑定滚动结束事件

      this.slide.on('beforeScrollStart', () => {
        if (this.autoPlay) {
          clearTimeout(this._timer) // touch，autoPlay等多个事件都会调用_play，所以如果打开自动滚动时先终止
        }
      }) // 滚动开始之前

      window.removeEventListener('touchend', this._touchEndEvent, false)
      window.addEventListener('touchend', this._touchEndEvent, false)
    },
    _initDots() {
      this.dots = new Array(this.children.length)
    },
    _play() {
      clearTimeout(this._timer) // touch，autoPlay等多个事件都会调用_play，所以先终止
      this._timer = setTimeout(() => {
        this.slide.next()
      }, this.interval)
    },
    _onScrollEnd() {
      let pageIndex = this.slide.getCurrentPage().pageX
      if (this.currentPageIndex !== pageIndex) {
        this.currentPageIndex = pageIndex
        this.$emit(EVENT_CHANGE, this.currentPageIndex) // 动画结束时开放一个change事件给用户
      }
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
    },
    _deactivated() {
      clearTimeout(this._timer)
      clearTimeout(this._resizeTimer)
      window.removeEventListener('resize', this._resizeHandler)
      window.removeEventListener('touchend', this._touchEndEvent, false)
    }
  },
  mounted() {
    this.refresh()
    window.addEventListener('resize', this._resizeHandler)
  },
  activated() {
    if (this.autoPlay) {
      this._play()
    }
    window.addEventListener('resize', this._resizeHandler)
  },
  deactivated() {
    this._deactivated()
  },
  destroyed() {
    this._deactivated()
    if (this.slide) {
      this.slide.destroy()
      this.slide = null
    }
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
  .ccm-slide-dots{
    position: absolute;
    right: 0;
    left: 0;
    bottom: 2px;
    font-size: 0;
    text-align: center;
    padding: 0 6px;
    transform: translateZ(1px);
    > span{
      display: inline-block;
      vertical-align: bottom;
      margin: 0 1px;
      width: 10px;
      height: 1px;
      background: @slide-dot-bgc;
      &.active{
        background: @slide-dot-active-bgc;
      }
    }
  }
</style>

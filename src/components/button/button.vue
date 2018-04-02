<template>
  <button
    class="ccm-btn"
    :type="type"
    :class="btnClass"
    @click="handleClick">
    <i :class="icon" v-if="icon"></i>
    <slot></slot>
  </button>
</template>
<script>
const COMPONENT_NAME = 'ccm-button'

export default {
  name: COMPONENT_NAME,
  props: {
    icon: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    inline: {
      type: Boolean,
      default: false
    },
    primary: {
      type: Boolean,
      default: false
    },
    outline: {
      type: Boolean,
      default: false
    },
    light: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'button'
    }
  },
  computed: {
    btnClass() {
      return {
        'ccm-btn_active': this.active,
        'ccm-btn_disabled': this.disabled,
        'ccm-btn-inline': this.inline,
        'ccm-btn-primary': this.primary,
        'ccm-btn-outline': this.outline,
        'ccm-btn-outline-primary': this.outline && this.primary,
        'ccm-btn-light': this.light
      }
    }
  },
  methods: {
    handleClick(event) {
      if (this.disabled) {
        event.preventDefault()
        event.stopPropagation()
        return
      }
      this.$emit('click', event)
    }
  }
}
</script>
<style lang="less">
@import "~common/less/variable";
@import "~common/less/mixin";

.ccm-btn{
  display: block;
  margin: 0;
  padding: 17px 16px;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  color: @btn-color;
  font-size: @fontsize-large;
  background: @btn-bgc;
  line-height: 1;
  border: none;
  outline: none;
  box-sizing: border-box;
  border-radius: 2px;
  -webkit-tap-highlight-color: transparent;
  &.ccm-btn_disabled,
  &.ccm-btn_disabled.ccm-btn_active,
  &ccm-btn_disabled:active{

  }
}

</style>

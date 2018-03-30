<template>
  <button
    class="cc-btn"
    :type="type"
    :class="btnClass"
    @click="handleClick">
    <i :class="icon" v-if="icon"></i>
    <slot></slot>
  </button>
</template>
<script>
  const COMPONENT_NAME = 'cc-button'
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
          'cc-btn_active': this.active,
          'cc-btn_disabled': this.disabled,
          'cc-btn-inline': this.inline,
          'cc-btn-primary': this.primary,
          'cc-btn-outline': this.outline,
          'cc-btn-outline-primary': this.outline && this.primary,
          'cc-btn-light': this.light
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


</style>
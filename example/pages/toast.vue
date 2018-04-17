<template>
  <ccm-page type="toast-view">
    <div slot="content" class="toast-test">
      <div class="toast-eg">
        <ccm-button :inline="true" @click="showToast('toast1')">弹出正确</ccm-button>
        <ccm-toast txt="content-content" :mask="true" type="correct" ref="toast1"></ccm-toast>
      </div>
      <div class="toast-eg">
        <ccm-button :inline="true" @click="showToast('toast2')">弹出loading</ccm-button>
        <ccm-toast txt="content-content" :mask="true" ref="toast2"></ccm-toast>
      </div>
      <div class="toast-eg">
        <ccm-button :inline="true" @click="showToast('toast3')">弹出错误</ccm-button>
        <ccm-toast txt="content-content" type="error" ref="toast3">弹出层下</ccm-toast>
      </div>
      <div class="toast-eg">
        <ccm-button :inline="true" @click="showToast('toast4')">弹出警告</ccm-button>
        <ccm-toast txt="content-content" type="warn" ref="toast4">弹出层</ccm-toast>
      </div>
    </div>
  </ccm-page>
</template>

<script>
import CcmToast from 'components/toast/toast'
import CcmButton from 'components/button/button'
import CcmPage from '../components/ccm-page.vue'

export default {
  name: 'Toast',
  data () {
    return {
      msg: 'Toast'
    }
  },
  components: {
    CcmToast,
    CcmButton,
    CcmPage
  },
  methods: {
    showToast(ref) {
      let component = this.$refs[ref];
      component.show()
      setTimeout(() => {
        component.hide()
      }, 1000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "~common/less/variable";
.toast-view{
  .toast-eg{
    position: relative;
    width: 300px;
    margin: 70px auto;
    text-align: center;
  }
}
</style>

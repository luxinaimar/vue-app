<template>
  <ccm-page type="popup-view">
  	<div slot="content" class="popup-test">
      <div class="popup-eg">
        <ccm-button :inline="true" @click="showPopup('popup1')">弹出层</ccm-button>
        <ccm-popup content="content-content" ref="popup1">弹出层</ccm-popup>
      </div>
      <div class="popup-eg">
        <ccm-button :inline="true" @click="showPopup('popup2')">弹出层</ccm-button>
        <ccm-popup content="content-content" :mask="false" ref="popup2"></ccm-popup>
      </div>
      <div class="popup-eg">
        <ccm-button :inline="true" @click="showPopup('popup3')">弹出层下</ccm-button>
        <ccm-popup content="content-content" :center="false" ref="popup3">弹出层下</ccm-popup>
      </div>
      <div class="popup-eg">
        <ccm-button :inline="true" @click="showPopup('popup4')">弹出层</ccm-button>
        <ccm-popup content="content-content" type="my-popup" ref="popup4">弹出层</ccm-popup>
      </div>
    </div>
  </ccm-page>
</template>

<script>
import CcmPopup from 'components/popup/popup'
import CcmButton from 'components/button/button'
import CcmPage from '../components/ccm-page.vue'

export default {
  name: 'Popup',
  data () {
    return {
      msg: 'Popup'
    }
  },
  components: {
  	CcmPopup,
    CcmButton,
  	CcmPage
  },
  methods: {
    showPopup(ref) {
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
.popup-view{
  .popup-eg{
    position: relative;
    width: 300px;
    margin: 70px auto;
    text-align: center;
  }
  .ccm-my-popup{
    .ccm-popup-center{
      .ccm-popup-content{
        padding: 20px;
      }
    }
    .ccm-popup-content{
      padding: 80px 20px;
      color: #fff;
      background-color: rgba(0, 0, 0, .8);
    }
  }
}
</style>

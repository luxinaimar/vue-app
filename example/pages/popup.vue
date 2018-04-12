<template>
  <ccm-page type="popup-view">
  	<div slot="content" class="popup-test">
      <ccm-popup content="content-content">弹出层</ccm-popup>
    </div>
  </ccm-page>
</template>

<script>
import CcmPopup from 'components/popup/popup'
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
  	CcmPage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "~common/less/variable";


</style>

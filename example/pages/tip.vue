<template>
  <ccm-page type="tip-view">
  	<div slot="content" class="ccm-tip-list">
    <p class="tip-eg">
        <ccm-button :inline="true" @click="$refs.tip.show()">inline按钮</ccm-button>
        <ccm-tip ref="tip" offsetLeft="6" @click='tiptouch'>tip tip</ccm-tip>
    </p>
    <p class="tip-eg">
        <ccm-button :inline="true">inline按钮</ccm-button>
        <ccm-tip direction="bottom" style="left:115px;top:-50px;">tip tip</ccm-tip>
    </p>
    <p class="tip-eg">
        <ccm-button :inline="true">inline按钮</ccm-button>
        <ccm-tip direction="left" :offsetTop="1">tip tip</ccm-tip>
    </p>
    <p class="tip-eg">
        <ccm-button :inline="true">inline按钮</ccm-button>
        <ccm-tip direction="right">tip tip</ccm-tip>
    </p>
 	</div>
  </ccm-page>
</template>

<script>
import CcmTip from 'components/tip/tip'
import CcmButton from 'components/button/button'
import CcmPage from '../components/ccm-page.vue'

export default {
  name: 'Tip',
  data () {
    return {
      msg: 'tip'
    }
  },
  components: {
  	CcmTip,
    CcmButton,
  	CcmPage
  },
  methods: {
    tiptouch() {
      alert(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "~common/less/variable";
.tip-view{
  .tip-eg{
    position: relative;
    width: 300px;
    margin: 70px auto;
    text-align: center;
  }
}

</style>
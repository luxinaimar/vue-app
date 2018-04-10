<template>
  <ccm-page type="tip-view">
  	<div slot="content" class="ccm-tip-list">
    <p class="tip-eg">
        <ccm-button :inline="true" @click="$refs.tip.show()">angle在上偏移6px</ccm-button>
        <ccm-tip ref="tip" offsetLeft="1" @click='tiptouch'>tip tip</ccm-tip>
    </p>
    <p class="tip-eg">
        <ccm-button :inline="true" @click="$refs.tip2.show()">angle在下手动设置style位置</ccm-button>
        <ccm-tip ref="tip2" direction="bottom" style="left:115px;top:-50px;">tip tip</ccm-tip>
    </p>
    <p class="tip-eg">
        <ccm-button :inline="true" @click="$refs.tip3.show()">angle在左手动设置top</ccm-button>
        <ccm-tip ref="tip3" direction="left" :offsetTop="8">tip tip</ccm-tip>
    </p>
    <p class="tip-eg">
        <ccm-button :inline="true" @click="$refs.tip4.show()">angle在右</ccm-button>
        <ccm-tip ref="tip4" direction="right">tip tip</ccm-tip>
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
      msg: 'Tip'
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
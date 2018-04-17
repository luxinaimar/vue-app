<template>
  <ccm-page>
  	<template slot="content" class="ccm-loading-list">
   		<ccm-loading></ccm-loading>
      <ccm-loading :size="28"></ccm-loading>
      <ccm-loading :size="40"></ccm-loading>
   	</template>
  </ccm-page>
</template>

<script>
import CcmLoading from 'components/loading/loading'
import CcmPage from '../components/ccm-page.vue'

export default {
  name: 'Loading',
  data () {
    return {
      msg: 'Loading'
    }
  },
  components: {
  	CcmLoading,
  	CcmPage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "~common/less/variable";


</style>

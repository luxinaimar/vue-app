<template>
  <div class="ccm-page">
  	<div class="wrapper">
      <ccm-button>按钮</ccm-button>
      <ccm-button :disabled="true">按钮</ccm-button>
      <ccm-button :inline="true">inline按钮</ccm-button>
      <ccm-button :primary="true">primary按钮</ccm-button>
      <ccm-button :outline="true">outline按钮</ccm-button>
      <ccm-button :primary="true" :outline="true">primary-outline按钮</ccm-button>
       <ccm-button :light="true">light按钮</ccm-button>
    </div>
  </div>
</template>

<script>
import CcmButton from 'components/button/button'

export default {
  name: 'Button',
  data () {
    return {
      msg: 'Button'
    }
  },
  components: {
  	CcmButton
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@import "~common/less/variable";


</style>

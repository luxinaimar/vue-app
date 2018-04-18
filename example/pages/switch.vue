<template>
  <ccm-page>
    <div slot="content" class="ccm-switch-list">
      <ccm-switch v-model="value"></ccm-switch>
      <ccm-switch v-model="value1" disabled>disabled</ccm-switch>
      <ccm-switch v-model="value2" disabled>disabled</ccm-switch>
    </div>
  </ccm-page>
</template>

<script>
import CcmSwitch from 'components/switch/switch'
import CcmPage from '../components/ccm-page.vue'

export default {
  name: 'Switchdemo',
  data () {
    return {
      value: false,
      value1: true,
      value2: false
    }
  },
  components: {
    CcmSwitch,
    CcmPage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "~common/less/variable";


</style>

<template>
  <ccm-page>
    <div slot="content" class="ccm-input-list">
      <ccm-input v-model="value"></ccm-input>
      <ccm-input disabled></ccm-input>
      <ccm-input readonly></ccm-input>
      <ccm-input placeholder="请输入"></ccm-input>
      <ccm-input placeholder="请输入" :clearable="true"></ccm-input>
      <ccm-input placeholder="密码" type="password" :eye="true"></ccm-input>
      <ccm-input placeholder="密码" type="password" :eye="true" :clearable="true"></ccm-input>
      <ccm-input placeholder="密码" type="password" :eye="true" :clearable="true">
        <a href="#" slot="append" class="send">发送验证码</a>
      </ccm-input>
      <ccm-input placeholder="密码" type="password" :eye="true" :clearable="true">
        <span slot="prepend">请填写</span>
        <a href="#" slot="append" class="send">发送验证码</a>
      </ccm-input>
    </div>
  </ccm-page>
</template>

<script>
import CcmInput from 'components/input/input'
import CcmPage from '../components/ccm-page.vue'

export default {
  name: 'Input',
  data () {
    return {
      value: ''
    }
  },
  components: {
    CcmInput,
    CcmPage
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
@import "~common/less/variable";
.send{
  margin-right: 5px;
}

</style>

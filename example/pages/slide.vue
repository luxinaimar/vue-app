<template>
  <ccm-page type="slide-view">
  	<div slot="content" class="slide-container">
    <ccm-slide :data="items" :speed="10000"></ccm-slide>
 	  </div>
  </ccm-page>
</template>

<script>
import CcmSlide from 'components/slide/slide'
import CcmPage from '../components/ccm-page.vue'

export default {
  name: 'Slide',
  data () {
    return {
      items: [
        {
          url: 'http://www.didichuxing.com/',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
        }, {
          url: 'http://www.didichuxing.com/',
          image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
        }
      ],
    }
  },
  components: {
  	CcmSlide,
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
.slide-view{
  .slide-container{
    height: 75px;
    overflow: hidden;
  }
}

</style>
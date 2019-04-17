<template>
  <div class="index">
    <keep-alive>
      <router-view class="view"></router-view>
    </keep-alive>
    <NAVBAR class="footer"></NAVBAR>
  </div>
</template>

<script>
import NAVBAR from '@/components/common/navbar/navbar'
export default {
  components: {
    NAVBAR
  },
  watch: {

  },
  data () {
    return {
      hasback: false,
      content: {},
      hasmore: false
    }
  }
}
</script>
<style lang="scss">
@import "scss/index.scss";
.footer {
  @include fb(100);
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>

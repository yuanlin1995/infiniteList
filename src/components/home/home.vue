<template>
  <div class="content-box">
    <HEADER class="header"
            :back='false'
            :content='content'
            :more='false'></HEADER>
    <xd></xd>
    <div class="page-content">
      <img class="img"
           src="../../../static/yl.jpg"
           alt="">
      <br>
      <Button @click="$router.goto('/detail')">详情</Button>
      <br>
    </div>
  </div>
</template>
<script>
import HEADER from '@/components/common/header/header'
import { Button } from 'mint-ui'
import Vue from 'vue'
const xd = Vue.extend({
  template: '<input type="text" />'
})
console.log(HEADER)
export default {
  components: {
    Button,
    HEADER,
    xd
  },
  data () {
    return {
      content: {
        type: 'input',
        placeholder: '找人 找故事'
      }
    }
  }
}
</script>
<style lang="scss">
@import "scss/index.scss";
.page-content {
  @include mb(100);
}
.img {
  width: 100px;
  height: 100px;
  margin: 50px auto;
}

.text {
  margin-top: 30px;
  color: red;
  line-height: 20px;
  font-size: 14px;
  text-align: left;
}
</style>

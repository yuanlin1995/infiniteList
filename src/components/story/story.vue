<template>
  <div>
    <HEADER class="header"
            :back='false'
            :content='content'
            :more='false'></HEADER>
  </div>
</template>
<script>
import HEADER from '@/components/common/header/header'
export default {
  components: {
    HEADER
  },
  data () {
    return {
      content: {
        type: 'text',
        text: '我的故事'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>

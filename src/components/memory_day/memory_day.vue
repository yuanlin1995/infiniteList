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
        text: '激情燃烧的岁月'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
</style>

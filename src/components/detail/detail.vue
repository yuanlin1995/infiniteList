<template>
  <div class="detail content-box">
    <HEADER :back='true'
            :content='content'
            :more='true'></HEADER>
    <InfiniteList class="infinite"
                  :list='list'
                  :height='150'
                  :boxHeight='615'>
    </InfiniteList>
  </div>
</template>
<script>
import HEADER from '@/components/common/header/header'
import InfiniteList from './infiniteList.vue'
export default {
  components: {
    HEADER,
    InfiniteList
  },
  data () {
    return {
      content: {
        type: 'detail',
        placeholder: 'detail'
      },
      list: new Array(1000).fill(1).map((item, index) => {
        return {
          style: {
            // height: Math.ceil(Math.random() * 100 + 150),
            height: 150,
            bg: this.getRandomColor()
          },
          text: `#xiaodiao${index + 1}`
        }
      })
    }
  },
  methods: {
    getRandomColor () {
      return `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
    }
  }
}
</script>
<style lang="scss">
@import "scss/index.scss";
.infinite {
  flex: 1;
}
</style>

<template>
  <div class="detail content-box">
    <HEADER :back='true'
            @click.native="doclick"
            :content='content'
            :more='true'></HEADER>
    <InfiniteList class="infinite"
                  :list='list'
                  :height='0'
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
      list: new Array(50).fill(1).map((item, index) => {
        return {
          style: {
            height: Math.ceil(Math.random() * 100 + 100),
            // height: 150,
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
    },
    doclick () {
      const arr = new Array(10).fill(1).map((item, index) => {
        return {
          style: {
            height: Math.ceil(Math.random() * 100 + 100),
            bg: this.getRandomColor()
          },
          text: `#xiaodiao`
        }
      })
      this.list = this.list.concat(arr)
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

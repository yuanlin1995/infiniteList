<template>
  <div @scroll.passive='onScroll'
       ref="srcollBox"
       class="scroll-box"
       :style="{height: scrollData.totalHeight+'px'}">
    <div class="top"
         :style="{paddingTop: scrollData.paddingTop + 'px'}"></div>
    <div class="cell"
         v-for="(item, index) in scrollData.renderList"
         :key="index"
         :style="{height: item.style.height+'px',
         background: item.style.bg}">
      {{item.text}}</div>
    <div class="bottom"
         :style="{paddingBottom: scrollData.paddingBottom + 'px'}"></div>
  </div>
</template>
<script>
import Scroll from './infiniteList.js'
export default {
  props: {
    list: {
      value: Array,
      default: true
    },
    height: {
      value: Number
    },
    boxHeight: {
      value: Number,
      default: true
    }
  },
  data () {
    return {
      scrollData: {
        totalHeight: 0,
        paddingTop: 0,
        renderList: [],
        paddingBottom: 0
      }
    }
  },
  created () {
    this.init()
  },
  methods: {
    init () {
      this.scroll = new Scroll({
        list: this.list,
        cacheNum: 3,
        cellHeight: this.height,
        boxHeight: this.boxHeight
      })
      this.totalHeight = this.scroll.totalHeight
      this.scrollData = this.scroll.getScrollData()
    },
    onScroll () {
      let scrollTop = this.$refs.srcollBox.scrollTop
      this.scroll.doScroll(scrollTop)
      this.scrollData = this.scroll.getScrollData()
      this.$forceUpdate()
      this.$nextTick(function () {
        this.$refs.srcollBox.scrollTop = scrollTop
      })
    }
  }
}
</script>
<style scoped>
.scroll-box {
  position: relative;
  overflow: scroll;
}
.cell {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #fff;
}
</style>

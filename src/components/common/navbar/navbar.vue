<template>
  <div>
    <div class="navlists">
      <router-link class='nav'
                   v-for="(item,index) in nav"
                   :key="item.name"
                   :to="item.path">
        <div :class="{['img'+index]:true,active: item.path === $route.path}"></div>
        {{item.name}}
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      nav: [{
        path: '/home',
        name: '推荐'
      }, {
        path: '/story',
        name: '故事'
      }, {
        path: '/footprint',
        name: '足迹'
      }, {
        path: '/memory_day',
        name: '纪念日'
      }],
      routePath: ''
    }
  }
}
</script>
<style lang="scss" scoped>
@import "scss/index.scss";
.navlists {
  @include h(90);
  width: 100%;
  position: fixed;
  background: #fff;
  left: 0;
  bottom: 0;
  display: flex;
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-around;
    @include padding(5, 0, 5, 0);
    flex-direction: column;
    width: 25%;
    height: 100%;
    color: #333;
    font-size: 12px;
    .img0,
    .img1,
    .img2,
    .img3 {
      @include w(42);
      @include h(42);
    }
    .img0 {
      background: url("../../../assets/imgs/index-noselect.svg") 0 0 / cover;
    }
    .img1 {
      background: url("../../../assets/imgs/note-noselect.svg") 0 0 / cover;
    }
    .img2 {
      background: url("../../../assets/imgs/print-noselect.svg") 0 0 / cover;
    }
    .img3 {
      background: url("../../../assets/imgs/dy-noselect.svg") 0 0 / cover;
    }
    .img0.active {
      background: url("../../../assets/imgs/index-select.svg") 0 0 / cover;
    }
    .img1.active {
      background: url("../../../assets/imgs/note-select.svg") 0 0 / cover;
    }
    .img2.active {
      background: url("../../../assets/imgs/print-select.svg") 0 0 / cover;
    }
    .img3.active {
      background: url("../../../assets/imgs/dy-select.svg") 0 0 / cover;
    }
  }
}
</style>

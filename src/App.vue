<template>
  <div id="app">
    <transition :name="transition_name">
      <router-view class="router"
                   :data='transition_name'></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data () {
    return {
      transition_name: '' // 监听路由  设置不同的动画名
    }
  },
  watch: {
    $route () {
      if (this.$router.slideLeft) {
        this.transition_name = 'slideLeft'
      }
      if (this.$router.slideRight) {
        this.transition_name = 'slideRight'
      }
    }
  }
}
</script>
<style lang="scss">
@import "scss/index.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  .router {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 1s ease;
    background-color: $body-bg-color; //
  }
  .slideLeft-enter,
  .slideRight-leave-to {
    // 当进入另一个页面时  一个页面离开,一个页面进入,两个页面都是同一个class
    // -webkit-transform: translateX(90%);
    // -moz-transform: translateX(90%);
    transform: translateX(100%);
  }
  .slideLeft-enter-to,
  .slideRight-enter-to,
  .slideLeft-leave,
  .slideRight-leave {
    transform: translateX(0);
  }
  .slideRight-enter,
  .slideLeft-leave-to {
    transform: translateX(-100%);
    // -webkit-transform: translateX(-90%);
    // -moz-transform: translateX(-90%);
  }
}
</style>

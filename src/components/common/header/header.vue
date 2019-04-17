<template>
  <div class="header">
    <div class="back"
         v-if="$props.back"
         @click="goBack">
      <span class="icon lefticon"></span>
    </div>
    <div class="content">
      <span v-if="$props.content.type === 'text'">{{$props.content.text}}</span>
      <INPUT v-if="$props.content.type==='input'"
             placeholder="找人 找故事" />
    </div>
    <div class="more"
         v-if="$props.more">
      <span class="icon righticon"></span>
    </div>
  </div>
</template>
<script>
import INPUT from '../input/input.vue'
export default {
  components: {
    INPUT
  },
  props: {
    back: {
      type: Boolean
    },
    content: {
      type: Object
    },
    more: {
      type: Boolean
    }
  },
  data () { return {} },
  methods: {
    goBack () {
      this.$router.goback()
    }
  }
}
</script>
<style lang="scss">
@import "scss/index.scss";
.header {
  background-color: $base-color;
  @include h(100);
  display: flex;
  .back,
  .more {
    @include fb(100);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      display: block;
      @include h(50);
      @include w(50);
    }
    .lefticon {
      background: url("../../../assets/imgs/w-back.svg") 0 0 / cover no-repeat;
    }
    .righticon {
      background: url("../../../assets/imgs/more.svg") 0 0 / cover no-repeat;
    }
  }
  .more {
    @include fb(100);
    height: 100%;
  }
  .content {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #fff;
  }
}
</style>

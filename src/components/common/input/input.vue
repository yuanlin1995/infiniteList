<template>
  <div class="search">
    <span class="search_icon"></span>
    <input type="text"
           :placeholder="$props.placeholder"
           class="search_input">
  </div>
</template>
<script>
export default {
  props: {
    placeholder: {
      type: String
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style lang="scss">
@import "scss/index.scss";
.search {
  @include w(500);
  @include h(54);
  position: relative;
  .search_icon {
    position: absolute;
    @include t(8);
    @include l(4);
    @include w(45);
    @include h(45);
    background: url("../../../assets/imgs/search.svg") 0 0 / cover no-repeat;
  }
  .search_input {
    @include w(450);
    height: 100%;
    @include b-radius(6);
    font-size: 14px;
    @include pl(50);
  }
}
</style>

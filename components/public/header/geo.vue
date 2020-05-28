<template>
  <div class="m-geo">
    <i class="el-icon-location">
      <span>{{$store.state.geo.position.city}}</span>
    </i>
    <nuxt-link class="change-city" to="/changeCity">切换城市</nuxt-link>
    <span>
      [
      <nuxt-link
        v-for="(item, index) in selectCity"
        :key="index"
        class="select-city"
        :to="'/'+item"
      >{{item}}</nuxt-link>]
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectCity: ["南昌", "景德镇", "上饶"]
    };
  }
};
</script>

<style lang="less">
.change-city {
  &:hover,
  &:focus,
  &:visited {
    color: #fe8c00;
  }
}

.select-city {
  margin: 0 4px;
  color: #999999;
  &:focus,
  &:visited {
    color: #999999;
  }
  &:hover {
    color: #fe8c00;
  }
}
</style>
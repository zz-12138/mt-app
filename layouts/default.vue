<template>
  <el-container class="layout-default">
    <el-header>
      <my-header></my-header>
    </el-header>
    <el-main>
      <nuxt />
    </el-main>
    <el-footer :style="isIdx ? '' : idxFooter">
      <my-footer></my-footer>
    </el-footer>
  </el-container>
</template>

<script>
import MyHeader from "@/components/public/header/index.vue";
import MyFooter from "@/components/public/footer/index.vue";
export default {
  data() {
    return {
      isIdx: true
    }
  },
  components: {
    MyHeader,
    MyFooter
  },
  computed: {
    idxFooter() {
      return 'margin-top: 0px;'
    }
  },
  watch: {
    $route(to) {
      if (to.path != '/') {
        this.isIdx = false
      } else {
        this.isIdx = true
      }
    }
  }
};
</script>

<style>
@import "@/assets/css/public/layout.less";
</style>

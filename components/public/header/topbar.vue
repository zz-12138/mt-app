<template>
  <el-row :gutter="0" class="top-bar">
    <el-col :span="6">
      <geo />
    </el-col>
    <el-col :span="6">
      <user />
    </el-col>
    <el-col :span="12">
      <navbar />
    </el-col>
  </el-row>
</template>

<script>
import Geo from "./geo.vue";
import User from "./user.vue";
import Navbar from "./nav.vue";
export default {
  components: {
    Geo,
    User,
    Navbar
  }
};
</script>

<style lang="less">
</style>
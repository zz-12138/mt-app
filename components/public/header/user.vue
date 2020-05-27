<template>
  <div class="m-user">
    <template v-if="user">
      <span class="username">{{user}}</span>
      <span @click="exit" class="exit">退出</span>
    </template>
    <template v-else>
      <span></span>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: ""
    };
  },
  async mounted() {
    const {
      status,
      data: { user }
    } = await this.$axios.get("/users/getUser");
    if (status === 200) {
      this.user = user;
    }
  },
  methods: {
    async exit() {
      let { status, data } = await this.$axios.get("/users/exit");
      if (status === 200 && data && data.code === 0) {
        this.$message({
          message: "已退出登录!",
          type: "warning"
        });

        setTimeout(() => {
          window.location.href = "/";
        }, 200);
      }
    }
  }
};
</script>

<style lang="less">
.m-user {
  .username {
    margin: 0 10px;
  }
  .exit {
    color: #fe8c00;
    cursor: pointer;
  }
  a {
    &:hover,
    &:focus,
    &:visited {
      color: #fe8c00;
    }
  }
}
</style>
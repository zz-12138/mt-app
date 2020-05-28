<template>
  <div class="m-menu">
    <dl class="nav">
      <dt>全部分类</dt>
      <div class="list" @mouseleave="leave">
        <dd v-for="(item, index) in $store.state.home.menu" :key="index" @mouseenter="enter">
          <i :class="item.type" />
          {{item.name}}
          <span class="arrow" />
        </dd>
      </div>
    </dl>
    <div class="detail" v-if="kind" @mouseenter="sover" @mouseleave="sout">
      <template v-for="(item, index) in curdetail.child">
        <h4 :key="index">{{item.title}}</h4>
        <span v-for="v in item.child" :key="v">{{v}}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kind: "",
      menu: [
        {
          type: "food",
          name: "美食",
          child: [
            {
              title: "美食",
              child: ["代金券", "甜点饮品", "火锅", "自助餐", "小吃快餐"]
            }
          ]
        }
      ]
    };
  },
  computed: {
    curdetail() {
      return this.$store.state.home.menu.filter(item => item.type === this.kind)[0];
    }
  },
  methods: {
    leave() {
      let self = this;
      self._timer = setTimeout(() => {
        self.kind = "";
      }, 150);
    },
    enter(e) {
      this.kind = e.target.querySelector("i").className;
    },
    sover() {
      clearTimeout(this._timer);
    },
    sout() {
      this.kind = "";
    }
  }
};
</script>

<style lang="less">
</style>
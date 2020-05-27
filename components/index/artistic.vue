<template>
  <section class="m-istyle">
    <!-- 头部 -->
    <dl v-for="(item, idx) in list" :key="idx" :class="item.type">
      <dt>{{item.title}}</dt>
      <dd
        v-for="(innerItem, innerIdx) in item.menu"
        :key="innerIdx"
        @mouseover="over($event,innerIdx,idx)"
        :class="{active: innerIdx === item.currentIndex}"
      >{{innerItem}}</dd>
    </dl>
    <!-- 内容 -->
  </section>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "猫眼电影",
          menu: ["即将上映"],
          type: "movie",
          currentIndex: 0
        },
        {
          title: "推荐名宿",
          menu: [
            "武汉",
            "南京",
            "长沙",
            "杭州",
            "苏州",
            "合肥",
            "南昌",
            "无锡",
            "扬州",
            "嘉兴"
          ],
          type: "hotel",
          currentIndex: 0
        }
      ]
    };
  },
  methods: {
    over(e, innerIdx, idx) {
      let _timer = setTimeout(() => {
        this.list[idx].currentIndex = innerIdx;
      }, 150);
    }
  }
};
</script>

<style lang="less">
@import "@/assets/css/index/artistic.less";
</style>
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
      <!-- 内容 -->
      <div class="ibody">
        <artistic-item v-if="idx === 2"></artistic-item>
        <span v-else>维护中...</span>
      </div>
    </dl>
  </section>
</template>

<script>
import ArtisticItem from './artisticItem'
export default {
  data() {
    return {
      currentListIndex: null,
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
        },
        {
          title: "本城特色",
          menu: ["全部", "约会聚餐", "SPA", "电影演出", "品质出游"],
          type: "unique",
          currentIndex: 0
        }
      ],
      listInfo: {
        all: [],
        part: [],
        spa: [],
        movie: [],
        travel: []
      }
    };
  },
  components: {
    ArtisticItem
  },
  methods: {
    async over(e, innerIdx, idx) {
      let _timer = setTimeout(() => {
        this.list[idx].currentIndex = innerIdx;
      }, 150);

      if (idx === 2) {
        console.log(idx)
      }
    }
  }
};
</script>

<style lang="less">
@import "@/assets/css/index/artistic.less";
</style>
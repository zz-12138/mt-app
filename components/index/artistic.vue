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
        <artistic-item v-if="idx === 2" :listInfo="listInfo[item.keyword]"></artistic-item>
        <span v-else>维护中...</span>
      </div>
    </dl>
  </section>
</template>

<script>
import ArtisticItem from "./artisticItem";
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
          menu: ["景点", "美食", "丽人", "电影", "旅游"],
          type: "unique",
          currentIndex: 0,
          keyword: "景点"
        }
      ],
      listInfo: {
        景点: [],
        美食: [],
        丽人: [],
        电影: [],
        旅游: []
      }
    };
  },
  components: {
    ArtisticItem
  },
  mounted() {
    this.getData("景点");
  },
  methods: {
    over(e, innerIdx, idx) {
      let _timer = setTimeout(() => {
        this.list[idx].currentIndex = innerIdx;
      }, 150);
      if (idx === 2) {
        let keyword = this.list[idx].menu[innerIdx];
        this.list[idx].keyword = keyword;
        this.getData(keyword);
      }
    },
    async getData(keyword) {
      let self = this;
      let {
        status,
        data: { count, pois }
      } = await self.$axios.get("/search/resultsByKeywords", {
        params: {
          keyword,
          city: self.$store.state.geo.position.city
        }
      });
      if (status === 200 && count > 0) {
        let res = pois
          .filter(item => item.photos.length)
          .map(item => {
            return {
              title: item.name,
              pos: item.type.split(";")[0],
              price: item.biz_ext.cost || "暂无",
              img: item.photos[0].url,
              url: "//abc.com"
            };
          });
        self.listInfo[keyword] = res.slice(0, 6);
      } else {
        self.listInfo[keyword] = [];
      }
    }
  }
};
</script>

<style lang="less">
@import "@/assets/css/index/artistic.less";
</style>
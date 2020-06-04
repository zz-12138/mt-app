<template>
  <div class="page-order">
    <el-row>
      <el-col :span="5" class="left-content">
        <dl v-for="(item, index) in leftMenu" :key="index">
          <dt>{{item.title}}</dt>
          <dd v-for="(i, idx) in item.info" :key="idx">
            <span @click="switchItem(index, idx)">{{i}}</span>
            <i class="el-icon-arrow-right"></i>
          </dd>
        </dl>
      </el-col>
      <el-col :span="19" class="right-content">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="全部订单" name="0">
            <list :cur="cur" />
          </el-tab-pane>
          <el-tab-pane label="待付款" name="1">
            <list :cur="cur" />
          </el-tab-pane>
          <el-tab-pane label="待使用" name="2">
            <list :cur="cur" />
          </el-tab-pane>
          <el-tab-pane label="待评价" name="3">
            <list :cur="cur" />
          </el-tab-pane>
          <el-tab-pane label="退款/售后" name="4">
            <list :cur="cur" />
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import List from "@/components/order/list.vue";
export default {
  data() {
    return {
      leftMenu: [
        { title: "我的美团" },
        {
          title: "我的订单",
          info: ["全部订单", "待付款", "待使用", "待评价", "退款售后"]
        },
        { title: "我的订单", info: ["全部订单", "待付款"] },
        { title: "我的订单", info: ["全部订单", "待付款"] },
        { title: "我的订单", info: ["全部订单"] }
      ],
      activeName: "0",
      list: [],
      cur: []
    };
  },
  components: {
    List
  },
  watch: {
    activeName(val) {
      this.cur = this.list.filter(item => {
        if (val === "3") {
          return item.status === 0;
        } else if (val === "0") {
          return true;
        } else {
          return false;
        }
      });
    }
  },
  methods: {
    handleClick(tab, event) {
      this.activeName = tab.name;
    },
    switchItem(inner, out) {
      if (inner === 1) {
        this.activeName = out.toString();
      }
    }
  },
  async asyncData(ctx) {
    let {
      status,
      data: { code, list }
    } = await ctx.$axios.post("/order/getOrders");
    if (status === 200 && code === 0 && list.length) {
      return {
        list: list.map(item => {
          return {
            img: item.imgs.length
              ? item.imgs[0].url
              : "https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png",
            name: item.name,
            count: item.count,
            total: item.total,
            status: item.status,
            time: item.time,
            statusTxt: item.status === 0 ? "待评价" : "待付款"
          };
        }),
        cur: list.map(item => {
          return {
            img: item.imgs.length
              ? item.imgs[0].url
              : "https://s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png",
            name: item.name,
            count: item.count,
            total: item.total,
            time: item.time,
            status: item.status,
            statusTxt: item.status === 0 ? "待评价" : "待付款"
          };
        })
      };
    }
  }
};
</script>

<style lang="less">
.page-order {
  margin-top: 20px;
  .left-content {
    padding: 20px;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    width: 230px;

    & > dl {
      margin-bottom: 20px;
    }
    & > dl > dt {
      font-size: 16px;
    }
    & > dl > dd {
      display: flex;
      justify-content: space-between;
      align-self: center;
      margin: 12px 0;
      cursor: pointer;
      > span {
        color: #666;
      }
      > i {
        padding-top: 2.5px;
        box-sizing: border-box;
      }
    }
  }
  .right-content {
    width: 908px;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    padding: 20px 20px 0 20px;
    margin-left: 10px;
    .el-tabs__item {
      font-size: 20px;
    }
  }
}
</style>
<template>
  <div class="m-order-list">
    <ul class="item-info" v-for="(item, index) in cur" :key="index">
      <li>
        <img :src="item.img" alt />
      </li>
      <li>
        <p>{{item.name}}</p>
        <p>下单时间：{{item.time | getTime}}</p>
        <p>数量：{{item.count}}</p>
      </li>
      <li>总价：￥{{item.total}}</li>
      <li>{{item.statusTxt}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    cur: {
      type: Array,
      default() {
        return []
      }
    }
  },
  filters: {
    getTime(value) {
      return value.split(' ')[3] + ' ' +  value.split(' ')[4]
    }
  }
};
</script>

<style lang="less">
.m-order-list {
  .item-info {
    list-style: none;
    display: flex;
    margin-bottom: 15px;
    > li {
      display: flex;
      flex-flow: column;
      justify-content: center;
    }
    li:nth-child(1) {
      width: 90px;
      img {
        width: 90px;
        height: 90px;
      }
    }
    li:nth-child(2) {
      width: 325px;
      margin-left: 15px;
      p:nth-child(1) {
        //   margin-bottom: 10px;
          font-size: 16px;
      }
      p:nth-child(2) {
        font-size: 12px;
        color: #666666;
      }
      p:nth-child(3) {
        font-size: 12px;
        color: #666666;
      }
    }
    li:nth-child(3) {
      width: 200px;
    }
    li:nth-child(4) {
      width: 100px;
    }
  }
}
</style>
<template>
  <div class="m-nav">
    <el-dropdown v-for="(item, index) in navList" :key="index">
      <span class="list-title">
        <nuxt-link to="/exit">{{item.title}}</nuxt-link>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item v-for="(innerItem, index) in item.list" :key="index">{{innerItem}}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <div class="list-site">
      <span class="list-title">
        <nuxt-link to="/exit">网站导航</nuxt-link>
      </span>
      <div class="sub-container">
        <dl class="hotel">
          <dt>酒店旅游</dt>
          <div>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
          </div>
          <div>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
          </div>
          <div>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
          </div>
        </dl>
        <dl class="foot">
          <dt>美食</dt>
          <div>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
          </div>
          <div>
            <dd>国际机票</dd>
            <dd>国际机票</dd>
          </div>
        </dl>
        <dl class="movie">
          <dt>电影</dt>
          <dd>国际机票</dd>
          <dd>国际机票</dd>
          <dd>国际机票</dd>
          <dd>国际机票</dd>
        </dl>
        <dl class="app">
          <dt>手机App</dt>
          <div>
            <dd>
              <a href="#">
                <img
                  class="appicon"
                  src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                  title="美团app"
                  alt="美团app"
                />
              </a>
            </dd>
            <dd>
              <a href="#">
                <img
                  class="appicon"
                  src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                  title="美团app"
                  alt="美团app"
                />
              </a>
            </dd>
            <dd>
              <a href="#">
                <img
                  class="appicon"
                  src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                  title="美团app"
                  alt="美团app"
                />
              </a>
            </dd>
            <dd>
              <a href="#">
                <img
                  class="appicon"
                  src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                  title="美团app"
                  alt="美团app"
                />
              </a>
            </dd>
            <dd>
              <a href="#">
                <img
                  class="appicon"
                  src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                  title="美团app"
                  alt="美团app"
                />
              </a>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          title: "我的美团",
          list: ["我的订单", "我的收藏", "抵用券", "账户设置"]
        },
        {
          title: "手机App",
          list: ["我的订单", "我的收藏", "抵用券", "账户设置"]
        },
        {
          title: "商家中心",
          list: ["我的订单", "我的收藏", "抵用券", "账户设置"]
        },
        {
          title: "美团规则",
          list: ["我的订单", "我的收藏", "抵用券", "账户设置"]
        }
      ]
    };
  }
};
</script>

<style lang="less">
</style>
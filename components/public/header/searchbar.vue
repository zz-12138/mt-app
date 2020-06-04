<template>
  <div class="search-panel">
    <el-row class="m-header-searchbar">
      <el-col :span="3" class="left">
        <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" />
      </el-col>
      <el-col :span="15" class="center">
        <div class="wrapper">
          <el-input aria-placeholder="搜索商家或地点" v-model="search" @focus="focus" @blur="blur" @input="input"></el-input>
          <button class="el-button el-button--primary" @click="btnToInfo(search)">  
            <i class="el-icon-search" />
          </button>
          <dl class="hotPlace" v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item, index) in $store.state.home.hotPlace.slice(0, 4)" :key="index">
              <!-- <a :href=""></a> -->
              <nuxt-link :to="{path:'products',query:{keyword: item.name}}" @click.native="toInfo(item.name)">{{ item.name }}</nuxt-link>
            </dd>
          </dl>
          <dl class="searchList" v-if="isSearchList">
            <dd v-for="(item, index) in searchList" :key="index">
              <nuxt-link :to="{path:'products',query:{keyword: item.name}}" @click.native="toInfo(item.name)">{{ item.name }}</nuxt-link>
            </dd>
          </dl>
        </div>
        <p class="suggest">
          <nuxt-link :to="{path:'products',query:{keyword: item.name}}"
             v-for="(item, index) in $store.state.home.hotPlace.slice(0, 4)" 
             :key="index" @click.native="toInfo(item.name)">{{item.name}}</nuxt-link>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link to="/" class="takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="movie">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="hotel">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="apartment">名宿公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="business">商家入驻</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="walfare">美团公益</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="6"></el-col>
    </el-row>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data() {
    return {
      search: '',
      isFocus: false,
      hotPlace:[],
      searchList:[]
    }
  },
  computed: {
    isHotPlace() {
      return this.isFocus && !this.search
    },
    isSearchList() {
      return this.isFocus && this.search
    }
  },
  methods: {
    focus() {
      this.isFocus = true
    },
    blur() {
      let self = this
      setTimeout(() => {
        self.isFocus = false
      }, 200);
    },
    toInfo(item) {
      this.search = item
    },
    btnToInfo(item) {
      this.$router.push({ path: '/products', query: { keyword: item }})
    },
    input: _.debounce(async function() {
       let self = this
       let city = self.$store.state.geo.position.city.replace('市', '')
       self.searchList = []
       let { status, data: {top} } = await self.$axios.get('/search/top', {
         params: {
           input: self.search,
           city
         }
       })
       self.searchList = top.slice(0,10)
    }, 300)
  }
};
</script>

<style lang="less">
</style>
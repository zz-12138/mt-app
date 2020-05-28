<template>
  <div class="m-istyle-item">
    <li v-for="v in 6" :key="v">
      <div class="image">
        <img
          src="http://p1.meituan.net/iphoenix/6d810d14d775089be2ccacb206e1cd6a8979799.jpg@740w_416h_1e_1c"
          class="product-img"
        />
        <img src alt class="head-img" />
      </div>
      <div class="info">
        <p class="item-title">7号线地铁湖工大站/拉德芳斯商业街/温馨</p>
        <p class="item-info">
          <span>整套1居室</span>
        </p>
        <p class="item-price">
          <span>￥</span>288
        </p>
      </div>
    </li>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.m-istyle-item {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  & > li {
    width: 33.3%;
    padding: 10px;
    box-sizing: border-box;
    & > .image {
      position: relative;
      img:nth-child(1) {
        width: 100%;
        height: 208px;
        border-radius: 4px;
        background: url(https://p0.meituan.net/travelcube/214b8411190e874781fe91dd3096236211567.png);
        background-size: cover;
        cursor: pointer;
      }
      img:nth-child(2) {
        border: 2px solid #ffffff;
        height: 48px;
        width: 48px;
        position: absolute;
        bottom: -12px;
        right: 15px;
        z-index: 9;
        border-radius: 40px;
        background-image: url(https://p0.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png);
        background-size: 100%;
        background-repeat: no-repeat;
      }
    }
    .info {
      .item-title {
        font-size: 16px;
        color: #222222;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: 400;
        width: 297px;
      }
      .item-info {
        font-size: 12px;
        color: #999999;
      }
      .item-price {
        line-height: 22px;
        font-weight: 500;
        font-size: 22px;
        color: #ff6600;
        letter-spacing: -0.8px;
        padding: 4px 0;
        span {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
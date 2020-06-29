<template>
  <div class="shoppingDetails">
    <ul>
      <li
        v-for="(itemf,index) in detalisList"
        :key="index"
        @click="sw(index)"
        :class="{active:index==currentIndex}"
      >{{itemf}}</li>
      <div class="childe" v-show="currentIndex==0">
        <div class="shops">
          <span>
            品牌：
            <span>{{shops.brand}}</span>
          </span>
          <span>
            出版社：
            <span>{{shops.press}}</span>
          </span>
          <span>
            ISBN：
            <span>{{shops.isbn}}</span>
          </span>
          <span>
            商品编码：
            <span>{{shops.code}}</span>
          </span>
          <span>
            包装：
            <span>{{shops.pack}}</span>
          </span>
        </div>
      </div>
      <div class="childe" v-show="currentIndex==1"></div>
    </ul>
  </div>
</template>

<script>
import { request } from "network/request.js";
export default {
  data() {
    return {
      currentIndex: 0,
      detalisList: ["商品介绍", "商品评论(900+)"],
      shops: {}
    };
  },
  methods: {
    sw(index) {
      this.currentIndex = index;
    }
  },
  mounted() {
    let newId = this.$route.query.id;
    request({
      url: "/skuDetail",
      params: {
        skuId: newId
      }
    }).then(val => {
      this.shops = val;
    });
  }
};
</script>

<style scoped>
.shoppingDetails {
  width: 1200px;
  height: 600px;
}
.shoppingDetails ul {
  position: relative;
  width: 100%;
  background: #f7f7f7;
  height: 40px;
  border-bottom: 1px solid red;
}
.shoppingDetails .childe {
  position: absolute;
  top: 40px;
  width: 100%;
  height: 500px;
}
.shoppingDetails ul li {
  width: 130px;
  line-height: 40px;
  font-size: 16px;
  float: left;
  color: #666;
  text-align: center;
  cursor: pointer;
}
.active {
  background: red;
  color: #fff !important;
}
.shops {
  margin-top: 20px;
  width: 960px;
  height: 90px;
  border-bottom: 2px solid #666666;
}
.shops > span {
  display: inline-block;
  margin: 10px;
  width: 240px;
  height: 22px;
  text-indent: 10px;
  line-height: 22px;
  color: #666666;
}
</style>
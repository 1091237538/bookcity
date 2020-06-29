<template>
  <div class="searchVue">
    <a href="//www.jd.com">
      <img src="~assets/img/dogtop.png" alt style="margin-top:10px" />
    </a>
    <el-input
      placeholder="请输入内容"
      v-model="input3"
      class="input-with-select"
      style=" margin-left: 230px;width: 500px;margin-top: 0px"
    >
      <el-button
        slot="append"
        type="primary"
        icon="el-icon-search"
        style="background-color:#F30213; color: white;"
        @click="search"
      >搜索</el-button>
    </el-input>
    <div class="center">
      <ul>
        <li v-for="(item,index) in names" :key="index" class="names">{{item}}</li>
      </ul>
    </div>
    <div class="shop">
      <div class="shop-item" @click="jumpCart">我的购物车</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      input1: "",
      input2: "",
      input3: "",
      select: "",
      names: ["图书钜惠", "头号爆品", "戏精宿舍", "张丹丹", "跨店满减"]
    };
  },
  methods: {
    jumpCart() {
      this.$router.push({
        path: "/cart"
      });
    },
    search() {
      if (this.input3 == "") {
        return;
      }
      this.$router.push({
        path: "/booklist",
        query: {
          name: this.input3
        }
      });
    }
  }
};
</script>

<style>
.searchVue {
  padding: 10px 250px;
  background: #fff;
}
.searchVue a {
  display: inline-block;
  margin-left: 100px;
}
.searchVue a img {
  font-size: 59px;
}
.input-with-select {
  border: 2px solid #f30213;
}
.center {
  margin-left: 445px;
  margin-top: 5px;
}
.names {
  font-size: 12px;
  display: inline;
  padding: 20px;
}
.names li {
  float: left;
}
.names:hover {
  color: red;
}
.shop {
  width: 151px;
  height: 44px;
  border: 1px solid #dfdfdf;
  padding: 0 0 0 20px;
  background: #f9f9f9;
  line-height: 44px;
  font-size: 15px;
  margin-left: 1200px;
  margin-top: -60px;
  color: red;
  background: url("~assets/img/shop.png") 98px no-repeat;
}
.shop-item {
  cursor: pointer;
}
</style>
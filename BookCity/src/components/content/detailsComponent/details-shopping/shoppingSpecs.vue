<template>
  <div class="shoppingSpecs">
    <div class="shoppingName">{{book.bookName}}</div>
    <div class="shoppingTitle">{{book.title}}</div>
    <div class="summary">
      <span>京 东 价</span>
      <span class="lineColor1">￥{{book.price}}</span>
      <br />
      <br />
      <br />
      <span>促销信息</span>
      <span class="lineColor2">{{book.subTitle}}</span>
    </div>
    <div>
      <span>增值业务</span>
      <a href="javascript:;">
        <span class="el-icon-refresh"></span>
        <span>助力环保，传递知识，旧书换新</span>
      </a>
    </div>
    <div class="carts">
      <el-input-number v-model="shoppingNums" controls-position="right" :min="1"></el-input-number>
      <button class="shoppingCart" @click="addCart">加入购物车</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    bookdetails: {
      type: Object
    }
  },
  data() {
    return {
      shoppingNums: 1,
      book: {}
    };
  },
  watch: {
    bookdetails(val) {
      this.book = val;
    }
  },
  methods: {
    addCart() {
      if (sessionStorage.getItem("userData") == null) {
        alert("请登录");
        this.$router.push({
          path: "/login"
        });
        return;
      }
      let userId = JSON.parse(sessionStorage.getItem("userData")).userId;
      let skuId = this.bookdetails.id;
      axios({
        url: "http://localhost:8080/shopCar/addSku",
        params: {
          count: this.shoppingNums,
          id: userId,
          skuId
        }
      }).then(val => {
        if (val.data.code == "1") {
          this.$router.push({
            name: "cart"
          });
        }else {
          alert('加入失败')
        }
      });
    }
  }
};
</script>

<style>
.shoppingSpecs {
  width: 580px;
  height: 550px;
  padding: 15px 0px;
  box-sizing: border-box;
  color: #999;
}
.shoppingSpecs a {
  color: #e3393c;
}
.summary {
  margin-top: 20px;
  width: 580px;
  height: 120px;
  background: #f3f3f3;
  padding: 20px;
  box-sizing: border-box;
  color: #9999;
  margin-bottom: 20px;
}

.shoppingName {
  font-size: 16px;
  color: #666666;
  font-weight: bold;
}
.shoppingTitle {
  margin-top: 10px;
  color: #e3393c;
}
.shoppingCart {
  margin-left: 10px;
  width: 140px;
  height: 40px;
  border: 0;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  background: #df3033;
  cursor: pointer;
}
.carts {
  margin-top: 20px;
}
.lineColor1 {
  color: red;
  font-size: 20px !important;
}
.lineColor2 {
  color: #333 !important;
}
.lineColor1,
.lineColor2 {
  margin-left: 10px;
  font-size: 14px;
}
</style>
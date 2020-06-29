<template>
  <div class="order">
    <div class="order-top">
      <navtop-show></navtop-show>
    </div>
    <div class="order-box">
      <h2>订单信息</h2>
      <div class="order-information">
        <div class="orderList">
          <ul v-for="(itemf,index) in tableData" :key="index">
            <span class="createTime">订单创建时间：{{itemf.createTime|formatTime}}</span>
            <span class="totalPrice">总金额：￥{{itemf.totalPay}}</span>
            <el-divider></el-divider>
            <li v-for="(item,index) in itemf.skus" :key="index">
              <div class="order-img">
                <img :src="item.images" alt />
              </div>
              <div class="bookName">{{item.bookName}}</div>
              <div class="bookCount">X{{itemf.orderDetails[index].count}}</div>
              <div class="price">￥{{(itemf.orderDetails[index].count*item.price).toFixed(2)}}</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="order-bttom">
      <bottom-page></bottom-page>
    </div>
  </div>
</template>

<script>
import navtopShow from "views/childView/NavTopShow.vue";
import bottomPage from "components/common/bottompage/BottomPage.vue";
import axios from "axios";
export default {
  data() {
    return {
      tableData: "",
      username: ""
    };
  },
  components: {
    navtopShow,
    bottomPage
  },
  filters: {
    formatTime(value) {
      let newStr = value.slice(0, 10);
      return newStr;
    }
  },
  mounted() {
    if (sessionStorage.getItem("userData") == null) {
      return;
    }
    let userId = JSON.parse(sessionStorage.getItem("userData")).userId;
    this.username = JSON.parse(sessionStorage.getItem("userData")).username;
    axios({
      url: "http://localhost:8080/order",
      params: {
        userId
      }
    }).then(val => {
      this.tableData = val.data.data;
    });
  }
};
</script>

<style scoped>
.createTime {
  display: inline-block;
}
.order {
  position: relative;
  width: 100%;
  height: 100%;
}
.order-top {
  padding: 0 250px;
  background: #e3e4e5;
}
.order-bottom {
  position: absolute;
  bottom: 0;
}
.order-box {
  width: 100%;
  padding: 40px 400px;
  box-sizing: border-box;
}
.order-box h2 {
  font-size: 16px;
  color: #666666;
}
.order-information {
  margin-top: 20px;
  width: 990px;
  height: 100%;
  border: 1px solid #f0f0f0;
  padding: 20px;
  box-sizing: border-box;
}
.order-title {
  font-size: 14px;
  color: #333333;
  font-weight: bold;
}
.order-user {
  width: 140px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border: 2px solid red;
  margin: 20px;
}
.order-address {
  margin: 20px;
}
.orderList {
  width: 600px;
  height: 100%;
  margin: 20px 0;
}
.orderList ul {
  width: 100%;
  height: 100%;
  margin-top: 20px;
  padding: 15px;
  box-sizing: border-box;
  background: #f3fbfe;
}
.orderList ul li {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  box-sizing: border-box;
}
.order-img {
  width: 80px;
  height: 80px;
}
.order-img img {
  width: 100%;
}
.bookName,
.bookCount,
.price,
.totalPrice {
  width: 100px;
}
.price {
  color: red;
}
.totalPrice {
  position: relative;
  left: 300px;
  color: #333333;
}
</style>
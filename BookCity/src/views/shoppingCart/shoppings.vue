<template>
  <div class="shoppings">
    <div class="s-title">
      全部商品
      <span></span>
    </div>
    <ul class="shop-ul">
      <li v-for="(item,index) in carts" :key="index">
        <span class="img-box">
          <img :src="item.sku.images" />
        </span>
        <a href="javascript:;" class="shop-text">{{item.sku.title}}</a>
        <div class="shop-r">
          <span class="shop-price">￥{{item.sku.price}}</span>
          <div class="shop-btn">
            <button @click="reduce(index,item.count,item.sku.id)">-</button>
            <input v-model="item.count" size="mini" class="shop-input" disabled />
            <button @click="add(index,item.count,item.sku.id)">+</button>
          </div>
          <span class="price-total">￥{{totalPrice(item.count,item.sku.price)}}</span>
          <a href @click.prevent="remove(item.sku.id)">删除</a>
        </div>
      </li>
    </ul>
    <div class="settlement">
      <div class="totalprice">
        总价：
        <span>￥{{total(carts)}}</span>
      </div>
      <div class="js" @click="goorder">购买</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      num: "0",
      carts: [],
      reduceCount: "1",
      nums: 0,
      totalprice: ""
    };
  },
  computed: {
    totalPrice(val) {
      return function(count, price) {
        return (count * price).toFixed(2);
      };
    },
    total(val) {
      return function(val) {
        let tsum = 0;
        val.forEach(item => {
          tsum += Number((item.sku.price * item.count).toFixed(2));
        });
        this.totalprice = tsum;
        return tsum;
      };
    }
  },
  mounted() {
    if (sessionStorage.getItem("userData") == null) {
      return;
    }
    let userId = JSON.parse(sessionStorage.getItem("userData")).userId;
    axios({
      url: "http://localhost:8080/shopCar/getAll",
      params: {
        userId
      }
    }).then(val => {
      this.carts = val.data.data;
    });
  },
  methods: {
    goorder() {
      if (sessionStorage.getItem("userData") == null) {
        alert("请登录");
        this.$router.push({
          name: "login"
        });
      } else {
        if (this.carts == "") {
          alert("请添加商品");
          this.$router.push({
            name: "index"
          });
        } else {
          let newcarts = this.carts.map(val => {
            return { skuId: val.sku.id, skuCount: val.count };
          });
          let userId = JSON.parse(sessionStorage.getItem("userData")).userId;
          axios({
            url: "http://localhost:8080/saveOrder",
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            data: JSON.stringify({
              userId: userId,
              price: this.totalprice,
              list: newcarts
            })
          }).then(val => {
            if (val.data.code == "1") {
              alert('购买成功')
              this.$router.replace({
                name:'order',
              })
            }
          });
        }
      }
    },
    reduce(index, count, skuId) {
      this.reduceCount = this.carts[index].count;
      this.reduceCount--;
      let userId = JSON.parse(sessionStorage.getItem("userData")).userId;
      if (this.reduceCount < 1) {
        return;
      }
      this.carts[index].count = this.reduceCount;
      axios({
        url: "http://localhost:8080/shopCar/addSku",
        params: {
          count: -1,
          id: userId,
          skuId
        }
      });
    },
    add(index, count, skuId) {
      this.reduceCount = this.carts[index].count;
      this.reduceCount++;
      this.carts[index].count = this.reduceCount;
      let userId = JSON.parse(sessionStorage.getItem("userData")).userId;
      axios({
        url: "http://localhost:8080/shopCar/addSku",
        params: {
          count: 1,
          id: userId,
          skuId
        }
      });
    },
    remove(id) {
      let userId = JSON.parse(sessionStorage.getItem("userData")).userId;
      axios({
        url: "http://localhost:8080/shopCar/remove",
        params: {
          skuIds: id,
          userId
        }
      }).then(val => {
        if (val.data.code == "1") {
          window.location.href = location.href;
        }
      });
    }
  }
};
</script>

<style scoped>
.shoppings {
  position: relative;
  width: 990px;
}
.s-title {
  font-size: 16px;
  color: #e2231a;
  font-weight: bold;
}
.shop-ul {
  margin-top: 20px;
  border-top: 2px solid #666666;
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
}
.shop-ul li {
  width: 100%;
  height: 90px;
  border: 1px solid #c5c5c5;
  display: flex;
  /* align-items: center; */
  margin-top: 10px;
  padding: 20px;
}
.shop-ul .img-box {
  width: 80px;
  height: 80px;
}
.shop-ul .img-box img {
  width: 100%;
}
.shop-ul .shop-text {
  margin-left: 10px;
  width: 200px;
  height: 30px;
  color: #e2231a;
}
.shop-r {
  width: 400px;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.shop-price,
.price-total {
  width: 50px;
}
.shop-btn input {
  text-align: center;
}
.shop-btn button {
  width: 20px;
}
.settlement {
  width: 100%;
  height: 40px;
  margin: 10px;
  border: 1px solid #c5c5c5;
  display: flex;
  justify-content: flex-end;
}
.js {
  width: 90px;
  line-height: 40px;
  text-align: center;
  background: #f30213;
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
.totalprice {
  width: 150px;
  margin-top: 10px;
  margin-right: 10px;
}
.totalprice span {
  color: #e2231a;
  font-size: 16px;
  font-weight: bold;
}
</style>
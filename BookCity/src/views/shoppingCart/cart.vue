<template>
  <div class="shopping-cart">
    <div class="cart-top">
      <navtop-show></navtop-show>
    </div>
    <div class="cart-alt" v-show="keys">
      <span class="el-icon-warning"></span>
      <span>您还没有登录！登录后购物车的商品将保存到您账号中</span>
      <el-button type="danger" plain size="mini" @click="jumpLoing()">立即登录</el-button>
    </div>
    <div class="cart-box">
      <shops></shops>
    </div>
    <div class="cart-bottom">
      <bottom-page></bottom-page>
    </div>
  </div>
</template>

<script>
import navtopShow from "views/childView/NavTopShow.vue";
import bottomPage from "components/common/bottompage/BottomPage.vue";
import shops from 'views/shoppingCart/shoppings.vue';
export default {
  data() {
    return {
      keys: true
    };
  },
  components: {
    navtopShow,
    bottomPage,
    shops
  },
  mounted() {
    if (sessionStorage.getItem("userData") != null) {
      this.keys = false;
    }
  },
  methods: {
    jumpLoing() {
      this.$router.push({
        path: "/login"
      });
    }
  }
};
</script>

<style scoped>
.cart-top {
  width: 100%;
  padding: 0 250px;
  background: #e3e4e5;
  box-sizing: border-box;
}
.cart-box {
  margin-top: 20px;
  padding: 0 400px;
  box-sizing: border-box;
  height: 100%;
}
.cart-alt {
  margin-top: 20px;
  width: 990px;
  height: 48px;
  line-height: 48px;
  border: 1px solid #edd28b;
  background: #fffdee;
  margin-left: 400px;
  color: #ffa400;
  text-indent: 20px;
}
</style>
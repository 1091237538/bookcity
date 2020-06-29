<template>
  <div class="detailJump">
    <ul>
      <li>
        <a href='javascript:;'>全部商品分类</a>
      </li>
      <li>
        <a href='javascript:;' @click="jumpIndex">首页</a>
      </li>
      <li>
        <a href='javascript:;' @click="jumpIndex">图书首页</a>
      </li>
      <li>
        <a href='javascript:;'>新品</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    jumpIndex() {
      this.$router.push({
        path: "/index"
      });
    }
  }
};
</script>

<style>
.detailJump {
  width: 100%;
  height: 33px;
}
.detailJump li {
  float: left;
  line-height: 33px;
  text-align: center;
  margin-right: 20px;
}
.detailJump li a {
  color: #333333 !important;
  font-size: 14px;
  font-weight: bold;
}
.detailJump li a:hover {
  color: #f30213!important;
}
.detailJump li:nth-child(1) {
  width: 190px;
  background: #f30213;
}
.detailJump li:nth-child(1) a {
  color: #fff !important;
}
</style>
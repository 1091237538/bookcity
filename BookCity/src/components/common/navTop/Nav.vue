<template>
  <div class="top">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#e3e4e5"
      text-color="#999999"
      active-text-color="#999999"
    >
      <el-menu-item index="1" style="margin-left: 40px" @click="jumpIndex">
        <i class="el-icon-s-home" style="width: 20px;color: #222222"></i>京东首页
      </el-menu-item>
      <el-menu-item index="1">
        <i class="el-icon-s-opportunity" style="width: 20px;color: #222222"></i>四川
      </el-menu-item>
      <el-menu-item index="1" style="margin-left: 100px">
        <slot name="UserLogin"></slot>
      </el-menu-item>
      <el-menu-item index="1">
        <slot name="UserRegister"></slot>
      </el-menu-item>
      <el-menu-item index="1" @click="goOrder">我的订单</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的京东</template>
        <el-menu-item index="2-1">待处理订单</el-menu-item>
        <el-menu-item index="2-2">消息</el-menu-item>
        <el-menu-item index="2-3">返修退换货</el-menu-item>
        <el-menu-item index="2-3">我的问答</el-menu-item>
        <el-menu-item index="2-3">我的关注</el-menu-item>
      </el-submenu>
      <el-menu-item index="1">京东会员</el-menu-item>
      <el-menu-item index="1">企业采购</el-menu-item>
      <el-submenu index="3">
        <template slot="title">客户服务</template>
        <el-menu-item index="2-1">帮助中心</el-menu-item>
        <el-menu-item index="2-2">售后服务</el-menu-item>
        <el-menu-item index="2-3">在线客服</el-menu-item>
        <el-menu-item index="2-3">意见建议</el-menu-item>
        <el-menu-item index="2-3">在线客服</el-menu-item>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">网站导航</template>
        <el-menu-item index="2-1">特色主题</el-menu-item>
        <el-menu-item index="2-2">行业频道</el-menu-item>
        <el-menu-item index="2-3">生活服务</el-menu-item>
        <el-menu-item index="2-3">更多精选</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">手机京东</el-menu-item>
    </el-menu>
    <slot name="LogOut"></slot>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1"
    };
  },
  methods: {
    goOrder() {
      if (sessionStorage.getItem("userData") == null) {
        alert("请登录");
        this.$router.push({
          name: "login"
        });
      } else {
        this.$router.push({
          name: "order"
        });
      }
    },
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    },
    jumpIndex() {
      this.$router.push({
        name: "index"
      });
    }
  }
};
</script>

<style>

.el-menu-demo {
  height: 30px;
}
.el-menu-demo li,
.el-submenu__title {
  line-height: 30px !important;
  height: 30px !important;
}
</style>
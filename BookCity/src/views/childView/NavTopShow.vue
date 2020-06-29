<template>
  <div>
    <nav-top>
      <span slot="UserLogin" @click="JumpLogin">{{username}}</span>
      <span slot="UserRegister" @click="Jumpregister">{{name_reg}}</span>
      <span slot="LogOut">
        <div class="logout" v-show="userData!=''" @click="LogOut">
          <span class="el-icon-switch-button" title="注销"></span>
        </div>
      </span>
    </nav-top>
  </div>
</template>

<script>
import navTop from "components/common/navTop/Nav.vue";
export default {
  data() {
    return {
      username: "你好,请登录",
      name_reg: "免费注册",
      userData: ""
    };
  },
  components: {
    navTop
  },
  mounted() {
    if (JSON.parse(sessionStorage.getItem("userData")) == null) {
      return;
    }
    this.userData = sessionStorage.getItem("userData");
    let username = JSON.parse(sessionStorage.getItem("userData")).username;
    this.username = username;
    this.name_reg = "";
  },
  methods: {
    LogOut() {
      sessionStorage.removeItem("userData");
      window.location.href = location.href;
    },
    JumpLogin() {
      if (sessionStorage.getItem("userData") != null) {
        return;
      }
      this.$router.push({
        path: "/login"
      });
    },
    Jumpregister() {
      this.$router.push({
        path: "/register"
      });
    }
  }
};
</script>

<style scoped>
.logout {
  position: absolute;
  right: 200px;
  top: 5px;
  font-size: 20px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  line-height: 20px;
  text-align: center;
  background: #000;
}
.logout span {
  color: #fff;
}
</style>
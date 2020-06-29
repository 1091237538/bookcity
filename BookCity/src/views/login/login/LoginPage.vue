<template>
  <div class="loginpage">
    <header>
      <img src="~assets/img/login3.png" alt />
      <p class="one">欢迎登陆</p>
      <a href="#">登录页面，调查问卷</a>
    </header>
    <div class="login_bg">
      <img src="~assets/img/login.png" alt id="bi" />
      <div class="login-right">
        <Login />
      </div>
    </div>
    <table>
      <tr>
        <td>
          <a href="#">关于我们</a>
        </td>
        <td>
          <a href="#">联系我们</a>
        </td>
        <td>
          <a href="#">人才招聘</a>
        </td>
        <td>
          <a href="#">商家入驻</a>
        </td>
        <td>
          <a href="#">广告服务</a>
        </td>
        <td>
          <a href="#">手机京东</a>
        </td>
        <td>
          <a href="#">友情链接</a>
        </td>
        <td>
          <a href="#">联盟销售</a>
        </td>
        <td>
          <a href="#">京东社区</a>
        </td>
        <td>
          <a href="#">京东公益</a>
        </td>
        <td>
          <a href="#">Elindbd</a>
        </td>
      </tr>
    </table>
    <p id="pp">Copyright©2004-2017京东JD.Com版权所有</p>
  </div>
</template>
<script>
import Login from "views/login/login/Login.vue";
export default {
  name: "LoginPage",
  components: {
    Login
  }
};
</script>

<style>
.login_bg {
  position: relative;
  width: 100%;
  height: 475px;
  background: #e93854;
}
.loginpage {
  width: 100%;
  height: 100%;
  background: #fff;
}
.loginpage header {
  position: relative;
  width: 100%;
  height: 80px;
  border-bottom: 2px solid gainsboro;
}
.loginpage header img {
  position: absolute;
  left: 150px;
  top: 10px;
}
.loginpage header p.one {
  position: absolute;
  font-size: 25px;
  font-family: Dialog;
  left: 368px;
  top: 15px;
}
.loginpage header a {
  position: absolute;
  font-size: 16px;
  font-family: Dialog;
  color: grey;
  right: 165px;
  top: 45px;
  text-decoration: none;
}
.loginpage header a:hover {
  color: red;
}
#bi {
  position: absolute;
  left: 30%;
}
.loginpage table {
  position: absolute;
  top: 650px;
  left: 50%;
  transform: translateX(-50%);
}
.loginpage tr td {
  border-right: 1px solid black;
  font-size: 13px;
  padding: 5px;
}
.loginpage td a {
  text-decoration: none;
  color: grey;
}
.loginpage td a:hover {
  color: red;
}
.loginpage #pp {
  position: absolute;
  top: 780px;
  left: 50%;
  transform: translateX(-50%);
}
.login-right {
  position: absolute;
  right: 450px;
  top:-120px;
}
</style>
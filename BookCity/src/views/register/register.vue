<template>
  <div class="register">
    <header>
      <img src="~assets/img/login3.png" alt />
      <p class="one">欢迎注册</p>
      <a href @click.prevent="JumpLogin">请登录>></a>
    </header>
    <div class="zc">
      <div>
        <input type="text" class="yh" placeholder="用户名" required="required" v-model="username" />
      </div>
      <div>
        <input type="password" class="mm" required="required" placeholder="密码" v-model="password" />
      </div>
      <div>
        <input
          type="password"
          class="qr"
          required="required"
          placeholder="确认密码"
          v-model="password2"
          @blur="qr"
        />
      </div>
      <div>
        <input type="text" class="tel" required="required" placeholder="手机号" v-model="phone" />
      </div>
      <div>
        <input type="text" class="em" required="required" placeholder="邮箱" v-model="email" />
      </div>
      <div class="button">
        <button class="message7" @click="register">点击注册</button>
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
import axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      password2: "",
      phone: "",
      email: ""
    };
  },
  methods: {
    JumpLogin() {
      this.$router.push({
        path: "/login"
      });
    },
    qr() {
      if (this.password != this.password2) {
        alert("密码输入不一致");
      }
    },
    register() {
      if (
        this.username == "" ||
        this.password == "" ||
        this.password2 == "" ||
        this.phone == "" ||
        this.email == ""
      ) {
        alert('请输入正确的信息')
        return;
      }
      axios({
        method: "POST",
        url: "http://localhost:8080/user/register",
        data: {
          password: this.password,
          phone: this.phone,
          username: this.username,
          email: this.email
        }
      }).then(val => {
        if(val.data.code=='1'){
          alert('请到邮箱激活后登陆')
          this.$router.push({
            name:'login'
          })
        }
      });
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.register {
  background: #fff;
}
.zc {
  position: absolute;
  left: 650px;
  width: 900px;
  height: 600px;
}
.zc > div {
  height: 100px;
}
.zc > div > input {
  position: relative;
  margin-left: 80px;
  margin-top: 30px;
  padding: 0 10px;
  width: 410px;
  height: 40px;
  outline: none;
  box-sizing: border-box;
  border: 1.5px solid #d4d4d4;
  color: grey;
}
.pick {
  position: relative;
  width: 100px;
  height: 40px;
  margin-left: 500px;
  top: -40px;
}

.zc > div > p {
  position: relative;
  margin-left: 80px;
  font-size: 15px;
  color: red;
}
.zc > .button {
  position: relative;
  margin-left: 80px;
  margin-top: 35px;
  width: 410px;
  height: 45px;
  text-align: center;
  line-height: 40px;
}
.register .message7 {
  width: 100%;
  height: 100%;
}
.message7:hover,
.pick:hover {
  cursor: pointer;
}
.register header {
  position: relative;
  width: 100%;
  height: 80px;
  border-bottom: 2px solid gainsboro;
}
.register header img {
  position: absolute;
  left: 180px;
  top: 10px;
}
.register header p.one {
  position: absolute;
  font-size: 25px;
  font-family: Dialog;
  left: 368px;
  top: 15px;
}
.register header a {
  position: absolute;
  font-size: 16px;
  font-family: Dialog;
  color: grey;
  right: 165px;
  top: 45px;
  text-decoration: none;
}
.register header a:hover {
  color: red;
}
.register table {
  position: absolute;
  top: 800px;
  left: 560px;
}
.register tr td {
  font-size: 13px;
  padding: 5px;
}
.register td a {
  text-decoration: none;
  color: grey;
}
.register td a:hover {
  color: red;
}
.register #pp {
  position: absolute;
  top: 850px;
  left: 750px;
  font-size: 15px;
}
</style>
<template>
  <div class="tab">
    <div class="tab_list">
      <ul>
        <li class="zhd">账户登陆</li>
      </ul>
    </div>
    <div class="tab_con">
      <div class="itemss">
        <div class="one">
          <input type="text" id="white" placeholder="账号" v-model="username" />
        </div>
        <div class="two">
          <input type="password" id="black" placeholder="密码" v-model="password" />
        </div>
        <input type="checkbox" class="ch" />自动登陆
        <div id="zc" @click="login">
          <p class="message7" >登录</p>
        </div>
        <p id="lz">
          <a href="#" @click="Jumpregister">立即注册</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { logIn } from "network/login.js";
import axios from "axios";
import $ from "jquery";
export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
      checkCode: "",
      yz: "http://localhost:8080/checkCode"
    };
  },
  methods: {
    sx() {
      let sj = Math.round(Math.random() * 100);
      this.yz = `${this.yz}?${sj}`;
    },
    Jumpregister() {
      this.$router.push({
        path: "/register"
      });
    },
    login() {
      if (this.username === "" || this.password === "") {
        return;
      } else {
        let params = {
          username: this.username,
          password: this.password
        };
        var url = "http://localhost:8080/";
        $.ajax({
          type: "post",
          url: url + "login",
          contentType: "application/json",
          data: JSON.stringify(params),
          success: function(data) {
            window.sessionStorage.setItem("userData", JSON.stringify(data));
            if (data.userId != null) {
                window.location.href='http://localhost:8081/index'
            }
          }
        });
      }
    }
  }
};
</script>

<style>
.tab {
  position: absolute;
  top: 170px;
  width: 340px;
  height: 400px;
  background: #fff;
}
.tab_list {
  width: 330px;
  height: 40px;
  background-color: white;
}
.tab_list li {
  list-style: none;
  float: left;
  width: 120px;
  line-height: 39px;
  height: 39px;
  padding: 0 20px;
  text-align: center;
  cursor: pointer;
  color: grey;
}
.tab_list li:hover {
  color: red;
}
.tab_list .current {
  background-color: white;
}

.tab_con .itemss {
  width: 328px;
  height: 100%;
  background-color: white;
}
.tab_con .itemss .one {
  width: 280px;
  height: 43px;
  border: 1px solid gainsboro;
  margin-top: 30px;
  margin-left: 20px;
}
.tab_con .itemss .one input {
  border: 1px solid white;
  padding-left: 10px;
  width: 230px;
  height: 38px;
  outline: none;
}
.tab_con .itemss .two {
  width: 280px;
  height: 43px;
  border: 1px solid gainsboro;
  margin-top: 30px;
  margin-left: 20px;
}
.tab_con .itemss .two input {
  border: 1px solid white;
  padding-left: 10px;
  width: 230px;
  height: 38px;
  outline: none;
}
.tab_con .itemss .ch {
  margin-top: 30px;
  margin-left: 20px;
}
.tab_con .itemss .wj {
  float: right;
  margin-top: 50px;
  color: grey;
}
.tab #zc {
  width: 280px;
  margin-top: 10px;
  height: 40px;
  margin-left: 20px;
  border: 1px solid red;
  text-align: center;
  background-color: red;
  cursor: pointer;
}
.tab #zc p {
  margin-top: 10px;
  color: white;
}
.tab_con .itemss p#lz {
  width: 258px;
  text-align: center;
  border-top: 1px solid grey;
  margin-top: 20px;
  margin-left: 38px;
  padding-top: 10px;
}
.tab_con .itemss p a {
  text-decoration: none;
  color: red;
}
.tab .itemss p.wj {
  position: absolute;
  left: 230px;
  top: 191px;
}
.tab .itemss p.wj:hover {
  color: red;
  cursor: pointer;
}
</style>
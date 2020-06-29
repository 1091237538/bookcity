<template>
  <div class="shoppingImg">
    <div class="ImgBox">
      <img :src="imgs" alt />
    </div>
    <div class="imgSw">
      <a href @click.prevent>
        <span class="el-icon-arrow-left imgSw-l"></span>
      </a>
      <ul class="imgSw-ul">
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <a href @click.prevent>
        <span class="el-icon-arrow-right imgSw-r"></span>
      </a>
    </div>
    <div class="miniFont">
      <a href @click.prevent>
        <span class="el-icon-star-on"></span>
        <span>关注</span>
      </a>
      <a href @click.prevent>
        <span class="el-icon-share"></span>
        <span>分享</span>
      </a>
      <a href @click.prevent>
        <span></span>
        <span>举报</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgs: ""
    };
  },
  mounted() {
    this.imgs = JSON.parse(sessionStorage.getItem("item")).images;
  }
};
</script>

<style>
.shoppingImg {
  width: 350px;
  height: 450px;
}
.ImgBox {
  width: 350px;
  height: 350px;
  border: 1px solid #eeeeee;
}

.imgSw {
  position: relative;
  width: 100%;
  height: 54px;
  margin-top: 10px;
}
.imgSw-ul {
  position: absolute;
  width: 290px;
  height: 54px;
  left: 30px;
}
.imgSw-ul li {
  width: 50px;
  height: 50px;
  float: left;
  margin-right: 3px;
}
.imgSw-l,
.imgSw-r {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 30px;
}
.imgSw-l {
  left: 0px;
}
.imgSw-r {
  right: 0px;
}
.miniFont {
  font-size: 14px;
}
.miniFont a {
  color: #666;
}
.miniFont a:nth-child(3) {
  float: right;
}
.miniFont a:hover {
  color: red;
}
.miniFont a span:nth-child(1) {
  color: red;
  font-size: 16px;
}
</style>
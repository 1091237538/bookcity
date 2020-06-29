<template>
  <div class="medal2">
    <img
      src="https://img20.360buyimg.com/img/s280x240_jfs/t1/94257/18/1090/9364/5db940bdEc16f4018/2a445b562a8e4642.png!cc_280x240.webp"
      width="140"
    />
    <div class="discount">
      <a href="#">查看勋章介绍></a>
      <ul class="discount_ul">
        <li>
          <a href="#">
            <img
              src="https://img20.360buyimg.com/aotucms/jfs/t1/107391/26/137/2270/5df2f0c5Eb386af23/7b4e648eb7ea5656.png.webp"
              alt
            />
            <span>每月10日</span>
          </a>
        </li>
        <li>
          <a href="#">
              <img src="https://img10.360buyimg.com/aotucms/jfs/t1/84730/32/6326/3536/5df2f0d2E9c354c93/467ff1fe9bbe3230.png.webp" alt="">
              <span>专属活动</span>
          </a>
        </li>
        <li>
          <a href="#">
              <img src="https://img11.360buyimg.com/aotucms/jfs/t1/101036/3/6280/3682/5df2f0ddE2103d0d9/77a172970c4f3aa2.png.webp" alt="">
              <span>专属优惠</span>
          </a>
        </li>
        <li>
          <a href="#">
              <img src="https://img11.360buyimg.com/aotucms/jfs/t1/91488/9/6351/3953/5df2f0eaE02f308b6/b9e492d2995ca734.png.webp" alt="">
              <span>优惠提醒</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.medal2 {
  position: relative;
  width: 100%;
  height: 260px;
}
.medal2 > img {
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
}
.discount {
  width: 100%;
  height: 260px;
  margin-top: 35px;
  padding-top: 120px;
  text-align: center;
  background: #bfbfbf;
  box-sizing: border-box;
  
}
.discount  a{
  color: #fff;
}
.discount_ul {
  display: inline-block;
  margin:10px;
}
.discount_ul li {
    float: left;
    margin: 5px ;
}
.discount_ul img {
  width: 20px;
  vertical-align: bottom;
}
</style>
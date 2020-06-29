<template>
  <div class="bookgo">
    <span v-for="(item,index) in ImgList" :key="index">
      <a href="#">
        <img :src="item" alt />
      </a>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ImgList: [
        "https://img13.360buyimg.com/babel/jfs/t1/107117/10/18035/38376/5ebe4889Ecd0dd158/6aeaa6f206fc8906.jpg.webp",
        "https://img10.360buyimg.com/babel/jfs/t1/120346/15/3288/57923/5ecf63e0E836468c6/d77033b5fdc5636a.jpg.webp",
        "https://img20.360buyimg.com/babel/jfs/t1/115648/22/8234/80921/5ecba458Ee438e5e3/899985d703f90c83.png.webp",
        "https://img12.360buyimg.com/babel/jfs/t1/120395/1/1646/35676/5ebe30e0E3cac7ecc/ad13539e1643dd29.jpg.webp"
      ]
    };
  }
};
</script>

<style>
.bookgo {
  width: 740px;
  height: 100px;
}
.bookgo span:nth-child(1)~span {
  margin-left: 9.3px;
}
.bookgo img {
  width: 178px;
  height: 100px;
  display: inline-block;
}
</style>
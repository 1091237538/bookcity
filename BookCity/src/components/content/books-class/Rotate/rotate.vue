<template>
  <div class="rotate">
      <div class="block">
        <el-carousel>
          <el-carousel-item v-for="(item,index) in imgList" :key="index">
            <a href="#">
               <img :src="item"  />
            </a>
          </el-carousel-item>
        </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        "https://img10.360buyimg.com/babel/s1580x740_jfs/t1/113415/21/8586/171536/5ed0ae1bE5e5752dc/2adf434cdbe7b37e.jpg!cc_1580x740.webp",
        "https://img14.360buyimg.com/babel/s1580x740_jfs/t1/131032/15/722/255213/5ed0beadE7c81302e/72e17c030f0e1d59.jpg!cc_1580x740.webp",
        "https://img10.360buyimg.com/babel/s1580x740_jfs/t1/128090/27/3503/174526/5ed3a91aEabb9e223/b34fe9e7d9020b82.jpg!cc_1580x740.webp",
        "https://img10.360buyimg.com/babel/s1580x740_jfs/t1/114211/17/8142/144293/5ecce77dE2a7cf0d8/4c5b9f2ca7bd6850.jpg!cc_1580x740.webp"
      ]
    };
  }
};
</script>

<style>
.rotate {
  position: relative;
  width: 740px;
  height: 370px;
}
.rotate .el-carousel__container {
  height: 370px;
}
.rotate img {
  max-width: 100%;
  height: 370px;
}
</style>
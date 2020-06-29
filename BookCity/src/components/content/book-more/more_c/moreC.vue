<template>
  <div class="moreC">
    <ul>
      <li v-for="(item,index) in booklist" :key="index">
        <a href>
          <img :src="item.imgSrc" alt />
          <span>{{item.describe}}</span>
          <p>{{item.price}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      booklist: [
        {
          ids: 1,
          describe: "汤小团漫游中国历史:东周两汉三国(注音版套装12册)",
          imgSrc:
            "https://img12.360buyimg.com/babel/s320x320_jfs/t1/88177/28/16550/172678/5e7d5f7cEdc148ef8/3d214617baa0fccc.jpg!cc_320x320.webp",
          price: "￥250.00"
        },
        {
          ids: 2,
          describe:
            "宝宝的第一套手指推拉书:冰冰和波波（锻炼宝宝手指协调和精细动作 套装共4册）尚童出品",
          imgSrc:
            "https://img14.360buyimg.com/babel/s320x320_jfs/t1/10199/38/13134/682891/5c7e1681Ebde37aae/ac512ea63a6ce231.jpg!cc_320x320.webp",
          price: "￥120.00"
        },
        {
          ids: 3,
          describe:
            "我的第一个图书馆套装 50册 英文原版 进口故事书 My First Reading Library 3-6岁",
          imgSrc:
            "https://img13.360buyimg.com/babel/s320x320_jfs/t1/7534/20/3949/38627/5bd91f3eE08f9744a/078bbfba0a040fb3.jpg!cc_320x320.webp",
          price: "￥342.00"
        },
        {
          ids: 4,
          describe:
            "老鼠邮差绘本（提升孩子想象力、观察力、审美力 精装全3册）尚童出品",
          imgSrc:
            "https://img13.360buyimg.com/babel/s320x320_jfs/t1/30069/16/3737/823233/5c78a0c1E8ff11fa5/a4f19b1f398a6411.jpg!cc_320x320.webp",
          price: "￥100.00"
        },
        {
          ids: 5,
          describe:
            "(朗声旧版)金庸作品集套装（套装全36册）附白马啸西风、鸳鸯刀、越女剑",
          imgSrc:
            "https://img13.360buyimg.com/babel/s320x320_jfs/t859/290/1044308140/165976/3f5e8e1/556bbc27Nc4fe0802.jpg!cc_320x320.webp",
          price: "￥530.00"
        },
        {
          ids: 6,
          describe:
            "(朗声旧版)金庸作品集套装（套装全36册）附白马啸西风、鸳鸯刀、越女剑",
          imgSrc:
            "https://img13.360buyimg.com/babel/s320x320_jfs/t859/290/1044308140/165976/3f5e8e1/556bbc27Nc4fe0802.jpg!cc_320x320.webp",
          price: "￥530.00"
        }
      ]
    };
  }
};
</script>

<style>
.moreC {
  position: absolute;
  width: 721px;
  height: 514px;
  left: 240px;
  text-align: center;
}
.moreC li {
  float: left;
  width: 230px;
  height: 257px;
  background: #fff;
  margin-right: 10px;
  /* margin-bottom: 10px; */
}
.moreC img {
  width: 180px;
  margin-top: 10px;
}
.moreC span {
  display: inline-block;
  margin-top: 5px;
  width: 180px;
  height: 17px;
  overflow: hidden;
  font-size: 14px;
  color: #666;
  text-overflow: ellipsis;
}
.moreC p {
    color: rgb(240, 43, 43);
    font-size: 16px;
    margin-top: 5px;
    margin-right: 5px;
}
</style>
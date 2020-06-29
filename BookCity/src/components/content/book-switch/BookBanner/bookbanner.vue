<template>
  <div class="bookbanner">
    <div class="bannerName">
      <ul class="bannerName_ul">
        <li v-for="(item,index) in bannerName" :key="index" @mouseenter="sw(item.id)">
          <a href="#" :class="{active:item.id==currentId}">{{item.name}}</a>
        </li>
      </ul>
      <ul class="booklist">
        <li v-for="(item,index) in bannerName[banner_currentId].booklist" :key="index" class="bookliste" >
          <a href="#" >
            <img :src="item.imgSrc" />
            <span>{{item.describe}}</span>
            <p>{{item.price}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner_currentId: 0,
      currentId: 1,
      bannerName: [
        {
          id: 1,
          name: "秒杀",
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
            }
          ]
        },
        {
          id: 2,
          name: "文学",
           booklist: [
            {
              ids: 1,
              describe: "汤小团漫游中国历史:东周两汉三国(注音版套装12册)",
              imgSrc:
                "https://img11.360buyimg.com/babel/s320x320_jfs/t1/114947/13/565/443193/5e8d9847E3dff7e26/9586206052b6229a.jpg!cc_320x320.webp",
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
            }
          ]
        },
        {
          id: 3,
          name: "社科",
           booklist: [
            {
              ids: 1,
              describe: "汤小团漫游中国历史:东周两汉三国(注音版套装12册)",
              imgSrc:
                "https://img10.360buyimg.com/babel/s320x320_jfs/t1/125673/4/3629/326927/5ed4c069E41db81ca/aea7755c744af98b.jpg!cc_320x320.webp",
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
            }
          ]
        },
        {
          id: 4,
          name: "经营",
          booklist: [
            {
              ids: 1,
              describe: "汤小团漫游中国历史:东周两汉三国(注音版套装12册)",
              imgSrc:
                "https://img12.360buyimg.com/babel/s320x320_jfs/t1/106778/10/18625/447153/5e982a84Eee553bc4/cb699031018da598.jpg!cc_320x320.webp",
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
            }
          ]
        },
        {
          id: 5,
          name: "少儿",
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
            }
          ]
        },
        {
          id: 6,
          name: "文教",
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
            }
          ]
        },
        {
          id: 7,
          name: "科技",
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
            }
          ]
        },
        {
          id: 8,
          name: "生活",
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
            }
          ]
        },
        {
          id: 9,
          name: "艺术",
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
            }
          ]
        },
        {
          id: 10,
          name: "店铺优选",
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
            }
          ]
        }
      ]
    };
  },
  methods: {
    sw(id) {
      this.currentId = id;
      this.banner_currentId = id - 1;
    },
  }
};
</script>

<style>
.bannerName {
  width: 100%;
  height: 50px;
  background: rgb(249, 249, 249);
}
.bannerName_ul {
  position: relative;
  display: inline-block;
  width: 100%;
}
.bannerName_ul li {
  float: left;
  width: 94px;
  line-height: 50px;
  text-align: center;
  transition: all 0.2s;
}
.bannerName_ul li a {
  display: inline-block;
  width: 100%;
  height: 100%;
  color: #482e1a;
}
.active {
  background: rgb(83, 72, 66);
  color: #fff !important;
}
.booklist {
  width: 940px;
  height: 265px;
}
.bookliste {
  display: inline-block;
  width: 180px;
  height: 265px;
  background: #fff;
  margin-right: 10px;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
}
.bookliste:last-child {
  margin-right: 0;
}
.bookliste img {
  max-width: 100%;

}
.bookliste span {
    display: inline-block;
    margin-top: 5px;
    height: 33px;
    overflow: hidden;
    font-size: 14px;
    color:#666;
    text-overflow:ellipsis;
}
.bookliste p {
    color: rgb(240, 43, 43);
    font-size: 16px;
    margin-top: 5px;
    margin-right: 5px;
}

</style>
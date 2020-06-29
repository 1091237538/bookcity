<template>
  <div class="book-Hotsale">
    <div class="hd1">
      <span>热卖</span>
      <br />
      <span>推荐</span>
    </div>
    <ul class="Hotsale-ul1">
      <li>
        <a href @click.prevent>
          <img
            src="https://img12.360buyimg.com/n4/jfs/t1/124290/26/1563/121551/5ebe425cE3b2296bc/a6c34eb2d4e4767c.jpg"
            alt
          />
          <div class="right">
            <span>实拍现货【赠3张书签+3张明信片】还珠格格123部 琼瑶 古代言情青春影视爱情宫斗 还珠格格书籍正版</span>
            <p>￥123</p>
            <button>立即抢购</button>
          </div>
        </a>
      </li>
      <li>
        <a href @click.prevent>
          <img
            src="https://img12.360buyimg.com/n4/jfs/t1/118020/37/9343/99927/5ed85384E69773bdc/7e30aaafb5375a2b.jpg"
            alt
          />
          <div class="right">
            <span>实拍现货【赠3张书签+3张明信片】还珠格格123部 琼瑶 古代言情青春影视爱情宫斗 还珠格格书籍正版</span>
            <p>￥123</p>
            <button>立即抢购</button>
          </div>
        </a>
      </li>
      <li>
        <a href @click.prevent>
          <img
            src="https://img12.360buyimg.com/n4/jfs/t1/138209/34/617/233054/5ee4a187E32bc93c2/0a614aeec9360196.jpg"
            alt
          />
          <div class="right">
            <span>实拍现货【赠3张书签+3张明信片】还珠格格123部 琼瑶 古代言情青春影视爱情宫斗 还珠格格书籍正版</span>
            <p>￥123</p>
            <button>立即抢购</button>
          </div>
        </a>
      </li>
    </ul>
    <div class="hd2">
      <span>促销</span>
      <br />
      <span>活动</span>
    </div>
    <ul class="recommend">
      <li>
        <a href>好书聚实惠 99元10件</a>
      </li>
      <li>
        <a href>文学艺术 抢鲜热卖</a>
      </li>
      <li>
        <a href>大咖书单</a>
      </li>
      <li>
        <a href>店铺满减 钜惠来袭</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.book-Hotsale {
  width: 1390px;
  height: 150px;
  background: #f1f1f1;
  display: flex;
}
.hd1,
.hd2 {
  width: 50px;
  height: 85px;
  background: url("https://misc.360buyimg.com/product/search/1.0.8/css/i/list.icons.other.png");
  background-size: 100%;
  margin-left: 20px;
  text-align: center;
  line-height: 25px;
  color: #ff6600;
}
.hd2 {
  margin-left: 0;
}

.Hotsale-ul1 {
  display: flex;
  width: 1100px;
  height: 150px;
  margin-left: 20px;
  box-sizing: border-box;
  padding: 20px;

  align-items: center;
}
.Hotsale-ul1 .right {
  position: absolute;
  right: 0;
  top: 0;
  width: 160px;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
}
.Hotsale-ul1 .right p {
  margin-top: 10px;
  color: #e4393c;
}
.Hotsale-ul1 .right button {
  margin-top: 10px;
  width: 76px;
  height: 25px;
  line-height: 25px;
  border: 1px solid #dddddd;
  color: #666666;
  cursor: pointer;
}
.Hotsale-ul1 li {
  position: relative;
  width: 280px;
  height: 120px;
  margin-right: 50px;
  background: #fff;
  display: flex;
}
.Hotsale-ul1 .right span {
  display: inline-block;
  height: 28px;
  overflow: hidden;
  color: #666666;
}
.Hotsale-ul1 li img {
  margin: 10px;
}
.recommend {
  width: 200px;
  height: 130px;
  margin: 10px 0;
  padding: 0px 10px;
  box-sizing: border-box;
}
.recommend li {
  position: relative;
  margin: 10px;
}
.recommend li::before {
  content: ".";
  position: absolute;
  left: -7px;
  top: -7px;
  font-size: 16px;
}
.recommend li a {
  color: #666666;
}
.recommend li a:hover {
    color: red;
}
</style>
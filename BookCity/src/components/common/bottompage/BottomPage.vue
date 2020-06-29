<template>
  <div class="bottomTotal">
    <ol class="bT-item1">
      <li class="item1-1">
        <i class="one">多</i>
         品类齐全，轻松购物
      </li>
      <li class="item1-2">
        <i class="two">快</i>多仓直发，急速配送
      </li>
      <li class="item1-3">
        <i class="three">好</i>
        正品行货，精致服务
      </li>
      <li class="item1-4">
        <i class="four">省</i>
        天天低价，畅选无忧
      </li>
    </ol>
    <div class="bT-item2">
        <div class="wrap">
          <dl class="fore1">
          <dt>购物指南</dt>
            <dd v-for="(item,index) in shops" :key="index">{{item}}</dd>
          </dl>
          <dl class="fore2">
            <dt>配送方式</dt>
            <dd v-for="(item,index) in delivery" :key="index">{{item}}</dd>
          </dl>
          <dl class="fore3">
            <dt>支付方式</dt>
            <dd v-for="(item,index) in delivery" :key="index">{{item}}</dd>
          </dl>
          <dl class="fore4">
            <dt>售后服务</dt>
            <dd v-for="(item,index) in service" :key="index">{{item}}</dd>
          </dl>
          <dl class="fore5">
            <dt>售后服务</dt>
            <dd v-for="(item,index) in special" :key="index">{{item}}</dd>
          </dl>
        </div>
    </div>
    <div class="bT-item3">
      <div class="one">
        <p>
          <a v-for="(item,index) in about" :key="index">{{item}}</a>
        </p>
      </div>
      <div class="two">
        <p>
          <a v-for="(item,index) in about2" :key="index">{{item}}</a>
        </p>
      </div>
      <div class="three">
        <p>
          <a v-for="(item,index) in about3" :key="index">{{item}}</a>
        </p>
      </div>
      <div class="four">
        <p>
          <a v-for="(item,index) in about4" :key="index">{{item}}</a>
        </p>
      </div>
      <div class="five">
        <p>
          <a v-for="(item,index) in about5" :key="index">{{item}}</a>
        </p>
      </div>
      <div class="six">
        <p>
          <a v-for="(item,index) in about6" :key="index">{{item}}</a>
        </p>
      </div>
      <div class="seven">
        <i class="So"><img src="~assets/img/one.png" alt=""></i>
        <i class="So"><img src="~assets/img/two.png" alt=""></i>
        <i class="So"><img src="~assets/img/th.png" alt=""></i>
        <i class="So"><img src="~assets/img/fo.png" alt=""></i>
        <i class="So"><img src="~assets/img/fi.png" alt=""></i>
        <i class="So"><img src="~assets/img/six.png" alt=""></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BottomPage",
    data(){
      return{
        shops:['购物流程','会员介绍','生活旅行/团购','常见问题','大家电','联系客服'],
        delivery:['上门自提','211限时达','配送服务查询','配送费收取标准','海外配送'],
        pay:['货到付款','在线支付','分期付款','公司转账'],
        service:['售后政策','价格保护','退款说明','返修/退换货','取消订单'],
        special:['夺宝岛','DIY装机','延保服务','京东E卡','京东通信','京鱼座智能'],
        about:['关于我们|','联系我们|','联系客服|','合作招商|','商家帮助|','营销中心|','手机京东|',
          '友情链接|','销售联盟|'],
        about2:['京公网安备 11000002000088号|','京ICP证070359号|互联网药品信息服务资格证编号(京)-经营性-2014-0008|',
          '新出发京零 字第大120007号'],
        about3:['互联网出版许可证编号新出网证(京)字150号|','出版物经营许可证|','网络文化经营许可证京网文[2014]2148-348号|',
          '违法和不良信息举报电话：4006561155'],
        about4:['Copyright © 2004 - 2020  京东JD.com 版权所有|','消费者维权热线：4006067733经营证照|',
          '(京)网械平台备字(2018)第00003号|营业执照'],
        about5:['Global Site|','Сайт России|','Situs Indonesia|','Sitio de España|','เว็บไซต์ประเทศไทย'],
        about6:['京东旗下网站：京东钱包|','京东智联云']
      }
    }
  }
</script>

<style>
  .seven  img{
    width: 103px;
    margin-right: 10px;
  }
  .bottomTotal{
    width: 100%;
    height: 100%;
    background-color: #eaeaea;
  }
  .bT-item3{
    width: 100%;
    height: 100%;
    text-align: center;
  }
  .bT-item3 .one{
    width: 100%;
    height:40px;
    padding-top: 10px;
  }
  .bT-item3 .two{
    width: 100%;
    height:30px;
    font-size: 15px;
  }
  .bT-item3 .three{
    width: 100%;
    height:30px;
    font-size: 15px;
  }
  .bT-item3 .four{
    width: 100%;
    height:30px;
    font-size: 15px;
  }
  .bT-item3 .five{
    width: 100%;
    height:30px;
    font-size: 15px;
  }
  .bT-item3 .six{
    width: 100%;
    height:30px;
    font-size: 15px;
  }
  .bT-item3 .seven{
    width: 100%;
    height:80px;
    font-size: 15px;
  }
  .bT-item3 .one a{
    color: #222222;
  }
  .bT-item2 {
     text-align: center;
     margin: 10px 0;
   }
  .bT-item2 dl dt {
    font-size: 18px;
    font-weight: bold;
    padding-bottom: 20px;
    color: #666;
  }
  .bT-item2 dl dd {
    padding-bottom: 10px;
    font-size: 13px;
  }

  .bT-item2 .wrap{
    width: 80%;
    height: 100%;
    margin-left: 230px;
    margin-top: 10px;
  }
  .wrap .fore1{
    width:20%;
    height: 100%;

  }
  .wrap .fore2{
    position: relative;
    width:20%;
    height: 100%;
    margin-left: 250px;
    margin-top: -198px;
  }
  .wrap .fore3{
    position: relative;
    width:20%;
    height: 100%;
    margin-left: 480px;
    margin-top: -198px;
  }
  .wrap .fore4{
    position: relative;
    width:20%;
    height: 100%;
    margin-left: 720px;
    margin-top: -198px;
  }
  .wrap .fore5{
    position: relative;
    width:20%;
    height: 100%;
    margin-left: 965px;
    margin-top: -198px;
  }
  .bT-item2 {
    border-top: 1px solid #dedede;
    border-bottom: 1px solid #dedede;
    width: 100%;
    height: 200px;
  }
  .bT-item1,
  .bT-item2 {
    padding: 0 100px;
    box-sizing: border-box;
  }
  .bT-item1{
    position: relative;
    width: 70%;
    height: 100px;
    margin: 50px  auto 0 auto;
    line-height: 100px;
  }
.bT-item1 li{
  position: relative;
  list-style-type: none;
  font-size:20px;
  float: left;
   margin-left: 80px;
}
.bT-item1 li .one {
  position: absolute;
  top: 30px;
  left: -40px;;
  width: 36px;
  height: 42px;
  text-indent: -9999px;
  background-image: url(~assets/img/more.png);
  /* transform: translate(265px,110px); */
  background-repeat: no-repeat;
}
.bT-item1 li .two{
  position: absolute;
  top: 30px;
  left: -40px;
  width: 36px;
  height: 42px;
  text-indent: -9999px;
  background-image: url(~assets/img/more.png);
  background-position: 0 -43px;
  /* transform: translate(525px,110px); */
  background-repeat: no-repeat;
}
.bT-item1 li .three{
  position: absolute;
  top: 30px;
  left: -40px;
  width: 36px;
  height: 42px;
  text-indent: -9999px;
  background-image: url(~assets/img/more.png);
  background-position: 0 -86px;
  /* transform: translate(785px,110px); */
  background-repeat: no-repeat;
}
.bT-item1 li .four{
  position: absolute;
  top: 30px;
  left: -40px;
  width: 36px;
  height: 42px;
  text-indent: -9999px;
  background-image: url(~assets/img/more.png);
  background-position: 0 -129px;
  /* transform: translate(1045px,110px); */
  background-repeat: no-repeat;
}
</style>
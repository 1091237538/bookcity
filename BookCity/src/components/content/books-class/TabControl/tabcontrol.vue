<template>
  <div class="tabcontrol">
    <ul>
      <li>
        <a href="#" style="color: rgb(164, 130, 118)">图书首页</a>
      </li>
      <li>|</li>
      <li>
        <a href="#">新品</a>
      </li>
      <li>|</li>
      <li>
        <a href="#">数字内容</a>
      </li>
       <li>|</li>
      <li>
        <a href="#">知识服务</a>
      </li>
       <li>|</li>
      <li>
        <a href="#">文娱商城</a>
      </li>
       <li>|</li>
      <li>
        <a href="#">教育培训</a>
      </li>
       <li>|</li>
      <li>
        <a href="#">特色书店</a>
      </li>
       <li>|</li>
      <li>
        <a href='#'>排行榜</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.tabcontrol {
  width: 740px;
  height: 40px;
  line-height: 40px;
  background: #fff;
}
.tabcontrol li {
    padding: 0 6px;
    margin-left: 5px;
    float: left;
}
.tabcontrol li a {
    color: black;
}
.tabcontrol li:nth-child(even) {
    color: #e8e4e1;
}
</style>
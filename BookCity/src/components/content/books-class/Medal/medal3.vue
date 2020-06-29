<template>
  <div class="medal3">
    <div class="medal3_title">
      <span class="title-l">-</span>
      <span>头条快报</span>
      <span class="title-r">-</span>
    </div>
    <ul class='medal3_ul'>
      <li>
        <a href='#'>
            <span class="one"></span>
            <span>文学小说 每满100减50</span>
        </a>
      </li>
      <li>
        <a href='#'>
            <span class="one"></span>
            <span>经管励志 每满100减50</span>
        </a>
      </li>
      <li>
        <a href='#'>
            <span class="one"></span>
            <span>万种童书 每满100减50</span>
        </a>
      </li>
      <li>
        <a href='#'>
            <span class="one"></span>
            <span>教育考试 每满100减50</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
.medal3 {
  padding: 20px 0;
  width: 100%;
  height: 178px;
  background: #fff;
  box-sizing: border-box;
}
.medal3_title {
  width: 100%;
  line-height: 25px;
  text-align: center;
  font-size: 20px;
  color: rgb(52, 54, 57);
  font-weight: bold;
  margin-bottom: 10px;
}
.title-l,
.title-r {
    padding: 5px;
}
.medal3_ul li {
    margin: 10px 0;
}
.medal3_ul {
    width: 100%;
    display: inline-block;
    text-align: center;
}
.medal3_ul a {
    color: #343639;
    font-size: 14px;
    padding-right: 5px;
}
.medal3_ul span {
    vertical-align: middle;
}
.medal3_ul a .one {
    display: inline-block;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: black;
    margin-right: 2px;
    transition: all 0.2s;
}
.medal3_ul a:hover {
    color: rgb(154,6,22);
}
.medal3_ul a:hover .one {
    background:  rgb(154,6,22);
    margin-right: 4px;
    display: inline-block;
    width: 1px;
    height: 17px;
    border-radius: 0%;
}
</style>
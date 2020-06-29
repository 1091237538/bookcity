<template>
  <div class="list-show">
    <ul>
      <li
        v-for="(item,index) in bookList"
        :key="index"
        @click="jumpDetails(item,item.id,item.bookName)"
      >
        <a href @click.prevent>
          <img :src="(item.images)" alt />
        </a>
        <p class="price">￥{{item.price}}</p>
        <p class="title">{{item.title}}</p>
        <p class="pl">999+条评论</p>
        <span class="s-l">
          <span class="el-icon-star-off"></span>
          <span>关注</span>
        </span>
        <span class="s-r">
          <span class="el-icon-shopping-cart-full"></span>
          <span>加入购物车</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    books: {
      type: Array
    }
  },
  data() {
    return {
      bookList: null
    };
  },
  watch: {
    books(val) {
      this.bookList = val;
    }
  },
  methods: {
    jumpDetails(item, id, name) {
      sessionStorage.setItem("item", JSON.stringify(item));
      this.$router.push({
        path: "/details",
        query: {
          id: id,
          name1: this.$route.query.name,
          name2: name
        }
      });
    }
  }
};
</script>

<style scoped>
.list-show {
  padding: 10px;
  width: 1400px;
  height: 100%;
  border-top: 2px solid #f1f1f1;
  box-sizing: border-box;
}
.list-show ul {
  display: flex;
  width: 100%;
  height: 100%;
  flex-wrap: wrap;
}
.list-show ul li {
  position: relative;
  width: 240px;
  height: 400px;
  padding: 0px 20px;
  box-sizing: border-box;
  border: 1px solid transparent;
  transition: all 0.3s;
}
.list-show ul li img {
  width: 200px;
  margin-top: 40px;
  margin-bottom: 10px;
}
.list-show ul li:hover {
  border: 1px solid #f1f1f1;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
}
.list-show ul li .price {
  color: #e4393c;
  font-size: 20px;
}
.list-show ul li .title {
  margin-top: 10px;
  height: 15px;
  overflow: hidden;
}
.list-show ul li .pl {
  margin-top: 10px;
  color: #6486cc;
  font-size: 14px;
}
.s-l,
.s-r {
  position: absolute;
  bottom: 10px;
  width: 60px;
  height: 27px;
  line-height: 27px;
  border: 1px solid #666;
  cursor: pointer;
}
.s-l:hover,
.s-r:hover {
  border: 1px solid red;
  color: #e4393c;
}
.s-l {
  left: 10px;
}
.s-r {
  width: 96px;
  left: 74px;
  color: #e4393c;
}
.s-r span,
.s-l span {
  margin-left: 5px;
}
.s-r span:nth-child(1),
.s-l span:nth-child(1) {
  font-size: 18px;
  vertical-align: middle;
}
</style>
<template>
  <div class="booklist">
    <div class="listTop">
      <navtop-show></navtop-show>
    </div>
    <div class="listJump">
      <detail-jump></detail-jump>
    </div>
    <div class="list-bottom">
      <book-hotsale></book-hotsale>
      <div class="list-s">
        <list-show :books="books"></list-show>
      </div>
      <div class="page-bttom">
        <div class="el-icon-arrow-left left" @click="prev"></div>
        <div>{{currentPage}}</div>
        <div class="el-icon-arrow-right right" @click="next"></div>
      </div>
    </div>
  </div>
</template>

<script>
import navtopShow from "views/childView/NavTopShow.vue";
import search from "components/common/search/Search.vue";
import detailJump from "components/content/detailsComponent/details-jump/detailJump.vue";
import bookHotsale from "components/content/book-list/book-Hotsale.vue";
import listShow from "components/content/book-list/list-show.vue";
import { request } from "network/request.js";
import axios from "axios";
export default {
  components: {
    navtopShow,
    search,
    detailJump,
    bookHotsale,
    listShow
  },
  data() {
    return {
      books: null,
      currentPage: "1",
      totalpage: null
    };
  },
  methods: {
    prev() {
      this.currentPage--;
      if (this.currentPage < "1") {
        this.currentPage = "1";
        return;
      }
      axios({
        url: "http://localhost:8080/search",
        params: {
          keyword: this.$route.query.name,
          currentPage: this.currentPage
        }
      }).then(val => {
        this.books = val.data.data.list;
      });
    },
    next() {
      this.currentPage++;
      if (this.currentPage > this.totalpage) {
        this.currentPage = this.totalpage;
        return;
      }
      axios({
        url: "http://localhost:8080/search",
        params: {
          keyword: this.$route.query.name,
          currentPage: this.currentPage
        }
      }).then(val => {
        this.books = val.data.data.list;
      });
    }
  },
  mounted() {
    axios({
      url: "http://localhost:8080/search",
      params: {
        keyword: this.$route.query.name
      }
    }).then(val => {
      this.totalpage = val.data.data.pages;
      if (val == null) {
        return;
      }
      this.books = val.data.data.list;
    });
    request({
      url: "/sku",
      params: {
        cid3: this.$route.query.id
      }
    }).then(val => {
      if (val == null) {
        return;
      }
      this.books = val;
    });
  }
};
</script>

<style scoped>
.booklist {
  width: 100% !important;
}
.listTop {
  width: 100% !important;
  padding: 0 250px;
  background: #e3e4e5;
  box-sizing: border-box;
}
.listJump {
  width: 100% !important;
  padding: 0 250px;
  box-sizing: border-box;
  margin-top: 20px;
  border-bottom: 2px solid red;
}
.list-bottom {
  width: 100% !important;
  position: relative;
  padding: 20px 250px;
  box-sizing: border-box;
}
.list-s {
  margin-top: 20px;
}
.page-bttom {
  position: absolute;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-around;
  bottom: -50px;
  left: 50%;
  width: 200px;
  font-size: 16px;
}
.page-bttom .left,
.page-bttom .right {
  font-size: 30px;
  color: #666666;
  cursor: pointer;
}
</style>
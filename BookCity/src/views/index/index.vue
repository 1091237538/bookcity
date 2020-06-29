<template>
  <div id="index">
    <div class="bannerTop">
      <navtop-show></navtop-show>
    </div>
    <div class="search">
      <search></search>
    </div>
    <bookclass-show ></bookclass-show>
    <bookmore-show></bookmore-show>
    <bottom-page></bottom-page>
  </div>
</template>

<script>
import bookclassShow from "views/childView/BookClassShow.vue";
import bookmoreShow from "views/childView/BookMoreShow.vue";
import bottomPage from "components/common/bottompage/BottomPage.vue";
import navtopShow from "views/childView/NavTopShow.vue";
import search from "components/common/search/Search.vue";
import {request} from 'network/request.js';
export default {
  components: {
    bookclassShow,
    bookmoreShow,
    navtopShow,
    bottomPage,
    search
  },
};
</script>

<style scoped>
#index {
  background: #F4F4F4;
}
.bannerTop {
  width: 100%;
  height: 31px;
  box-sizing: border-box;
  background: #e3e4e5;
  padding: 0 250px;
}
.search {
  width: 100%;
  height: 110px;
  box-sizing: border-box;
  background: #fff;
  border-bottom: 1px solid #e4e4e4;
}
</style>
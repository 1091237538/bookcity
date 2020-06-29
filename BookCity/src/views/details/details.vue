<template>
  <div class="details">
    <div class="details-t">
      <navtopShow></navtopShow>
    </div>
    <div class="details-search">
      <detail-jump class="detailJumpStyle"></detail-jump>
    </div>
    <div class="details-mini">
      <mini-class></mini-class>
    </div>
    <div class="details-bttom">
      <shopping-img></shopping-img>
      <shopping-specs class="specs" :bookdetails="books"></shopping-specs>
      <shopping-details></shopping-details>
    </div>
    <bottomPage></bottomPage>
  </div>
</template>

<script>
import navtopShow from "views/childView/NavTopShow.vue";
import search from "components/common/search/Search.vue";
import detailJump from "components/content/detailsComponent/details-jump/detailJump.vue";
import miniClass from "components/content/detailsComponent/details-miniClass/miniClass.vue";
import shoppingImg from "components/content/detailsComponent/details-shopping/shoppingImg.vue";
import shoppingSpecs from "components/content/detailsComponent/details-shopping/shoppingSpecs.vue";
import shoppingDetails from "components/content/detailsComponent/details-shopping/shoppingDetails.vue";
import bottomPage from "components/common/bottompage/BottomPage.vue";
export default {
  components: {
    navtopShow,
    search,
    detailJump,
    miniClass,
    shoppingImg,
    shoppingSpecs,
    shoppingDetails,
    bottomPage
  },
  data() {
    return {
      books: {}
    };
  },
  mounted() {
    let books = sessionStorage.getItem("item");
    this.books = JSON.parse(books);
  },
 
};
</script>

<style>
.details {
  position: relative;
}
.details-t {
  padding: 0 250px;
  background: #e3e4e5;
}
.details-search {
  position: relative;
  width: 100%;
  height: 100px;
  background: #fff;
  border-bottom: 2px solid #f30213;
}
.detailJumpStyle {
  position: absolute;
  bottom: 0;
  padding: 0 350px;
  box-sizing: border-box;
}
.details-mini {
  height: 40px;
  line-height: 40px;
  padding: 0 350px;
}
.details-bttom {
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 10px 350px;
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
}
.specs {
  margin-left: 20px;
}
</style>
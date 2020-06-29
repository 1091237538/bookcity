<template>
  <div>
    <book-class>
      <book-switch slot="bookSwitch">
        <imgtitle slot="ImgTitle">
          <img
            src="https://img14.360buyimg.com/aotucms/jfs/t1/97222/25/11699/21251/5e3c1805Ece11c691/5d4c80472c189074.jpg.webp"
          />
        </imgtitle>
      </book-switch>
      <book-switch slot="bookSwitch">
        <imgtitle slot="ImgTitle">
          <img
            src="https://img12.360buyimg.com/aotucms/jfs/t1/94247/3/11806/19924/5e3c1814E1a2dc86f/546372f279df549b.jpg.webp"
          />
        </imgtitle>
      </book-switch>
    </book-class>
  </div>
</template>

<script>
import bookClass from "components/content/books-class/bookClass.vue";
import imgtitle from "components/content/book-switch/BookTitle/booktitle.vue";
import bookSwitch from "components/content/book-switch/bookSwitch.vue";
export default {
  components: {
    bookClass,
    imgtitle,
    bookSwitch
  }

};
</script>

<style>
</style>
<template>
  <div>
    <book-more>
      <imgtitle slot="moreTitle">
        <img
          src="https://img20.360buyimg.com/aotucms/jfs/t1/93096/13/12077/27975/5e41179eE621463b7/49b60db257b8d7d5.jpg"
          alt
        />
      </imgtitle>
      <morel slot="moreL">
        <img
          src="https://img12.360buyimg.com/babel/jfs/t1/88644/34/10530/181052/5e1e8399Eefd88ea3/92804fa318090edf.png.webp"
          alt
        />
      </morel>
    </book-more>
    <book-more>
      <imgtitle slot="moreTitle">
        <img
          src="https://img12.360buyimg.com/aotucms/jfs/t1/99974/29/11889/28355/5e4117c1E74014c6a/bd1c17978258ae58.jpg"
          alt
        />
      </imgtitle>
      <morel slot="moreL">
        <img
          src="https://img14.360buyimg.com/babel/jfs/t1/106519/4/10725/168892/5e1ea7d6E7a42aceb/ebe10cf74e790c79.png.webp"
          alt
        />
      </morel>
    </book-more>
  </div>
</template>

<script>
import bookMore from "components/content/book-more/bookMore.vue";
import imgtitle from "components/content/book-switch/BookTitle/booktitle.vue";
import morel from "components/content/book-more/more_l/moreL.vue";
export default {
  components: {
    bookMore,
    imgtitle,
    morel
  }
};
</script>

<style>
</style>
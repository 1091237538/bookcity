<template>
  <div class="bookSwitch">
    <slot name='ImgTitle'></slot>
    <bookbanner></bookbanner>
  </div>
</template>

<script>

import bookbanner from 'components/content/book-switch/BookBanner/bookbanner.vue';
export default {
  components:{
    bookbanner,
  }
}
</script>

<style>
.bookSwitch {
  width: 940px;
  height: 364px;
}
</style>
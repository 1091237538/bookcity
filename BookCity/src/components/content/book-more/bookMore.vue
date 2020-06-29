<template>
  <div class="bookMore">
      <slot name="moreTitle"></slot>
      <slot name="moreL"></slot>
      <morec></morec>
      <morer-t></morer-t>
      <morer-b></morer-b>
  </div>
</template>

<script>
import morec from 'components/content/book-more/more_c/moreC.vue';
import morerT from 'components/content/book-more/more_r/moreRT.vue';
import morerB from 'components/content/book-more/more_r/moreRB.vue';
export default {
    components:{
        morec,
        morerT,
        morerB
    }
};
</script>

<style>
.bookMore {
  position: relative;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  width: 1190px;
  height: 565px;
  box-sizing: border-box;
  overflow: hidden;
}
</style>
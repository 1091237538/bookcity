<template>
  <div>
    <div class="books-class">
      <div class="class-l">
        <leftSort :class1List="class1"></leftSort>
      </div>
      <div class="class-rmax">
        <div class="class-c">
          <tabcontrol></tabcontrol>
          <rotate></rotate>
          <bookgo></bookgo>
        </div>
        <div class="class-r">
          <medal1></medal1>
          <medal2></medal2>
          <medal3></medal3>
        </div>
        <div class="class-b">
          <slot name="bookSwitch"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tabcontrol from "components/content/books-class/TabControl/tabcontrol.vue";
import rotate from "components/content/books-class/Rotate/rotate.vue";
import bookgo from "components/content/books-class/BookGo/bookgo.vue";
import medal1 from "components/content/books-class/Medal/medal1.vue";
import medal2 from "components/content/books-class/Medal/medal2.vue";
import medal3 from "components/content/books-class/Medal/medal3.vue";
import leftSort from "components/content/books-class/leftSort/leftSort.vue";
import { class1 } from "network/index.js";
export default {
  components: {
    tabcontrol,
    rotate,
    bookgo,
    medal1,
    medal2,
    medal3,
    leftSort
  },
  data() {
    return {
      class1: []
    };
  },
  mounted() {
    class1.then(val => {
      this.class1 = val
    });
  }
};
</script>

<style>
.books-class {
  position: relative;
  width: 1190px;
  height: 1250px;
  left: 50%;
  transform: translateX(-50%);
  box-sizing: border-box;
}
.class-rmax {
  width: 950px;
  height: 100%;
  margin-left: 240px;
}
.class-l,
.class-c,
.class-r {
  position: absolute;
  top: 0;
  height: 100%;
}
.class-b {
  position: absolute;
  margin-left: 10px;
  top: 510px;
}
.class-l {
  width: 240px;
}
.class-c {
  width: 750px;
  left: 250px;
}
.class-r {
  width: 190px;
  height: 510px;
  right: 0;
}
</style>
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  beforeUpdate() {
    document.title = this.$router.history.current.meta.title;
  },
  beforeDestroy() {
    sessionStorage.removeItem("item");
  }
};
</script>
<style>
@import url("assets/css/base.css");
</style>

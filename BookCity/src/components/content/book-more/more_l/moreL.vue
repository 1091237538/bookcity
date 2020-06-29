<template>
  <div class="moreL">
    <a href='#'>
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style>
.moreL {
  position: absolute;
  left: 0;
  width: 230px;
  height: 515px;
}
.moreL img {
  max-width: 100%;
}
</style>
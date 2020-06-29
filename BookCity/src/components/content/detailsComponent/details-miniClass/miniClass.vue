<template>
  <div class="miniClass">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item>{{$route.query.name1}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{$route.query.name2}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
};
</script>

<style>
.el-breadcrumb {
    line-height: 3;
}
</style>
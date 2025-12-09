<template>
  <div class="nav-header">
    <!-- 左侧 -->
    <div class="nav-header-left">
      <p>樱子小姐's dog</p>
      <el-link type="primary" :underline="false" href="/dmhy"> dmhy </el-link>
      <el-link type="primary" :underline="false" href="" target="_blank">qBittorrent</el-link>
    </div>
    <!-- 右侧 -->
    <div class="nav-header-right">
      <el-button type="primary">emby</el-button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.nav-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-header-left {
  display: flex;
  align-items: center;
  gap: 20px;
}
.nav-header-right {
  display: flex;
  align-items: center;
}
</style>

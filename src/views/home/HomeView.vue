<template>
  <div class="common-layout">
    <el-container>
      <!-- 导航栏 -->
      <el-header height="30px">
        <HeaderComponent />
      </el-header>
      <router-view />
    </el-container>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from '@/component/header/HeaderComponent.vue'
</script>

<style scoped lang="scss">
.nav-aside {
  background-color: #156b85;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-main {
  background-color: #6fc012;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-footer {
  background-color: #52094c;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>

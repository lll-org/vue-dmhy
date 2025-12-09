<template>
  <div class="common-layout">
    <el-container>
      <!-- 导航栏 -->
      <el-header height="30px">
        <HeaderComponent />
      </el-header>

      <el-container>
        <!-- 侧边栏 -->
        <el-aside width="200px" class="nav-aside">Aside</el-aside>
        <el-container>
          <!-- 主内容 -->
          <el-main class="nav-main">Main</el-main>
          <!-- 底部 -->
          <el-footer class="nav-footer">Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from '@/component/home/HeaderComponent.vue'
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

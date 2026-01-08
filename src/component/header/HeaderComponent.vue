<template>
  <div class="nav-header">
    <!-- 左侧 -->
    <div class="nav-header-left">
      <p>樱子小姐's dog</p>
      <router-link to="/dmhy">dmhy</router-link>
      <el-link type="primary" :underline="false" href="" target="_blank">qBittorrent</el-link>
    </div>
    <!-- 右侧 -->
    <div class="nav-header-right">
      <el-button type="primary" @click="loginHandle">login</el-button>
      <el-button type="primary" @click="userInfoHandle">{{
        userInfoStore.userInfo.username
      }}</el-button>
      <el-button type="primary" @click="logoutHandle">logout</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getUserInfo } from '@/api/header'
import { useUserInfoStore } from '@/stores/userInfo'
import { ElMessage } from 'element-plus'

const userInfoStore = useUserInfoStore()

const loginHandle = () => {
  window.location.href = '/oauth2/authorization/oidc-client'
}

// onMounted(async () => {
//   await userInfoHandle()
// })

const userInfoHandle = async () => {
  const res = await getUserInfo()
  if (res.code === 200) {
    userInfoStore.setUserInfo(res.data)
  } else {
    ElMessage.error(res.message)
  }
}

// 这里之所以使用fetch而不是axios，是因为axios的默认由api前缀，这里请求网关/logout，不需要api前缀
const logoutHandle = async () => {
  const redirect = window.location.pathname + window.location.search

  fetch(`/logout?redirect=${encodeURIComponent(redirect)}`, {
    method: 'POST',
    credentials: 'include',
  }).then((res) => {
    if (res.redirected) {
      window.location.href = res.url
    }
  })
}
</script>

<style scoped lang="scss">
.nav-header {
  display: flex;
  width: 1450px;
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

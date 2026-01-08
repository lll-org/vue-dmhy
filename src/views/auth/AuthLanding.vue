<template>
  <div>
    <el-button>test</el-button>
    认证成功, 正在跳转...
    <el-link href="/">点击跳转到首页</el-link>
  </div>
</template>

<script setup lang="ts">
import { getUserInfo } from '@/api/header'
import { useUserInfoStore } from '@/stores/userInfo'
import { onMounted } from 'vue'

const userInfoStore = useUserInfoStore()

onMounted(async () => {
  const res = await getUserInfo()
  if (res.code === 200) {
    console.log(res.data)
    userInfoStore.setUserInfo(res.data)
  }

  const postLoginUrl = sessionStorage.getItem('post_login_url')
  sessionStorage.removeItem('post_login_url')
  sessionStorage.removeItem('auth_redirecting')
  if (postLoginUrl) {
    window.location.href = postLoginUrl
  } else {
    window.location.href = '/'
  }
})
</script>

<style scoped lang="scss"></style>

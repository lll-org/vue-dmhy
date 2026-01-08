import type { UserInfo } from '@/api/header/type'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserInfoStore = defineStore('userInfo', () => {
  const userInfo = ref<UserInfo>({
    username: '游客',
  })

  const setUserInfo = (newUserInfo: UserInfo) => {
    Object.assign(userInfo.value, newUserInfo)
    // userInfo.value.username = newUserInfo.username
  }

  return { userInfo, setUserInfo }
})

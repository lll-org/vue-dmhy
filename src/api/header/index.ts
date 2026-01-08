import request from '@/utils/request'
import type { GeneralResponse } from '../generalType'
import type { UserInfo } from './type'

enum API {
  USER_INFO_URL = 'lll/user/userInfo',
}

export function getUserInfo() {
  return request.get<null, GeneralResponse<UserInfo>>(API.USER_INFO_URL)
}



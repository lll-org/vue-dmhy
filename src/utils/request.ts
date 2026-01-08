import axios from 'axios'

const LOGIN_URL = 'http://localhost:10075/oauth2/authorization/oidc-client'
const REDIRECT_KEY = 'post_login_url'
const REDIRECTING_KEY = 'auth_redirecting'
const REDIRECT_TTL_MS = 10_000 // 10秒

function isRedirecting() {
  const until = Number(sessionStorage.getItem(REDIRECTING_KEY) || 0)
  return Date.now() < until
}

function setRedirecting() {
  sessionStorage.setItem(REDIRECTING_KEY, String(Date.now() + REDIRECT_TTL_MS))
}

const request = axios.create({
  baseURL: '/api',
  timeout: 30000,
})
request.interceptors.request.use(
  (config) => {
    console.log('request ' + config.url)
    return config
  },
  (error) => {
    console.log('request error!')
    return Promise.reject(error)
  },
)
request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    const status = error?.response?.status
    const url = error?.config?.url || ''

    // 不拦截登录相关请求，避免递归
    if (url.startsWith('/login/oauth2') || url.startsWith('/oauth2/')) {
      return Promise.reject(error)
    }
    // 401 未授权
    // 跳转登录
    if (status === 401) {
      // 避免并发401重复跳转
      if (!isRedirecting()) {
        setRedirecting()
        sessionStorage.setItem(REDIRECT_KEY, window.location.href)
        window.location.href = LOGIN_URL
      }
      return Promise.reject(error)
    }
    return Promise.reject(error)
  },
)
export default request

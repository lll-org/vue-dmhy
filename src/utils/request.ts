import axios from 'axios'

const request = axios.create({
  baseURL: '/api',
  timeout: 30000,
})
request.interceptors.request.use(
  (config) => {
    console.log('request ' + config.url)
    return config
  },
  (config) => {
    console.log('request ' + config.url + 'error!')
    return config
  },
)
request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    console.log(error)
    return Promise.reject(error)
  },
)
export default request

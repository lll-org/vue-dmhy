import axios from 'axios'

const fileRequest = axios.create({
  baseURL: '/api',
  timeout: 30000,
})

export default fileRequest

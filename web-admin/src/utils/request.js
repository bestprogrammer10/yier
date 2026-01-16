import axios from 'axios'
import { Message } from 'element-ui'
import router from '@/router'
import store from '@/store'

/**
 * 请求拦截器配置
 * 遵循 KISS 原则：简洁的请求封装
 */
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API || 'http://localhost:8080/api',
  timeout: 10000
})

// 请求拦截器
service.interceptors.request.use(
  config => {
    // 添加 token（Sa-Token）
    const token = localStorage.getItem('token')
    if (token) {
      config.headers['satoken'] = token  // Sa-Token 默认使用 satoken 字段
    }
    return config
  },
  error => {
    console.error('请求错误:', error)
    return Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    const res = response.data

    // 业务状态码处理
    if (res.code !== 200) {
      Message.error(res.message || '请求失败')

      // 1101 未授权，跳转到登录页
      if (res.code === 1101) {
        store.dispatch('logout')
        router.push('/login')
      }

      return Promise.reject(new Error(res.message || '请求失败'))
    }

    return res
  },
  error => {
    console.error('响应错误:', error)
    Message.error(error.message || '网络错误')
    return Promise.reject(error)
  }
)

export default service

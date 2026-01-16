import request from '@/utils/request'

/**
 * 用户相关 API
 * 遵循 SOLID 原则：接口隔离，按业务模块划分
 */
export function phoneLogin(data) {
  return request({
    url: '/user/login/phone',
    method: 'post',
    data
  })
}

export function getUserInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}

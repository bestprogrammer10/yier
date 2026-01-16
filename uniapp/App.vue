<script>
/**
 * 智记账小程序入口文件
 * 遵循 SOLID 原则：单一职责，专注于应用级别的初始化
 */

import { request, app } from './utils/request';

export default {
  onLaunch() {
    console.log('智记账小程序启动');

    // 获取系统信息
    this.getSystemInfo();

    // 检查登录状态
    this.checkLoginStatus();

    // 初始化全局配置
    this.initAppConfig();
  },

  /**
   * 获取系统信息
   */
  getSystemInfo() {
    try {
      const systemInfo = uni.getSystemInfoSync();
      app.globalData.systemInfo = systemInfo;
      console.log('系统信息:', systemInfo);
    } catch (error) {
      console.error('获取系统信息失败:', error);
    }
  },

  /**
   * 检查登录状态
   */
  checkLoginStatus() {
    // 从本地存储获取token
    const token = uni.getStorageSync('token');
    if (token) {
      app.globalData.token = token;
      console.log('已检测到登录状态');
    }
  },

  /**
   * 初始化应用配置
   */
  initAppConfig() {
    // 设置请求超时时间
    uni.request({
      timeout: 10000
    });
  },

  /**
   * 全局登录方法
   */
  globalLogin() {
    return new Promise((resolve, reject) => {
      uni.login({
        success: (res) => {
          if (res.code) {
            // 这里应该调用后端API换取token
            console.log('登录code:', res.code);
            resolve(res.code);
          } else {
            reject(new Error('登录失败：' + res.errMsg));
          }
        },
        fail: reject
      });
    });
  }
}
</script>

<style>
/**
 * 全局样式文件
 * 遵循 KISS 原则：只定义必要的全局样式
 */

/* 每一个页面都有的公共css放在这里 */
@import url("@/static/css/common.css");

page {
  background-color: #0F172A;
  color: #FFFFFF;
}
</style>

/**
 * 小程序全局入口文件
 * 遵循 SOLID 原则：单一职责，专注于应用级别的初始化
 */

App({
  /**
   * 全局数据
   */
  globalData: {
    userInfo: null,
    token: null,
    systemInfo: null
  },

  /**
   * 小程序初始化
   */
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
      const systemInfo = wx.getSystemInfoSync();
      this.globalData.systemInfo = systemInfo;
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
    const token = wx.getStorageSync('token');
    if (token) {
      this.globalData.token = token;
      console.log('已检测到登录状态');
    }
  },

  /**
   * 初始化应用配置
   */
  initAppConfig() {
    // 设置请求超时时间
    wx.request({
      timeout: 10000
    });
  },

  /**
   * 全局登录方法
   */
  globalLogin() {
    return new Promise((resolve, reject) => {
      wx.login({
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
  },

  /**
   * 设置用户信息
   */
  setUserInfo(userInfo) {
    this.globalData.userInfo = userInfo;
    wx.setStorageSync('userInfo', userInfo);
  },

  /**
   * 设置token
   */
  setToken(token) {
    this.globalData.token = token;
    wx.setStorageSync('token', token);
  },

  /**
   * 退出登录
   */
  logout() {
    this.globalData.userInfo = null;
    this.globalData.token = null;
    wx.removeStorageSync('token');
    wx.removeStorageSync('userInfo');
  },

  /**
   * 全局错误处理
   */
  onError(error) {
    console.error('全局错误:', error);
    // 可以在这里上报错误到监控平台
  },

  /**
   * 页面不存在处理
   */
  onPageNotFound(res) {
    console.log('页面不存在:', res);
    wx.redirectTo({
      url: '/pages/login/login'
    });
  }
});
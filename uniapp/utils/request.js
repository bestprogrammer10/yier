/**
 * 网络请求封装 - uniapp 版本
 * 遵循 SOLID 原则：单一职责，接口隔离
 */

const app = {
  globalData: {
    userInfo: null,
    token: null,
    systemInfo: null
  },
  getUserInfo() {
    return this.globalData.userInfo;
  },
  setUserInfo(userInfo) {
    this.globalData.userInfo = userInfo;
    uni.setStorageSync('userInfo', userInfo);
  },
  getToken() {
    return this.globalData.token || uni.getStorageSync('token');
  },
  setToken(token) {
    this.globalData.token = token;
    uni.setStorageSync('token', token);
  }
};

/**
 * 基础请求配置
 */
const BASE_CONFIG = {
  baseURL: 'http://localhost:8080/api', // 后端 API 地址
  timeout: 10000,
  header: {
    'Content-Type': 'application/json'
  }
};

/**
 * 请求类
 */
class Request {
  constructor(config = {}) {
    this.baseURL = config.baseURL || BASE_CONFIG.baseURL;
    this.timeout = config.timeout || BASE_CONFIG.timeout;
    this.header = { ...BASE_CONFIG.header, ...config.header };
  }

  /**
   * 请求拦截器
   */
  interceptors = {
    request: (config) => {
      // 添加 token（Sa-Token）
      const token = app.getToken();
      if (token) {
        config.header = {
          ...config.header,
          'satoken': token  // Sa-Token 默认使用 satoken 字段
        };
      }

      // 添加请求ID（用于调试）
      config.header['X-Request-ID'] = this.generateRequestId();

      console.log('请求拦截器:', config);
      return config;
    },

    response: (response) => {
      console.log('响应拦截器:', response);

      // 统一错误处理
      if (response.statusCode !== 200) {
        return Promise.reject(new Error(`HTTP ${response.statusCode}: ${response.errMsg || '请求失败'}`));
      }

      const data = response.data;

      // 业务状态码处理
      if (data.code !== 200) {
        // token过期处理 (兼容 Sa-Token 401 和自定义 1101)
        if (data.code === 401 || data.code === 1101) {
          this.handleTokenExpired();
          return Promise.reject(new Error('登录已过期，请重新登录'));
        }

        return Promise.reject(new Error(data.message || '业务处理失败'));
      }

      return data.data || data.result || data;
    }
  };

  /**
   * 生成请求ID
   */
  generateRequestId() {
    return `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  }

  /**
   * 处理token过期
   */
  handleTokenExpired() {
    uni.removeStorageSync('token');
    app.globalData.token = null;

    uni.showModal({
      title: '登录过期',
      content: '您的登录已过期，请重新登录',
      showCancel: false,
      success: () => {
        uni.reLaunch({
          url: '/pages/login/login'
        });
      }
    });
  }

  /**
   * 核心请求方法
   */
  request(options) {
    return new Promise((resolve, reject) => {
      // 合并配置
      const config = {
        url: options.url,
        method: options.method || 'GET',
        data: options.data || {},
        header: { ...this.header, ...options.header },
        timeout: options.timeout || this.timeout
      };

      // 处理完整URL
      if (!config.url.startsWith('http')) {
        config.url = this.baseURL + config.url;
      }

      // 请求拦截器
      try {
        const interceptedConfig = this.interceptors.request(config);
        Object.assign(config, interceptedConfig);
      } catch (error) {
        return reject(error);
      }

      // 发送请求
      uni.request({
        url: config.url,
        method: config.method,
        data: config.data,
        header: config.header,
        timeout: config.timeout,
        success: (res) => {
          try {
            const result = this.interceptors.response(res);
            resolve(result);
          } catch (error) {
            reject(error);
          }
        },
        fail: (error) => {
          console.error('请求失败:', error);
          reject(new Error(error.errMsg || '网络请求失败'));
        }
      });
    });
  }

  /**
   * GET请求
   */
  get(url, params = {}, options = {}) {
    // 将参数拼接到URL
    const queryString = Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');

    const fullURL = queryString ? `${url}?${queryString}` : url;

    return this.request({
      url: fullURL,
      method: 'GET',
      ...options
    });
  }

  /**
   * POST请求
   */
  post(url, data = {}, options = {}) {
    return this.request({
      url,
      method: 'POST',
      data,
      ...options
    });
  }

  /**
   * PUT请求
   */
  put(url, data = {}, options = {}) {
    return this.request({
      url,
      method: 'PUT',
      data,
      ...options
    });
  }

  /**
   * DELETE请求
   */
  delete(url, params = {}, options = {}) {
    const queryString = Object.keys(params)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
      .join('&');

    const fullURL = queryString ? `${url}?${queryString}` : url;

    return this.request({
      url: fullURL,
      method: 'DELETE',
      ...options
    });
  }

  /**
   * 上传文件
   */
  upload(url, filePath, name = 'file', formData = {}) {
    return new Promise((resolve, reject) => {
      const config = this.interceptors.request({
        url: this.baseURL + url,
        header: this.header
      });

      uni.uploadFile({
        url: config.url,
        filePath,
        name,
        formData,
        header: config.header,
        success: (res) => {
          try {
            const data = JSON.parse(res.data);
            const result = this.interceptors.response({
              statusCode: res.statusCode,
              data: data
            });
            resolve(result);
          } catch (error) {
            reject(error);
          }
        },
        fail: reject
      });
    });
  }

  /**
   * 下载文件
   */
  download(url) {
    return new Promise((resolve, reject) => {
      const config = this.interceptors.request({
        url: this.baseURL + url,
        header: this.header
      });

      uni.downloadFile({
        url: config.url,
        header: config.header,
        success: (res) => {
          if (res.statusCode === 200) {
            resolve(res.tempFilePath);
          } else {
            reject(new Error(`下载失败: ${res.statusCode}`));
          }
        },
        fail: reject
      });
    });
  }
}

// 创建单例实例
const request = new Request();

// 导出实例和类（方便扩展）
export {
  request,
  Request,
  app
};

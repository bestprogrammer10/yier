/**
 * 记账小程序登录页面逻辑
 * 遵循 SOLID 原则：单一职责，易于维护
 */

Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 登录方式切换
    activeTab: 'wechat', // 'wechat' | 'phone'

    // 手机号登录相关
    phone: '',
    code: '',
    codeText: '获取验证码',
    canSendCode: false,
    canLogin: false,
    countdown: 60,
    timer: null,

    // 状态控制
    loading: false,
    privacyAgreed: true,

    // Toast 提示
    toast: {
      show: false,
      message: ''
    }
  },

  /**
   * 切换登录方式
   */
  switchTab(e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      activeTab: tab
    });
  },

  /**
   * 手机号输入处理
   */
  handlePhoneInput(e) {
    const phone = e.detail.value.trim();
    this.setData({
      phone: phone
    });
    this.validateForm();
  },

  /**
   * 验证码输入处理
   */
  handleCodeInput(e) {
    const code = e.detail.value.trim();
    this.setData({
      code: code
    });
    this.validateForm();
  },

  /**
   * 清空手机号
   */
  clearPhone() {
    this.setData({
      phone: ''
    });
    this.validateForm();
  },

  /**
   * 表单验证
   */
  validateForm() {
    const { phone, code, privacyAgreed } = this.data;

    // 验证码按钮状态
    const canSendCode = this.validatePhone(phone);

    // 登录按钮状态
    const canLogin = canSendCode && code.length === 6 && privacyAgreed;

    this.setData({
      canSendCode: canSendCode,
      canLogin: canLogin
    });
  },

  /**
   * 验证手机号格式
   */
  validatePhone(phone) {
    return /^1[3-9]\d{9}$/.test(phone);
  },

  /**
   * 发送验证码
   */
  async sendCode() {
    if (!this.data.canSendCode) {
      this.showToast('请输入正确的手机号');
      return;
    }

    // 模拟发送验证码
    this.setData({
      loading: true
    });

    try {
      // 这里应该调用真实的API
      await this.mockSendCodeAPI();

      this.showToast('验证码已发送');
      this.startCountdown();

    } catch (error) {
      this.showToast('发送失败，请重试');
    } finally {
      this.setData({
        loading: false
      });
    }
  },

  /**
   * 模拟验证码发送API
   */
  mockSendCodeAPI() {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`验证码已发送至: ${this.data.phone}`);
        resolve();
      }, 1000);
    });
  },

  /**
   * 开始倒计时
   */
  startCountdown() {
    let countdown = 60;

    this.setData({
      canSendCode: false,
      codeText: `${countdown}s`
    });

    const timer = setInterval(() => {
      countdown--;

      if (countdown <= 0) {
        clearInterval(timer);
        this.setData({
          canSendCode: true,
          codeText: '获取验证码',
          timer: null
        });
      } else {
        this.setData({
          codeText: `${countdown}s`
        });
      }
    }, 1000);

    this.setData({ timer });
  },

  /**
   * 隐私协议切换
   */
  togglePrivacy(e) {
    const checked = e.detail.value.length > 0;
    this.setData({
      privacyAgreed: checked
    });
    this.validateForm();
  },

  /**
   * 微信登录处理
   */
  async handleWechatLogin(e) {
    if (!this.data.privacyAgreed) {
      this.showToast('请先同意隐私协议');
      return;
    }

    this.setData({ loading: true });

    try {
      // 获取用户信息
      const userInfo = e.detail.userInfo;

      if (!userInfo) {
        this.showToast('需要授权才能继续');
        return;
      }

      // 模拟微信登录流程
      await this.mockWechatLogin(userInfo);

      this.showToast('登录成功');

      // 延迟跳转，让用户看到成功提示
      setTimeout(() => {
        this.navigateToHome();
      }, 1000);

    } catch (error) {
      this.showToast('登录失败，请重试');
    } finally {
      this.setData({ loading: false });
    }
  },

  /**
   * 手机号登录处理
   */
  async handlePhoneLogin() {
    if (!this.data.canLogin) {
      return;
    }

    this.setData({ loading: true });

    try {
      // 模拟手机号登录API
      await this.mockPhoneLoginAPI();

      this.showToast('登录成功');

      // 延迟跳转
      setTimeout(() => {
        this.navigateToHome();
      }, 1000);

    } catch (error) {
      this.showToast('登录失败，请检查验证码');
    } finally {
      this.setData({ loading: false });
    }
  },

  /**
   * 模拟微信登录API
   */
  mockWechatLogin(userInfo) {
    return new Promise((resolve) => {
      setTimeout(() => {
        // 模拟登录成功，存储用户信息
        const loginData = {
          openid: 'mock_openid_' + Date.now(),
          sessionKey: 'mock_session_' + Date.now(),
          userInfo: userInfo,
          loginType: 'wechat'
        };

        // 存储到本地（实际项目中应存储到storage）
        console.log('登录数据:', loginData);
        resolve(loginData);
      }, 1500);
    });
  },

  /**
   * 模拟手机号登录API
   */
  mockPhoneLoginAPI() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // 模拟验证：验证码为123456时成功
        if (this.data.code === '123456') {
          const loginData = {
            token: 'mock_token_' + Date.now(),
            userId: 'user_' + Date.now(),
            phone: this.data.phone,
            loginType: 'phone'
          };
          console.log('登录数据:', loginData);
          resolve(loginData);
        } else {
          reject(new Error('验证码错误'));
        }
      }, 1500);
    });
  },

  /**
   * 跳转到首页
   */
  navigateToHome() {
    // 清理定时器
    if (this.data.timer) {
      clearInterval(this.data.timer);
    }

    // 跳转到首页（实际项目中应替换为真实路径）
    wx.reLaunch({
      url: '/pages/index/index',
      success: () => {
        console.log('跳转成功');
      },
      fail: (err) => {
        console.error('跳转失败:', err);
        // 如果首页不存在，创建一个临时的
        this.createTempHomePage();
      }
    });
  },

  /**
   * 创建临时首页（用于演示）
   */
  createTempHomePage() {
    // 在实际项目中，这个应该是一个真实的页面
    this.showToast('欢迎使用智记账！');
  },

  /**
   * 显示隐私协议
   */
  showPrivacy() {
    this.showToast('隐私协议内容...');
    // 实际项目中跳转到协议页面
  },

  /**
   * 显示用户协议
   */
  showPolicy() {
    this.showToast('用户协议内容...');
    // 实际项目中跳转到协议页面
  },

  /**
   * 快速填写（测试用）
   */
  quickFill() {
    this.setData({
      phone: '13800138000',
      code: '123456'
    });
    this.validateForm();
    this.showToast('已自动填充测试数据');
  },

  /**
   * 测试模式（演示用）
   */
  testMode() {
    this.setData({
      activeTab: 'phone',
      phone: '13800138000',
      code: '123456'
    });
    this.validateForm();
    this.showToast('测试模式已启用');
  },

  /**
   * 显示Toast提示
   */
  showToast(message, duration = 2000) {
    this.setData({
      toast: {
        show: true,
        message: message
      }
    });

    setTimeout(() => {
      this.setData({
        toast: {
          show: false,
          message: ''
        }
      });
    }, duration);
  },

  /**
   * 生命周期函数 - 页面加载
   */
  onLoad(options) {
    console.log('登录页面加载', options);

    // 可以在这里检查是否已经登录
    this.checkLoginStatus();
  },

  /**
   * 检查登录状态
   */
  checkLoginStatus() {
    // 实际项目中检查本地存储的token
    // 如果已登录，直接跳转到首页
    // const token = wx.getStorageSync('token');
    // if (token) {
    //   wx.reLaunch({ url: '/pages/index/index' });
    // }
  },

  /**
   * 生命周期函数 - 页面显示
   */
  onShow() {
    // 每次显示页面时的处理
  },

  /**
   * 生命周期函数 - 页面卸载
   */
  onUnload() {
    // 清理资源
    if (this.data.timer) {
      clearInterval(this.data.timer);
    }
  },

  /**
   * 页面相关事件处理函数 - 用户点击右上角分享
   */
  onShareAppMessage() {
    return {
      title: '智记账 - 让每一笔账目都清晰明了',
      path: '/pages/login/login'
    };
  }
});
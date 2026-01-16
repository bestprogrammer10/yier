<template>
  <view class="login-container">
    <!-- 登录方式切换 -->
    <view class="tab-container">
      <view
        class="tab-item"
        :class="{ active: activeTab === 'wechat' }"
        @click="switchTab('wechat')"
      >
        微信登录
      </view>
      <view
        class="tab-item"
        :class="{ active: activeTab === 'phone' }"
        @click="switchTab('phone')"
      >
        手机登录
      </view>
    </view>

    <!-- 微信登录 -->
    <view v-if="activeTab === 'wechat'" class="wechat-login">
      <button
        class="wechat-login-btn"
        open-type="getUserInfo"
        @getuserinfo="handleWechatLogin"
        :disabled="loading || !privacyAgreed"
      >
        <image class="wechat-icon" src="/static/images/wechat.png" mode="aspectFit"></image>
        <text>微信一键登录</text>
      </button>
    </view>

    <!-- 手机号登录 -->
    <view v-if="activeTab === 'phone'" class="phone-login">
      <view class="input-group">
        <view class="input-wrapper">
          <input
            class="input-field"
            v-model="phone"
            placeholder="请输入手机号"
            type="number"
            maxlength="11"
            @input="handlePhoneInput"
          />
          <image
            v-if="phone"
            class="clear-icon"
            src="/static/images/close.png"
            mode="aspectFit"
            @click="clearPhone"
          ></image>
        </view>
      </view>

      <view class="input-group">
        <view class="input-wrapper">
          <input
            class="input-field"
            v-model="code"
            placeholder="请输入验证码"
            type="number"
            maxlength="6"
            @input="handleCodeInput"
          />
          <button
            class="code-btn"
            :disabled="!canSendCode || countdown > 0"
            @click="sendCode"
          >
            {{ countdown > 0 ? `${countdown}s` : '获取验证码' }}
          </button>
        </view>
      </view>

      <button
        class="login-btn"
        :disabled="!canLogin || loading"
        :loading="loading"
        @click="handlePhoneLogin"
      >
        登录
      </button>
    </view>

    <!-- 隐私协议 -->
    <view class="privacy-agreement">
      <checkbox-group @change="togglePrivacy">
        <label class="agreement-label">
          <checkbox value="agree" :checked="privacyAgreed" />
          <text>我已阅读并同意</text>
          <text class="agreement-link" @click="showPrivacy">《隐私协议》</text>
          <text>和</text>
          <text class="agreement-link" @click="showPolicy">《用户协议》</text>
        </label>
      </checkbox-group>
    </view>

    <!-- 测试按钮 -->
    <view class="test-buttons">
      <button class="test-btn" @click="quickFill">快速填写</button>
      <button class="test-btn" @click="testMode">测试模式</button>
    </view>

    <!-- Toast 提示 -->
  </view>
</template>

<script>
/**
 * 记账小程序登录页面逻辑 - uniapp 版本
 * 遵循 SOLID 原则：单一职责，易于维护
 */

import { request, app } from '@/utils/request';
import { validatePhone } from '@/utils/utils';

export default {
  data() {
    return {
      // 登录方式切换
      activeTab: 'wechat', // 'wechat' | 'phone'

      // 手机号登录相关
      phone: '',
      code: '',
      canSendCode: false,
      canLogin: false,
      countdown: 60,
      timer: null,

      // 状态控制
      loading: false,
      privacyAgreed: true
    };
  },

  methods: {
    /**
     * 切换登录方式
     */
    switchTab(tab) {
      this.activeTab = tab;
    },

    /**
     * 手机号输入处理
     */
    handlePhoneInput(e) {
      this.phone = e.detail.value.trim();
      this.validateForm();
    },

    /**
     * 验证码输入处理
     */
    handleCodeInput(e) {
      this.code = e.detail.value.trim();
      this.validateForm();
    },

    /**
     * 清空手机号
     */
    clearPhone() {
      this.phone = '';
      this.validateForm();
    },

    /**
     * 表单验证
     */
    validateForm() {
      // 验证码按钮状态
      this.canSendCode = validatePhone(this.phone);

      // 登录按钮状态
      this.canLogin = this.canSendCode && this.code.length === 6 && this.privacyAgreed;
    },

    /**
     * 发送验证码
     */
    async sendCode() {
      if (!this.canSendCode) {
        this.showToast('请输入正确的手机号');
        return;
      }

      // 调用后端API发送验证码
      this.loading = true;

      try {
        // 模拟发送验证码
        await this.mockSendCodeAPI();

        this.showToast('验证码已发送');
        this.startCountdown();
      } catch (error) {
        this.showToast('发送失败，请重试');
      } finally {
        this.loading = false;
      }
    },

    /**
     * 模拟验证码发送API
     */
    mockSendCodeAPI() {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(`验证码已发送至: ${this.phone}`);
          resolve();
        }, 1000);
      });
    },

    /**
     * 开始倒计时
     */
    startCountdown() {
      let countdown = 60;
      this.countdown = countdown;

      this.timer = setInterval(() => {
        countdown--;

        if (countdown <= 0) {
          clearInterval(this.timer);
          this.timer = null;
          this.countdown = 0;
        } else {
          this.countdown = countdown;
        }
      }, 1000);
    },

    /**
     * 隐私协议切换
     */
    togglePrivacy(e) {
      this.privacyAgreed = e.detail.value.length > 0;
      this.validateForm();
    },

    /**
     * 微信登录处理
     */
    async handleWechatLogin(e) {
      if (!this.privacyAgreed) {
        this.showToast('请先同意隐私协议');
        return;
      }

      this.loading = true;

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
        this.loading = false;
      }
    },

    /**
     * 手机号登录处理
     */
    async handlePhoneLogin() {
      if (!this.canLogin) {
        return;
      }

      this.loading = true;

      try {
        // 调用后端API
        const result = await request.post('/user/login/phone', {
          phone: this.phone,
          code: this.code
        });

        // 保存token和用户信息
        app.setToken(result.token);
        app.setUserInfo(result.userInfo);

        this.showToast('登录成功');

        // 延迟跳转
        setTimeout(() => {
          this.navigateToHome();
        }, 1000);
      } catch (error) {
        this.showToast('登录失败，请检查验证码');
      } finally {
        this.loading = false;
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
     * 跳转到首页
     */
    navigateToHome() {
      // 清理定时器
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }

      // 跳转到首页
      uni.reLaunch({
        url: '/pages/index/index',
        success: () => {
          console.log('跳转成功');
        },
        fail: (err) => {
          console.error('跳转失败:', err);
        }
      });
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
      this.phone = '13800138000';
      this.code = '123456';
      this.validateForm();
      this.showToast('已自动填充测试数据');
    },

    /**
     * 测试模式（演示用）
     */
    testMode() {
      this.activeTab = 'phone';
      this.phone = '13800138000';
      this.code = '123456';
      this.validateForm();
      this.showToast('测试模式已启用');
    },

    /**
     * 显示Toast提示
     */
    showToast(message) {
      uni.showToast({
        title: message,
        icon: 'none',
        duration: 2000
      });
    }
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
    // const token = uni.getStorageSync('token');
    // if (token) {
    //   uni.reLaunch({ url: '/pages/index/index' });
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
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
};
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  padding: 40rpx;
  background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
}

.tab-container {
  display: flex;
  margin-bottom: 60rpx;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12rpx;
  padding: 8rpx;
}

.tab-item {
  flex: 1;
  text-align: center;
  padding: 24rpx 0;
  color: #94A3B8;
  font-size: 28rpx;
  border-radius: 8rpx;
  transition: all 0.3s;
}

.tab-item.active {
  background: #2E5BFF;
  color: #FFFFFF;
  font-weight: 500;
}

.wechat-login {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wechat-login-btn {
  width: 100%;
  height: 100rpx;
  background: #07C160;
  color: white;
  border-radius: 12rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32rpx;
  margin-top: 40rpx;
}

.wechat-icon {
  width: 48rpx;
  height: 48rpx;
  margin-right: 16rpx;
}

.phone-login {
  padding-top: 40rpx;
}

.input-group {
  margin-bottom: 32rpx;
}

.input-wrapper {
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12rpx;
  padding: 0 24rpx;
  height: 100rpx;
}

.input-field {
  flex: 1;
  height: 100%;
  color: #FFFFFF;
  font-size: 32rpx;
}

.clear-icon {
  width: 32rpx;
  height: 32rpx;
  margin-left: 16rpx;
}

.code-btn {
  margin-left: 16rpx;
  padding: 0 32rpx;
  height: 64rpx;
  background: #2E5BFF;
  color: white;
  border-radius: 8rpx;
  font-size: 24rpx;
  line-height: 64rpx;
}

.login-btn {
  width: 100%;
  height: 100rpx;
  background: #2E5BFF;
  color: white;
  border-radius: 12rpx;
  font-size: 32rpx;
  margin-top: 40rpx;
}

.login-btn:disabled {
  background: #64748B;
}

.privacy-agreement {
  margin-top: 40rpx;
}

.agreement-label {
  display: flex;
  align-items: center;
  color: #94A3B8;
  font-size: 24rpx;
}

.agreement-link {
  color: #2E5BFF;
  margin-left: 8rpx;
}

.test-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 60rpx;
}

.test-btn {
  width: 48%;
  height: 80rpx;
  background: rgba(255, 255, 255, 0.1);
  color: #94A3B8;
  border-radius: 12rpx;
  font-size: 24rpx;
}
</style>

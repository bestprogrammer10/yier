<template>
  <view class="login-container">
    <!-- 可爱的标题区域 -->
    <view class="header-section">
      <view class="avatar-wrapper">
        <image class="avatar-image" src="/static/images/avatar-default.png" mode="aspectFill"></image>
        <view class="avatar-decoration">✨</view>
      </view>
      <text class="main-title">💕 欢迎回来~</text>
      <text class="sub-title">开始记录美好的一天吧</text>
    </view>

    <!-- 登录方式切换 -->
    <view class="tab-container">
      <view
        class="tab-item"
        :class="{ active: activeTab === 'wechat' }"
        @click="switchTab('wechat')"
      >
        <text class="tab-emoji">💬</text>
        <text class="tab-text">微信登录</text>
      </view>
      <view
        class="tab-item"
        :class="{ active: activeTab === 'phone' }"
        @click="switchTab('phone')"
      >
        <text class="tab-emoji">📱</text>
        <text class="tab-text">手机登录</text>
      </view>
    </view>

    <!-- 微信登录 -->
    <view v-if="activeTab === 'wechat'" class="wechat-login">
      <view class="wechat-tips">
        <text class="tips-emoji">💝</text>
        <text class="tips-text">一键授权，快速登录，安全又方便哦~</text>
      </view>

      <button
        class="wechat-login-btn"
        open-type="getUserInfo"
        @getuserinfo="handleWechatLogin"
        :disabled="loading || !privacyAgreed"
      >
        <text class="btn-emoji">💬</text>
        <text>微信一键登录</text>
      </button>
    </view>

    <!-- 手机号登录 -->
    <view v-if="activeTab === 'phone'" class="phone-login">
      <!-- 手机号输入 -->
      <view class="input-group">
        <view class="input-wrapper">
          <text class="input-label">📱 手机号</text>
          <input
            class="input-field"
            v-model="phone"
            placeholder="请输入11位手机号"
            type="number"
            maxlength="11"
            @input="handlePhoneInput"
          />
          <view
            v-if="phone"
            class="clear-btn"
            @click="clearPhone"
          >
            <text>✕</text>
          </view>
        </view>
      </view>

      <!-- 验证码输入 -->
      <view class="input-group">
        <view class="input-wrapper">
          <text class="input-label">🔑 验证码</text>
          <input
            class="input-field"
            v-model="code"
            placeholder="请输入6位验证码"
            type="number"
            maxlength="6"
            @input="handleCodeInput"
          />
          <button
            class="code-btn"
            :disabled="!canSendCode || countdown > 0"
            @click="sendCode"
          >
            <text class="btn-emoji">📨</text>
            <text>{{ countdown > 0 ? `${countdown}s` : '获取验证码' }}</text>
          </button>
        </view>
      </view>

      <!-- 登录按钮 -->
      <button
        class="login-btn"
        :disabled="!canLogin || loading"
        :loading="loading"
        @click="handlePhoneLogin"
      >
        <text class="btn-emoji">🎉</text>
        <text>登录</text>
      </button>
    </view>

    <!-- 隐私协议 -->
    <view class="privacy-agreement">
      <checkbox-group @change="togglePrivacy">
        <label class="agreement-content">
          <checkbox value="agree" :checked="privacyAgreed" color="#FF6B9D" />
          <text class="agreement-text">我已阅读并同意</text>
          <text class="link">《用户协议》</text>
          <text>和</text>
          <text class="link">《隐私协议》</text>
        </label>
      </checkbox-group>
    </view>

    <!-- 装饰元素 -->
    <view class="decoration-icon decoration-top">💫</view>
    <view class="decoration-icon decoration-bottom">☁️</view>
    <view class="floating-icon float-1">🌸</view>
    <view class="floating-icon float-2">⭐</view>

    <!-- 测试按钮 -->
    <view class="test-buttons">
      <button class="test-btn" @click="quickFill">✨ 快速填写</button>
      <button class="test-btn" @click="testMode">🎉 测试模式</button>
    </view>
  </view>
</template>

<script>
/**
 * 温馨可爱的登录页面
 * 设计理念：温馨、可爱、愉悦
 */

import { request, app } from '@/utils/request';
import { validatePhone } from '@/utils/utils';

export default {
  data() {
    return {
      activeTab: 'wechat',
      phone: '',
      code: '',
      canSendCode: false,
      canLogin: false,
      countdown: 60,
      timer: null,
      loading: false,
      privacyAgreed: true
    };
  },

  methods: {
    switchTab(tab) {
      this.activeTab = tab;
    },

    handlePhoneInput(e) {
      this.phone = e.detail.value.trim();
      this.validateForm();
    },

    handleCodeInput(e) {
      this.code = e.detail.value.trim();
      this.validateForm();
    },

    clearPhone() {
      this.phone = '';
      this.validateForm();
    },

    validateForm() {
      this.canSendCode = validatePhone(this.phone);
      this.canLogin = this.canSendCode && this.code.length === 6 && this.privacyAgreed;
    },

    async sendCode() {
      if (!this.canSendCode) {
        this.showToast('请输入正确的手机号');
        return;
      }

      this.loading = true;

      try {
        await this.mockSendCodeAPI();
        this.showToast('验证码已发送~');
        this.startCountdown();
      } catch (error) {
        this.showToast('发送失败，请重试~');
      } finally {
        this.loading = false;
      }
    },

    mockSendCodeAPI() {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(`验证码已发送至: ${this.phone}`);
          resolve();
        }, 1000);
      });
    },

    startCountdown() {
      this.countdown = 60;
      this.timer = setInterval(() => {
        this.countdown--;
        if (this.countdown <= 0) {
          clearInterval(this.timer);
          this.timer = null;
          this.countdown = 0;
        }
      }, 1000);
    },

    togglePrivacy(e) {
      this.privacyAgreed = e.detail.value.length > 0;
      this.validateForm();
    },

    async handleWechatLogin(e) {
      if (!this.privacyAgreed) {
        this.showToast('请先同意隐私协议哦~');
        return;
      }

      this.loading = true;

      try {
        const userInfo = e.detail.userInfo;

        if (!userInfo) {
          this.showToast('需要授权才能继续~');
          return;
        }

        await this.mockWechatLogin(userInfo);

        this.showToast('登录成功啦~');
        setTimeout(() => {
          this.navigateToHome();
        }, 1000);
      } catch (error) {
        this.showToast('登录失败，请重试~');
      } finally {
        this.loading = false;
      }
    },

    async handlePhoneLogin() {
      if (!this.canLogin) {
        return;
      }

      this.loading = true;

      try {
        const result = await request.post('/user/login/phone', {
          phone: this.phone,
          code: this.code
        });

        app.setToken(result.token);
        app.setUserInfo(result.userInfo);

        this.showToast('登录成功啦~');
        setTimeout(() => {
          this.navigateToHome();
        }, 1000);
      } catch (error) {
        this.showToast('登录失败，请检查验证码哦~');
      } finally {
        this.loading = false;
      }
    },

    mockWechatLogin(userInfo) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const loginData = {
            openid: 'mock_openid_' + Date.now(),
            sessionKey: 'mock_session_' + Date.now(),
            userInfo: userInfo,
            loginType: 'wechat'
          };
          console.log('登录数据:', loginData);
          resolve(loginData);
        }, 1500);
      });
    },

    navigateToHome() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
      }
      uni.reLaunch({
        url: '/pages/index/index'
      });
    },

    showPrivacy() {
      this.showToast('隐私协议内容...');
    },

    showPolicy() {
      this.showToast('用户协议内容...');
    },

    quickFill() {
      this.phone = '13800138000';
      this.code = '123456';
      this.validateForm();
      this.showToast('已自动填充测试数据~');
    },

    testMode() {
      this.activeTab = 'phone';
      this.phone = '13800138000';
      this.code = '123456';
      this.validateForm();
      this.showToast('测试模式已启用🎉');
    },

    showToast(message) {
      uni.showToast({
        title: message,
        icon: 'none',
        duration: 2000
      });
    }
  },

  onLoad(options) {
    console.log('登录页面加载', options);
    this.checkLoginStatus();
  },

  checkLoginStatus() {

  },

  onShow() {

  },

  onUnload() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
  }
};
</script>

<style scoped>
/* 
 * 登录页样式优化
 * 风格：温馨、可爱、粉色系
 * 特点：玻璃拟态、柔和渐变、Q弹动画
 */

.login-container {
  min-height: 100vh;
  padding: 80rpx 40rpx;
  /* 优化背景渐变，使其更柔和温馨 */
  background: linear-gradient(180deg, #FFF0F5 0%, #FFDEE9 100%);
  position: relative;
  /* 改为 auto 以防止小屏幕无法滚动，x轴隐藏防止装饰溢出 */
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

/* 背景装饰 - 增加呼吸感 */
.login-container::before {
  content: '';
  position: absolute;
  top: -150rpx;
  left: -100rpx;
  width: 700rpx;
  height: 700rpx;
  background: radial-gradient(circle, rgba(255, 182, 193, 0.4) 0%, transparent 70%);
  filter: blur(60rpx);
  border-radius: 50%;
  animation: breathe 8s infinite ease-in-out;
}

.login-container::after {
  content: '';
  position: absolute;
  bottom: -100rpx;
  right: -80rpx;
  width: 600rpx;
  height: 600rpx;
  background: radial-gradient(circle, rgba(255, 228, 225, 0.6) 0%, transparent 70%);
  filter: blur(50rpx);
  border-radius: 50%;
  animation: breathe 10s infinite ease-in-out reverse;
}

/* 标题区域 - 优化间距和阴影 */
.header-section {
  text-align: center;
  margin-bottom: 80rpx;
  position: relative;
  z-index: 10;
  animation: slideDownFade 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.avatar-wrapper {
  position: relative;
  width: 180rpx;
  height: 180rpx;
  margin: 0 auto 30rpx;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-image {
  width: 160rpx;
  height: 160rpx;
  border-radius: 50%;
  border: 8rpx solid #ffffff;
  /* 增加更柔和的投影 */
  box-shadow: 0 12rpx 36rpx rgba(255, 105, 180, 0.25);
  background: #FFF;
}

.avatar-decoration {
  position: absolute;
  font-size: 52rpx;
  right: -10rpx;
  top: -10rpx;
  /* 修复之前的语法错误，并增加可爱摆动动画 */
  animation: wiggle 3s infinite ease-in-out;
  transform-origin: bottom left;
  filter: drop-shadow(0 4rpx 8rpx rgba(0,0,0,0.1));
}

.main-title {
  display: block;
  font-size: 48rpx;
  font-weight: 800;
  color: #5D4037; /* 暖棕色，比纯黑更温馨 */
  letter-spacing: 2rpx;
  margin-bottom: 16rpx;
  text-shadow: 0 2rpx 4rpx rgba(0,0,0,0.05);
}

.sub-title {
  display: block;
  font-size: 28rpx;
  color: #A68B89;
  letter-spacing: 2rpx;
  font-weight: 500;
}

/* 登录方式切换 - 胶囊样式 */
.tab-container {
  display: flex;
  padding: 8rpx;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50rpx;
  margin: 0 40rpx 60rpx;
  position: relative;
  z-index: 10;
  box-shadow: 0 8rpx 24rpx rgba(200, 200, 200, 0.1);
  border: 2rpx solid rgba(255, 255, 255, 0.8);
  animation: slideUpFade 0.9s cubic-bezier(0.2, 0.8, 0.2, 1);
}

.tab-item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24rpx 0;
  border-radius: 42rpx;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); /* Q弹过渡 */
  position: relative;
}

.tab-emoji {
  font-size: 34rpx;
  margin-right: 12rpx;
  transition: transform 0.3s ease;
}

.tab-text {
  font-size: 28rpx;
  color: #888;
  font-weight: 600;
  transition: color 0.3s ease;
}

.tab-item.active {
  background: #ffffff;
  box-shadow: 0 4rpx 16rpx rgba(255, 107, 153, 0.15);
  transform: scale(1.02);
}

.tab-item.active .tab-text {
  color: #FF6B9D;
}

.tab-item.active .tab-emoji {
  transform: scale(1.2);
}

/* 登录区域 */
.wechat-login, .phone-login {
  padding: 0 20rpx;
  animation: fadeIn 0.5s ease-out;
  width: 100%;
  box-sizing: border-box;
}

.wechat-tips {
  text-align: center;
  margin-bottom: 60rpx;
  background: rgba(255, 255, 255, 0.5);
  padding: 40rpx;
  border-radius: 30rpx;
  border: 4rpx dashed rgba(255, 182, 193, 0.4);
}

.tips-emoji {
  font-size: 48rpx;
  display: block;
  margin-bottom: 20rpx;
  animation: float 3s infinite ease-in-out;
}

.tips-text {
  font-size: 28rpx;
  color: #888;
  line-height: 1.5;
}

/* 输入框样式优化 */
.input-group {
  margin-bottom: 40rpx;
  animation: slideInRight 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) backwards;
}

.input-group:nth-child(2) {
  animation-delay: 0.1s;
}

.input-wrapper {
  display: flex;
  align-items: center;
  background: #ffffff;
  border-radius: 40rpx;
  padding: 0 40rpx;
  height: 120rpx;
  box-shadow: 0 8rpx 30rpx rgba(230, 230, 230, 0.5);
  border: 2rpx solid transparent;
  transition: all 0.3s ease;
}

.input-wrapper:focus-within {
  border-color: #FFB7D2;
  box-shadow: 0 12rpx 36rpx rgba(255, 182, 193, 0.3);
  transform: translateY(-2rpx);
}

.input-label {
  font-size: 28rpx;
  color: #666;
  font-weight: 600;
  width: 160rpx;
  display: flex;
  align-items: center;
}

.input-field {
  flex: 1;
  height: 100%;
  color: #333;
  font-size: 30rpx;
  font-weight: 500;
}

.input-field::placeholder {
  color: #CDCDCD;
}

.clear-btn {
  width: 44rpx;
  height: 44rpx;
  background: #FFF0F5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FF6B9D;
  font-size: 22rpx;
  margin-left: 20rpx;
  transition: all 0.2s;
}

.clear-btn:active {
  background: #FFD1DC;
  transform: scale(0.9);
}

/* 按钮样式优化 */
.code-btn {
  padding: 0 34rpx;
  height: 68rpx;
  line-height: 68rpx;
  background: linear-gradient(135deg, #FF9EC5 0%, #FF6B9D 100%);
  color: white;
  border-radius: 34rpx;
  font-size: 26rpx;
  font-weight: 600;
  margin-left: 20rpx;
  box-shadow: 0 8rpx 20rpx rgba(255, 107, 153, 0.25);
  transition: all 0.3s ease;
  /* 防止按钮被压缩 */
  flex-shrink: 0;
  white-space: nowrap;
}

.code-btn:active {
  transform: scale(0.95);
  box-shadow: 0 4rpx 10rpx rgba(255, 107, 153, 0.2);
}

.code-btn:disabled {
  background: #F0F0F0;
  color: #CCC;
  box-shadow: none;
}

.login-btn, .wechat-login-btn {
  width: 100%;
  height: 110rpx;
  line-height: 110rpx;
  /* 更加高级的渐变色 */
  background: linear-gradient(90deg, #FF8FB1 0%, #FF5C93 100%);
  color: white;
  border-radius: 55rpx;
  font-size: 34rpx;
  font-weight: 700;
  letter-spacing: 4rpx;
  box-shadow: 0 16rpx 40rpx rgba(255, 92, 147, 0.35);
  border: none;
  margin-top: 60rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.login-btn:active, .wechat-login-btn:active {
  transform: scale(0.96) translateY(2rpx);
  box-shadow: 0 6rpx 20rpx rgba(255, 92, 147, 0.25);
}

.login-btn:disabled {
  background: #FFD6E0;
  box-shadow: none;
  opacity: 0.9;
}

.btn-emoji {
  margin-right: 16rpx;
  font-size: 40rpx;
}

/* 隐私协议 */
.privacy-agreement {
  margin-top: 50rpx;
  display: flex;
  justify-content: center;
  padding: 0 20rpx;
}

.agreement-content {
  display: flex;
  align-items: center;
  font-size: 24rpx;
  color: #999;
  flex-wrap: wrap;
  justify-content: center;
}

.agreement-text {
  margin-left: 10rpx;
}

.link {
  color: #FF5C93;
  font-weight: 600;
}

/* 测试按钮 - 设为半透明 */
.test-buttons {
  margin-top: auto;
  padding-top: 40rpx;
  padding-bottom: 30rpx;
  display: flex;
  justify-content: center;
  gap: 30rpx;
  opacity: 0.5;
  transition: opacity 0.3s;
}

.test-buttons:hover {
  opacity: 1;
}

.test-btn {
  font-size: 22rpx;
  background: rgba(255, 255, 255, 0.4);
  color: #FF6B9D;
  padding: 10rpx 30rpx;
  border-radius: 30rpx;
  border: 1rpx solid rgba(255, 107, 153, 0.2);
}

/* 装饰图标优化 */
.decoration-icon, .floating-icon {
  position: absolute;
  pointer-events: none;
  z-index: 1;
}

.decoration-top {
  top: 8%;
  left: 6%;
  font-size: 60rpx;
  opacity: 0.4;
  animation: float 6s ease-in-out infinite;
  filter: blur(2rpx);
}

.decoration-bottom {
  bottom: 12%;
  right: 6%;
  font-size: 80rpx;
  opacity: 0.3;
  animation: float 8s ease-in-out infinite reverse;
  filter: blur(2rpx);
}

.float-1 {
  top: 18%;
  right: 12%;
  font-size: 36rpx;
  opacity: 0.6;
  animation: float 5s ease-in-out infinite 1s;
}

.float-2 {
  top: 35%;
  left: 8%;
  font-size: 44rpx;
  opacity: 0.5;
  animation: float 7s ease-in-out infinite 2s;
}

/* 关键帧动画 */
@keyframes slideDownFade {
  from { opacity: 0; transform: translateY(-40rpx); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideUpFade {
  from { opacity: 0; transform: translateY(40rpx); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideInRight {
  from { opacity: 0; transform: translateX(60rpx); }
  to { opacity: 1; transform: translateX(0); }
}

@keyframes breathe {
  0%, 100% { transform: scale(1); opacity: 0.6; }
  50% { transform: scale(1.1); opacity: 0.4; }
}

@keyframes wiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(15deg); }
  75% { transform: rotate(-15deg); }
}

@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-20rpx) rotate(5deg); }
}
</style>
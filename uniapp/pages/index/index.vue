<template>
  <view class="index-container">
    <!-- 头部 -->
    <view class="header">
      <view class="header-content">
        <text class="title">智记账</text>
        <text class="subtitle">让每一笔账目都清晰明了</text>
      </view>
    </view>

    <!-- 统计卡片 -->
    <view class="stats-card">
      <view class="stats-item">
        <text class="stats-label">本月支出</text>
        <text class="stats-value">¥ 2,356.00</text>
      </view>
      <view class="stats-divider"></view>
      <view class="stats-item">
        <text class="stats-label">本月收入</text>
        <text class="stats-value">¥ 5,800.00</text>
      </view>
    </view>

    <!-- 快捷操作 -->
    <view class="quick-actions">
      <view class="action-item" @click="navigateToRecord">
        <view class="action-icon expense">
          <text class="icon-text">支</text>
        </view>
        <text class="action-label">记支出</text>
      </view>
      <view class="action-item" @click="navigateToRecord">
        <view class="action-icon income">
          <text class="icon-text">收</text>
        </view>
        <text class="action-label">记收入</text>
      </view>
      <view class="action-item">
        <view class="action-icon transfer">
          <text class="icon-text">转</text>
        </view>
        <text class="action-label">转账</text>
      </view>
      <view class="action-item">
        <view class="action-icon analysis">
          <text class="icon-text">分</text>
        </view>
        <text class="action-label">分析</text>
      </view>
    </view>

    <!-- 最近记录 -->
    <view class="recent-records">
      <view class="section-header">
        <text class="section-title">最近记录</text>
        <text class="more-link">更多</text>
      </view>

      <view class="record-list">
        <view class="record-item">
          <view class="record-icon" style="background: #FF6B6B;">
            <text>餐饮</text>
          </view>
          <view class="record-info">
            <text class="record-title">午餐</text>
            <text class="record-date">今天 12:30</text>
          </view>
          <text class="record-amount expense">-¥ 35.00</text>
        </view>

        <view class="record-item">
          <view class="record-icon" style="background: #4ECDC4;">
            <text>交通</text>
          </view>
          <view class="record-info">
            <text class="record-title">地铁</text>
            <text class="record-date">今天 08:15</text>
          </view>
          <text class="record-amount expense">-¥ 5.00</text>
        </view>

        <view class="record-item">
          <view class="record-icon" style="background: #45B7D1;">
            <text>工资</text>
          </view>
          <view class="record-info">
            <text class="record-title">月工资</text>
            <text class="record-date">昨天 10:00</text>
          </view>
          <text class="record-amount income">+¥ 5,800.00</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
/**
 * 首页逻辑
 * 遵循 SOLID 原则：单一职责，仅负责首页展示
 */

export default {
  data() {
    return {
      // 页面数据
    };
  },

  methods: {
    /**
     * 跳转到记账页面
     */
    navigateToRecord() {
      uni.showToast({
        title: '功能开发中',
        icon: 'none'
      });
    }
  },

  /**
   * 生命周期函数 - 页面加载
   */
  onLoad(options) {
    console.log('首页加载', options);
    this.loadData();
  },

  /**
   * 加载数据
   */
  loadData() {
    // TODO: 从后端加载数据
  },

  /**
   * 生命周期函数 - 页面显示
   */
  onShow() {
    // 每次显示页面时刷新数据
  },

  /**
   * 下拉刷新
   */
  onPullDownRefresh() {
    this.loadData();
    setTimeout(() => {
      uni.stopPullDownRefresh();
    }, 1000);
  }
};
</script>

<style scoped>
/* 
 * 首页样式优化
 * 设计理念：温馨、精致、空间感
 * 遵循 KISS 和 SOLID 原则，保持样式独立性
 */

.index-container {
  padding: 30rpx;
  background: linear-gradient(135deg, #FFF0F5 0%, #FFD6E0 50%, #FFC4D6 100%);
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}

/* 背景装饰 - 增加动效 */
.index-container::before {
  content: '';
  position: absolute;
  top: -100rpx;
  right: -100rpx;
  width: 600rpx;
  height: 600rpx;
  background: radial-gradient(circle, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 70%);
  border-radius: 50%;
  animation: float 8s ease-in-out infinite;
  z-index: 0;
}

.index-container::after {
  content: '';
  position: absolute;
  bottom: -50rpx;
  left: -50rpx;
  width: 400rpx;
  height: 400rpx;
  background: radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%);
  border-radius: 50%;
  animation: float 10s ease-in-out infinite reverse;
  z-index: 0;
}

@keyframes float {
  0% { transform: translate(0, 0); }
  50% { transform: translate(20rpx, 20rpx); }
  100% { transform: translate(0, 0); }
}

.header {
  position: relative;
  z-index: 1;
  text-align: center;
  margin: 40rpx 0 60rpx;
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  font-size: 56rpx;
  font-weight: 800;
  color: #6B4F4F;
  margin-bottom: 12rpx;
  letter-spacing: 2rpx;
  text-shadow: 0 4rpx 12rpx rgba(107, 79, 79, 0.1);
}

.subtitle {
  font-size: 26rpx;
  color: #9E8888;
  letter-spacing: 1rpx;
  background: rgba(255,255,255,0.4);
  padding: 6rpx 24rpx;
  border-radius: 30rpx;
}

.stats-card {
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 50rpx 40rpx;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border-radius: 32rpx;
  box-shadow: 0 20rpx 40rpx rgba(255, 158, 197, 0.15), 
              0 0 0 2rpx rgba(255, 255, 255, 0.6) inset;
  margin-bottom: 50rpx;
  transition: transform 0.3s ease;
}

.stats-card:active {
  transform: scale(0.98);
}

.stats-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stats-label {
  font-size: 26rpx;
  color: #9E8888;
  margin-bottom: 16rpx;
}

.stats-value {
  font-size: 44rpx;
  font-weight: 700;
  color: #FF758F;
  font-family: sans-serif;
}

.stats-divider {
  width: 2rpx;
  height: 80rpx;
  background: linear-gradient(to bottom, transparent, #E0E0E0, transparent);
}

.quick-actions {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24rpx;
  margin-bottom: 50rpx;
}

.action-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0; 
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.action-item:active {
  transform: scale(0.9);
}

.action-icon {
  width: 100rpx;
  height: 100rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30rpx;
  color: white;
  font-size: 36rpx;
  font-weight: 600;
  margin-bottom: 16rpx;
  box-shadow: 0 10rpx 20rpx rgba(0,0,0,0.08);
  position: relative;
  overflow: hidden;
}

.action-icon::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 100%);
}

.action-icon.expense {
  background: linear-gradient(135deg, #FF93AC 0%, #FFB7C5 100%);
  box-shadow: 0 12rpx 24rpx rgba(255, 147, 172, 0.3);
}

.action-icon.income {
  background: linear-gradient(135deg, #81F5E6 0%, #A0E7E0 100%);
  box-shadow: 0 12rpx 24rpx rgba(129, 245, 230, 0.3);
}

.action-icon.transfer {
  background: linear-gradient(135deg, #FFD07F 0%, #FFB800 100%);
  box-shadow: 0 12rpx 24rpx rgba(255, 208, 127, 0.3);
}

.action-icon.analysis {
  background: linear-gradient(135deg, #B39DDB 0%, #9575CD 100%);
  box-shadow: 0 12rpx 24rpx rgba(179, 157, 219, 0.3);
}

.action-label {
  font-size: 26rpx;
  color: #6B4F4F;
  font-weight: 500;
}

.recent-records {
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 36rpx;
  padding: 40rpx;
  box-shadow: 0 20rpx 60rpx rgba(0,0,0,0.03);
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30rpx;
}

.section-title {
  font-size: 34rpx;
  font-weight: 700;
  color: #5D4037;
  position: relative;
  padding-left: 20rpx;
}

.section-title::before {
  content: '';
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 8rpx;
  height: 32rpx;
  background: #FF93AC;
  border-radius: 4rpx;
}

.more-link {
  font-size: 26rpx;
  color: #FF93AC;
  padding: 10rpx 20rpx;
  background: rgba(255, 147, 172, 0.1);
  border-radius: 20rpx;
}

.record-list {
  display: flex;
  flex-direction: column;
  gap: 24rpx;
}

.record-item {
  display: flex;
  align-items: center;
  padding: 24rpx;
  background: #FFFFFF;
  border-radius: 24rpx;
  border: 1rpx solid rgba(0,0,0,0.02);
  transition: all 0.2s ease;
}

.record-item:active {
  background: #F8F8F8;
  transform: scale(0.99);
}

.record-icon {
  width: 80rpx;
  height: 80rpx;
  border-radius: 24rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30rpx;
  color: white;
  font-weight: 600;
  margin-right: 24rpx;
  box-shadow: 0 8rpx 16rpx rgba(0,0,0,0.05);
}

.record-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.record-title {
  font-size: 30rpx;
  font-weight: 600;
  color: #444;
  margin-bottom: 8rpx;
}

.record-date {
  font-size: 22rpx;
  color: #AAA;
}

.record-amount {
  font-size: 34rpx;
  font-weight: 700;
}

.record-amount.expense {
  color: #FF758F;
}

.record-amount.income {
  color: #4ECDC4;
}
</style>
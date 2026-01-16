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
.index-container {
  min-height: 100vh;
  background: #0F172A;
  padding: 20rpx;
}

.header {
  padding: 40rpx 0;
}

.header-content {
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 48rpx;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 8rpx;
}

.subtitle {
  font-size: 24rpx;
  color: #94A3B8;
}

.stats-card {
  background: linear-gradient(135deg, #2E5BFF 0%, #1E40AF 100%);
  border-radius: 20rpx;
  padding: 40rpx;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40rpx;
}

.stats-item {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.stats-divider {
  width: 2rpx;
  height: 80rpx;
  background: rgba(255, 255, 255, 0.2);
}

.stats-label {
  font-size: 24rpx;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 16rpx;
}

.stats-value {
  font-size: 36rpx;
  font-weight: 600;
  color: #FFFFFF;
}

.quick-actions {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40rpx;
}

.action-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.action-icon {
  width: 100rpx;
  height: 100rpx;
  border-radius: 20rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16rpx;
}

.action-icon.expense {
  background: #FF6B6B;
}

.action-icon.income {
  background: #07C160;
}

.action-icon.transfer {
  background: #2E5BFF;
}

.action-icon.analysis {
  background: #EAB308;
}

.icon-text {
  font-size: 32rpx;
  font-weight: 600;
  color: #FFFFFF;
}

.action-label {
  font-size: 24rpx;
  color: #94A3B8;
}

.recent-records {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20rpx;
  padding: 32rpx;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24rpx;
}

.section-title {
  font-size: 28rpx;
  font-weight: 500;
  color: #FFFFFF;
}

.more-link {
  font-size: 24rpx;
  color: #2E5BFF;
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
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16rpx;
}

.record-icon {
  width: 64rpx;
  height: 64rpx;
  border-radius: 12rpx;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24rpx;
  font-size: 24rpx;
  color: #FFFFFF;
}

.record-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.record-title {
  font-size: 28rpx;
  color: #FFFFFF;
  margin-bottom: 8rpx;
}

.record-date {
  font-size: 22rpx;
  color: #94A3B8;
}

.record-amount {
  font-size: 28rpx;
  font-weight: 600;
}

.record-amount.expense {
  color: #FF6B6B;
}

.record-amount.income {
  color: #07C160;
}
</style>

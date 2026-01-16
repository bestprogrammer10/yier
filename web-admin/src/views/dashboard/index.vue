<template>
  <div class="dashboard-container">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="stat-card">
          <div class="stat-icon" style="background: #409eff;">
            <i class="el-icon-user"></i>
          </div>
          <div class="stat-content">
            <div class="stat-value">128</div>
            <div class="stat-label">总用户数</div>
          </div>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="stat-card">
          <div class="stat-icon" style="background: #67c23a;">
            <i class="el-icon-document"></i>
          </div>
          <div class="stat-content">
            <div class="stat-value">2,356</div>
            <div class="stat-label">记账笔数</div>
          </div>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="stat-card">
          <div class="stat-icon" style="background: #e6a23c;">
            <i class="el-icon-time"></i>
          </div>
          <div class="stat-content">
            <div class="stat-value">45</div>
            <div class="stat-label">今日新增</div>
          </div>
        </div>
      </el-col>

      <el-col :span="6">
        <div class="stat-card">
          <div class="stat-icon" style="background: #f56c6c;">
            <i class="el-icon-warning"></i>
          </div>
          <div class="stat-content">
            <div class="stat-value">3</div>
            <div class="stat-label">异常记录</div>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20" style="margin-top: 20px;">
      <el-col :span="24">
        <div class="welcome-card">
          <h2>欢迎使用智记账管理系统</h2>
          <p>Yier Management System v1.0.0</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
/**
 * 控制台页面
 * 遵循 SOLID 原则：单一职责，仅负责控制台展示
 */
export default {
  name: 'Dashboard'
}
</script>

<style scoped>
.dashboard-container {
  padding: 20px;
}

.stat-card {
  display: flex;
  align-items: center;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.stat-icon {
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: white;
  font-size: 24px;
  margin-right: 20px;
}

.stat-content {
  flex: 1;
}

.stat-value {
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  color: #999;
}

.welcome-card {
  padding: 40px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.welcome-card h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.welcome-card p {
  font-size: 14px;
  color: #999;
}
</style>

<template>
  <div class="layout-container">
    <el-container>
      <el-header class="layout-header">
        <div class="header-left">
          <h2>智记账管理系统</h2>
        </div>
        <div class="header-right">
          <el-dropdown @command="handleCommand">
            <span class="user-info">
              <i class="el-icon-user"></i>
              {{ userInfo.nickname || '管理员' }}
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>

      <el-main class="layout-main">
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script>
/**
 * 布局组件
 * 遵循 SOLID 原则：单一职责，仅负责布局渲染
 */
export default {
  name: 'Layout',
  computed: {
    userInfo() {
      return this.$store.state.userInfo || {}
    }
  },
  methods: {
    handleCommand(command) {
      if (command === 'logout') {
        this.logout()
      }
    },

    logout() {
      this.$confirm('确定要退出登录吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('logout')
        this.$router.push('/login')
        this.$message.success('已退出登录')
      }).catch(() => {})
    }
  }
}
</script>

<style scoped>
.layout-container {
  height: 100vh;
}

.layout-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: #fff;
  border-bottom: 1px solid #e6e6e6;
}

.header-left h2 {
  font-size: 20px;
  color: #333;
  margin: 0;
}

.header-right {
  display: flex;
  align-items: center;
}

.user-info {
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #333;
  padding: 0 10px;
}

.user-info:hover {
  color: #409eff;
}

.layout-main {
  background: #f5f5f5;
  padding: 20px;
}
</style>

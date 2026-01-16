<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-header">
        <h1>智记账管理系统</h1>
        <p>Yier Management System</p>
      </div>

      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="loginRules"
        class="login-form"
      >
        <el-form-item prop="phone">
          <el-input
            v-model="loginForm.phone"
            placeholder="请输入手机号"
            prefix-icon="el-icon-mobile-phone"
          />
        </el-form-item>

        <el-form-item prop="code">
          <el-input
            v-model="loginForm.code"
            placeholder="请输入验证码"
            prefix-icon="el-icon-key"
          >
            <el-button
              slot="append"
              :disabled="countdown > 0"
              @click="sendCode"
            >
              {{ countdown > 0 ? `${countdown}s` : '获取验证码' }}
            </el-button>
          </el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            type="primary"
            :loading="loading"
            class="login-button"
            @click="handleLogin"
          >
            登录
          </el-button>
        </el-form-item>

        <div class="login-tips">
          <span>测试账号：13800138000 / 验证码：123456</span>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import { phoneLogin } from '@/api/user'

/**
 * 登录页面
 * 遵循 SOLID 原则：单一职责，仅处理登录逻辑
 */
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        phone: '',
        code: ''
      },
      loginRules: {
        phone: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { pattern: /^1[3-9]\d{9}$/, message: '手机号格式不正确', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { pattern: /^\d{6}$/, message: '验证码格式不正确', trigger: 'blur' }
        ]
      },
      loading: false,
      countdown: 0,
      timer: null
    }
  },
  methods: {
    sendCode() {
      if (!this.loginForm.phone) {
        this.$message.warning('请先输入手机号')
        return
      }

      // 模拟发送验证码
      this.$message.success('验证码已发送')
      this.startCountdown()
    },

    startCountdown() {
      this.countdown = 60
      this.timer = setInterval(() => {
        this.countdown--
        if (this.countdown <= 0) {
          clearInterval(this.timer)
          this.timer = null
        }
      }, 1000)
    },

    handleLogin() {
      this.$refs.loginForm.validate(async (valid) => {
        if (!valid) return

        this.loading = true
        try {
          const res = await phoneLogin(this.loginForm)

          // 保存 token 和用户信息
          this.$store.dispatch('setToken', res.data.token)
          this.$store.dispatch('setUserInfo', res.data.userInfo)

          this.$message.success('登录成功')
          this.$router.push('/dashboard')
        } catch (error) {
          console.error('登录失败:', error)
        } finally {
          this.loading = false
        }
      })
    }
  },
  beforeDestroy() {
    // 组件销毁时清理定时器
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.login-box {
  width: 400px;
  padding: 40px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
}

.login-header {
  text-align: center;
  margin-bottom: 30px;
}

.login-header h1 {
  font-size: 24px;
  color: #333;
  margin-bottom: 8px;
}

.login-header p {
  font-size: 14px;
  color: #999;
}

.login-form {
  margin-top: 20px;
}

.login-button {
  width: 100%;
  margin-top: 10px;
}

.login-tips {
  text-align: center;
  color: #999;
  font-size: 12px;
  margin-top: 20px;
}
</style>

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/**
 * 遵循 SOLID 原则：模块化状态管理
 */
export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
    userInfo: JSON.parse(localStorage.getItem('userInfo') || '{}')
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
      localStorage.setItem('token', token)
    },
    SET_USER_INFO(state, userInfo) {
      state.userInfo = userInfo
      localStorage.setItem('userInfo', JSON.stringify(userInfo))
    },
    CLEAR_TOKEN(state) {
      state.token = ''
      localStorage.removeItem('token')
    },
    CLEAR_USER_INFO(state) {
      state.userInfo = {}
      localStorage.removeItem('userInfo')
    }
  },
  actions: {
    setToken({ commit }, token) {
      commit('SET_TOKEN', token)
    },
    setUserInfo({ commit }, userInfo) {
      commit('SET_USER_INFO', userInfo)
    },
    logout({ commit }) {
      commit('CLEAR_TOKEN')
      commit('CLEAR_USER_INFO')
    }
  },
  modules: {}
})

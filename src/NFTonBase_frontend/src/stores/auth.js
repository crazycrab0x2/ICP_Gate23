// src/stores/auth.ts
import { defineStore } from 'pinia'

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    isLogin: false, // Should be a boolean
    principal: '',
    ethAddress: '',
    activity: ''
  }),
  actions: {
    setIsLogin(value) {
      this.isLogin = value
    },
    setPrincipal(value) {
      this.principal = value
    },
    setAddress(value) {
      this.ethAddress = value
    },
    setActivity(value) {
      this.activity = value
    },
    logout() {
      // Reset state to initial values
      this.isLogin = false
      this.principal = ''
      this.ethAddress = ''
      this.activity = ''
      // Optional: perform additional cleanup tasks here
    }
  },
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'my_store',
        storage: localStorage
      }
    ]
  }
})

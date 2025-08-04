import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useToast } from 'vue-toastification'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref(localStorage.getItem('token') || null)
  const toast = useToast()

  const isAuthenticated = computed(() => !!token.value && !!user.value)

  const login = async (email, password) => {
    try {
      // Simulate API call - in real app, this would be an actual API endpoint
      const response = await mockLoginAPI(email, password)
      
      if (response.success) {
        user.value = response.user
        token.value = response.token
        localStorage.setItem('token', response.token)
        localStorage.setItem('user', JSON.stringify(response.user))
        toast.success('Login successful!')
        return { success: true }
      } else {
        toast.error(response.message || 'Login failed')
        return { success: false, message: response.message }
      }
    } catch (error) {
      toast.error('An error occurred during login')
      return { success: false, message: 'An error occurred during login' }
    }
  }

  const register = async (userData) => {
    try {
      // Simulate API call - in real app, this would be an actual API endpoint
      const response = await mockRegisterAPI(userData)
      
      if (response.success) {
        toast.success('Registration successful! Please login.')
        return { success: true }
      } else {
        toast.error(response.message || 'Registration failed')
        return { success: false, message: response.message }
      }
    } catch (error) {
      toast.error('An error occurred during registration')
      return { success: false, message: 'An error occurred during registration' }
    }
  }

  const logout = () => {
    user.value = null
    token.value = null
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    toast.success('You have been successfully logged out.')
  }

  const initializeAuth = () => {
    const savedToken = localStorage.getItem('token')
    const savedUser = localStorage.getItem('user')
    
    if (savedToken && savedUser) {
      token.value = savedToken
      user.value = JSON.parse(savedUser)
    }
  }

  // Mock API functions - replace with real API calls
  const mockLoginAPI = async (email, password) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Mock user data - in real app, this would come from your backend
    const mockUsers = [
      { email: 'admin@mavericks.com', password: 'admin123', username: 'admin', role: 'Admin' },
      { email: 'user@mavericks.com', password: 'user123', username: 'user', role: 'User' }
    ]
    
    const user = mockUsers.find(u => u.email === email && u.password === password)
    
    if (user) {
      return {
        success: true,
        user: { ...user, password: undefined },
        token: 'mock-jwt-token-' + Date.now()
      }
    } else {
      return {
        success: false,
        message: 'Invalid email or password'
      }
    }
  }

  const mockRegisterAPI = async (userData) => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Mock validation
    if (!userData.username || !userData.email || !userData.password) {
      return {
        success: false,
        message: 'All fields are required'
      }
    }
    
    if (userData.password.length < 6) {
      return {
        success: false,
        message: 'Password must be at least 6 characters long'
      }
    }
    
    return {
      success: true,
      message: 'User registered successfully'
    }
  }

  return {
    user,
    token,
    isAuthenticated,
    login,
    register,
    logout,
    initializeAuth
  }
}) 
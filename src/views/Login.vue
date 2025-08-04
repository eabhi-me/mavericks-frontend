<template>
  <div class="login-page">
    <div class="container-fluid">
      <div class="row min-vh-100">
        <!-- Login Form Side -->
        <div class="col-lg-6 d-flex align-items-center justify-content-center">
          <div class="login-form-container">
            <div class="login-header text-center mb-5">
              <div class="logo-container mb-4">
                <img src="/images/mavericks-removebg-preview.png" alt="Mavericks Logo" class="logo-img">
              </div>
              <h2 class="login-title">Welcome Back</h2>
              <p class="login-subtitle">Sign in to your Team Mavericks account</p>
            </div>

            <form @submit.prevent="handleLogin" class="login-form">
              <div class="form-group mb-4">
                <label for="email" class="form-label">
                  <i class="fas fa-envelope me-2"></i>Email Address
                </label>
                <input 
                  type="email" 
                  class="form-control custom-input" 
                  id="email" 
                  v-model="form.email"
                  :class="{ 'is-invalid': errors.email, 'is-valid': form.email && !errors.email }"
                  placeholder="Enter your email"
                  required
                >
                <div class="invalid-feedback" v-if="errors.email">
                  <i class="fas fa-exclamation-circle me-1"></i>{{ errors.email }}
                </div>
              </div>

              <div class="form-group mb-4">
                <label for="password" class="form-label">
                  <i class="fas fa-lock me-2"></i>Password
                </label>
                <div class="password-input-group">
                  <input 
                    :type="showPassword ? 'text' : 'password'" 
                    class="form-control custom-input" 
                    id="password" 
                    v-model="form.password"
                    :class="{ 'is-invalid': errors.password, 'is-valid': form.password && !errors.password }"
                    placeholder="Enter your password"
                    required
                  >
                  <button 
                    type="button" 
                    class="password-toggle"
                    @click="togglePassword"
                  >
                    <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                  </button>
                </div>
                <div class="invalid-feedback" v-if="errors.password">
                  <i class="fas fa-exclamation-circle me-1"></i>{{ errors.password }}
                </div>
              </div>

              <div class="form-options mb-4">
                <div class="form-check">
                  <input class="form-check-input custom-checkbox" type="checkbox" id="remember" v-model="form.remember">
                  <label class="form-check-label" for="remember">
                    Remember me
                  </label>
                </div>
                <a href="#" class="forgot-password">Forgot password?</a>
              </div>

              <div class="d-grid mb-4">
                <button 
                  type="submit" 
                  class="btn btn-primary login-btn"
                  :disabled="isLoading"
                >
                  <span v-if="isLoading" class="spinner-border spinner-border-sm me-2"></span>
                  <i v-else class="fas fa-sign-in-alt me-2"></i>
                  {{ isLoading ? 'Signing In...' : 'Sign In' }}
                </button>
              </div>

              <div class="divider mb-4">
                <span>or</span>
              </div>

              <div class="social-login mb-4">
                <button type="button" class="btn btn-outline-secondary social-btn">
                  <i class="fab fa-google me-2"></i>Continue with Google
                </button>
              </div>

              <div class="text-center">
                <p class="signup-link">
                  Don't have an account? 
                  <router-link to="/register" class="link-primary">Sign up here</router-link>
                </p>
              </div>
            </form>

            <!-- Demo Credentials -->
            <div class="demo-credentials">
              <div class="demo-header">
                <i class="fas fa-info-circle me-2"></i>
                <span>Demo Credentials</span>
              </div>
              <div class="demo-content">
                <div class="demo-account">
                  <div class="account-type">Admin User</div>
                  <div class="account-details">
                    <span><strong>Email:</strong> admin@mavericks.com</span>
                    <span><strong>Password:</strong> admin123</span>
                  </div>
                </div>
                <div class="demo-account">
                  <div class="account-type">Regular User</div>
                  <div class="account-details">
                    <span><strong>Email:</strong> user@mavericks.com</span>
                    <span><strong>Password:</strong> user123</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Background Side -->
        <div class="col-lg-6 d-none d-lg-block">
          <div class="login-bg">
            <div class="bg-overlay">
              <div class="bg-content">
                <div class="bg-icon mb-4">
                  <i class="fas fa-robot"></i>
                </div>
                <h1 class="bg-title">Team Mavericks</h1>
                <p class="bg-description">
                  Join the future of robotics and innovation. Sign in to access your dashboard 
                  and continue building amazing projects.
                </p>
                <div class="features-grid">
                  <div class="feature-item">
                    <div class="feature-icon">
                      <i class="fas fa-robot"></i>
                    </div>
                    <div class="feature-text">
                      <h6>Exclusive Projects</h6>
                      <p>Access to cutting-edge robotics projects</p>
                    </div>
                  </div>
                  <div class="feature-item">
                    <div class="feature-icon">
                      <i class="fas fa-users"></i>
                    </div>
                    <div class="feature-text">
                      <h6>Team Collaboration</h6>
                      <p>Connect with team members</p>
                    </div>
                  </div>
                  <div class="feature-item">
                    <div class="feature-icon">
                      <i class="fas fa-trophy"></i>
                    </div>
                    <div class="feature-text">
                      <h6>Achievements</h6>
                      <p>Track your accomplishments</p>
                    </div>
                  </div>
                  <div class="feature-item">
                    <div class="feature-icon">
                      <i class="fas fa-calendar"></i>
                    </div>
                    <div class="feature-text">
                      <h6>Events</h6>
                      <p>Stay updated with events</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

export default {
  name: 'Login',
  setup() {
    const router = useRouter()
    const authStore = useAuthStore()
    
    const isLoading = ref(false)
    const showPassword = ref(false)
    
    const form = reactive({
      email: '',
      password: '',
      remember: false
    })
    
    const errors = reactive({
      email: '',
      password: ''
    })

    const validateForm = () => {
      let isValid = true
      errors.email = ''
      errors.password = ''
      
      if (!form.email.trim()) {
        errors.email = 'Email is required'
        isValid = false
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        errors.email = 'Please enter a valid email address'
        isValid = false
      }
      
      if (!form.password) {
        errors.password = 'Password is required'
        isValid = false
      } else if (form.password.length < 6) {
        errors.password = 'Password must be at least 6 characters long'
        isValid = false
      }
      
      return isValid
    }

    const handleLogin = async () => {
      if (!validateForm()) {
        return
      }
      
      isLoading.value = true
      
      try {
        const result = await authStore.login(form.email, form.password)
        
        if (result.success) {
          router.push('/dashboard')
        }
      } catch (error) {
        console.error('Login error:', error)
      } finally {
        isLoading.value = false
      }
    }

    const togglePassword = () => {
      showPassword.value = !showPassword.value
    }

    onMounted(() => {
      // Check if user is already authenticated
      if (authStore.isAuthenticated) {
        router.push('/dashboard')
      }
    })

    return {
      form,
      errors,
      isLoading,
      showPassword,
      handleLogin,
      togglePassword
    }
  }
}
</script>

<style scoped>
.login-page {
  background-color: #ffffff;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.login-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="0.5" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  pointer-events: none;
}

.login-form-container {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(25px);
  border-radius: 20px;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.15),
    0 0 1px rgba(255, 255, 255, 0.5) inset;
  padding: 2.5rem;
  max-width: 500px;
  width: 100%;
  position: relative;
  z-index: 1;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.login-form-container:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 25px 80px rgba(0, 0, 0, 0.2),
    0 0 1px rgba(255, 255, 255, 0.6) inset;
}

.login-header {
  margin-bottom: 2.5rem;
}

.logo-container {
  display: inline-block;
  padding: 1rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
}

.logo-img {
  height: 60px;
  width: auto;
  filter: brightness(0) invert(1);
}

.login-title {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
}

.login-subtitle {
  color: #6c757d;
  font-size: 1.1rem;
  margin: 0;
}

.form-group {
  position: relative;
}

.form-label {
  font-weight: 600;
  color: #495057;
  margin-bottom: 0.75rem;
  display: block;
}

.form-label i {
  color: #667eea;
}

.custom-input {
  border: 2px solid #e9ecef;
  border-radius: 12px;
  padding: 1rem 1.25rem;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.8);
}

.custom-input:focus {
  border-color: #667eea;
  box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.15);
  background: white;
  transform: translateY(-2px);
}

.custom-input.is-valid {
  border-color: #28a745;
  background: rgba(40, 167, 69, 0.05);
}

.custom-input.is-invalid {
  border-color: #dc3545;
  background: rgba(220, 53, 69, 0.05);
}

.password-input-group {
  position: relative;
}

.password-toggle {
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #6c757d;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.password-toggle:hover {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.custom-checkbox {
  width: 1.2rem;
  height: 1.2rem;
  border: 2px solid #dee2e6;
  border-radius: 4px;
  cursor: pointer;
}

.custom-checkbox:checked {
  background-color: #667eea;
  border-color: #667eea;
}

.forgot-password {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.forgot-password:hover {
  color: #764ba2;
  text-decoration: underline;
}

.login-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 12px;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.login-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s ease;
}

.login-btn:hover::before {
  left: 100%;
}

.login-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);
}

.login-btn:disabled {
  transform: none;
  box-shadow: none;
}

.divider {
  text-align: center;
  position: relative;
  margin: 2rem 0;
}

.divider::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, transparent, #dee2e6, transparent);
}

.divider span {
  background: white;
  padding: 0 1rem;
  color: #6c757d;
  font-weight: 500;
}

.social-btn {
  border: 2px solid #dee2e6;
  border-radius: 12px;
  padding: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  background: white;
}

.social-btn:hover {
  border-color: #667eea;
  background: rgba(102, 126, 234, 0.05);
  transform: translateY(-2px);
}

.signup-link {
  color: #6c757d;
  margin: 0;
}

.link-primary {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

.link-primary:hover {
  color: #764ba2;
  text-decoration: underline;
}

.demo-credentials {
  margin-top: 2rem;
  background: linear-gradient(135deg, #f8f9fa, #e9ecef);
  border-radius: 16px;
  padding: 1.5rem;
  border: 1px solid #dee2e6;
}

.demo-header {
  display: flex;
  align-items: center;
  font-weight: 600;
  color: #495057;
  margin-bottom: 1rem;
  font-size: 1.1rem;
}

.demo-header i {
  color: #667eea;
}

.demo-content {
  display: grid;
  gap: 1rem;
}

.demo-account {
  background: white;
  border-radius: 12px;
  padding: 1rem;
  border: 1px solid #e9ecef;
}

.account-type {
  font-weight: 600;
  color: #667eea;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.account-details {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.85rem;
  color: #6c757d;
}

/* Background Side */
.login-bg {
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.bg-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.bg-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5));
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
}

.bg-content {
  text-align: center;
  max-width: 600px;
  color: white;
}

.bg-icon {
  font-size: 4rem;
  color: #667eea;
  margin-bottom: 1rem;
}

.bg-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #ffffff, #667eea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.bg-description {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  text-align: left;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
}

.feature-item:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-2px);
}

.feature-icon {
  font-size: 1.5rem;
  color: #667eea;
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.feature-text h6 {
  margin: 0 0 0.25rem 0;
  font-weight: 600;
  font-size: 1rem;
}

.feature-text p {
  margin: 0;
  font-size: 0.9rem;
  opacity: 0.8;
  line-height: 1.4;
}

/* Responsive Design */
@media (max-width: 991.98px) {
  .login-page {
    background: white;
  }
  
  .login-form-container {
    box-shadow: none;
    border-radius: 0;
    background: white;
    padding: 2rem 1rem;
  }
  
  .login-title {
    font-size: 2rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 576px) {
  .login-form-container {
    padding: 1.5rem 1rem;
  }
  
  .login-title {
    font-size: 1.75rem;
  }
  
  .form-options {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .demo-content {
    grid-template-columns: 1fr;
  }
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.login-form-container {
  animation: fadeInUp 0.6s ease-out;
}

.form-group {
  animation: fadeInUp 0.6s ease-out;
  animation-fill-mode: both;
}

.form-group:nth-child(1) { animation-delay: 0.1s; }
.form-group:nth-child(2) { animation-delay: 0.2s; }
.form-group:nth-child(3) { animation-delay: 0.3s; }
.form-group:nth-child(4) { animation-delay: 0.4s; }
.form-group:nth-child(5) { animation-delay: 0.5s; }
</style> 
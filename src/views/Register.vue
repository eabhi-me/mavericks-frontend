<template>
  <div class="register-page">
    <div class="container-fluid">
      <div class="row min-vh-100">
        <!-- Register Form Side -->
        <div class="col-lg-6 d-flex align-items-center justify-content-center">
          <div class="register-form-container">
            <div class="register-header text-center mb-5">
              <div class="logo-container mb-4">
                <img src="/images/mavericks-removebg-preview.png" alt="Mavericks Logo" class="logo-img">
              </div>
              <h2 class="register-title">Join Team Mavericks</h2>
              <p class="register-subtitle">Create your account and start your robotics journey</p>
            </div>

            <form @submit.prevent="handleRegister" class="register-form">
              <div class="row">
                <div class="col-md-6 mb-4">
                  <label for="firstName" class="form-label">
                    <i class="fas fa-user me-2"></i>First Name
                  </label>
                  <input 
                    type="text" 
                    class="form-control custom-input" 
                    id="firstName" 
                    v-model="form.firstName"
                    :class="{ 'is-invalid': errors.firstName, 'is-valid': form.firstName && !errors.firstName }"
                    placeholder="Enter first name"
                    required
                  >
                  <div class="invalid-feedback" v-if="errors.firstName">
                    <i class="fas fa-exclamation-circle me-1"></i>{{ errors.firstName }}
                  </div>
                </div>

                <div class="col-md-6 mb-4">
                  <label for="lastName" class="form-label">
                    <i class="fas fa-user me-2"></i>Last Name
                  </label>
                  <input 
                    type="text" 
                    class="form-control custom-input" 
                    id="lastName" 
                    v-model="form.lastName"
                    :class="{ 'is-invalid': errors.lastName, 'is-valid': form.lastName && !errors.lastName }"
                    placeholder="Enter last name"
                    required
                  >
                  <div class="invalid-feedback" v-if="errors.lastName">
                    <i class="fas fa-exclamation-circle me-1"></i>{{ errors.lastName }}
                  </div>
                </div>
              </div>

              <div class="mb-4">
                <label for="username" class="form-label">
                  <i class="fas fa-at me-2"></i>Username
                </label>
                <input 
                  type="text" 
                  class="form-control custom-input" 
                  id="username" 
                  v-model="form.username"
                  :class="{ 'is-invalid': errors.username, 'is-valid': form.username && !errors.username }"
                  placeholder="Choose a username"
                  required
                >
                <div class="invalid-feedback" v-if="errors.username">
                  <i class="fas fa-exclamation-circle me-1"></i>{{ errors.username }}
                </div>
              </div>

              <div class="mb-4">
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

              <div class="row">
                <div class="col-md-6 mb-4">
                  <label for="branch" class="form-label">
                    <i class="fas fa-graduation-cap me-2"></i>Branch
                  </label>
                  <select 
                    class="form-select custom-input" 
                    id="branch" 
                    v-model="form.branch"
                    :class="{ 'is-invalid': errors.branch, 'is-valid': form.branch && !errors.branch }"
                    required
                  >
                    <option value="">Select your branch</option>
                    <option value="GCS">Computer Science (GCS)</option>
                    <option value="GEE">Electrical Engineering (GEE)</option>
                    <option value="GME">Mechanical Engineering (GME)</option>
                    <option value="GEC">Electronics & Communication (GEC)</option>
                    <option value="GCT">Chemical Technology (GCT)</option>
                    <option value="GIN">Instrumentation (GIN)</option>
                  </select>
                  <div class="invalid-feedback" v-if="errors.branch">
                    <i class="fas fa-exclamation-circle me-1"></i>{{ errors.branch }}
                  </div>
                </div>

                <div class="col-md-6 mb-4">
                  <label for="batch" class="form-label">
                    <i class="fas fa-calendar me-2"></i>Batch
                  </label>
                  <select 
                    class="form-select custom-input" 
                    id="batch" 
                    v-model="form.batch"
                    :class="{ 'is-invalid': errors.batch, 'is-valid': form.batch && !errors.batch }"
                    required
                  >
                    <option value="">Select your batch</option>
                    <option value="2022-2026">2022-2026</option>
                    <option value="2023-2027">2023-2027</option>
                    <option value="2024-2028">2024-2028</option>
                  </select>
                  <div class="invalid-feedback" v-if="errors.batch">
                    <i class="fas fa-exclamation-circle me-1"></i>{{ errors.batch }}
                  </div>
                </div>
              </div>

              <div class="mb-4">
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
                    placeholder="Create a password"
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
                <div class="form-text">
                  <i class="fas fa-info-circle me-1"></i>
                  Password must be at least 8 characters long and contain letters and numbers
                </div>
              </div>

              <div class="mb-4">
                <label for="confirmPassword" class="form-label">
                  <i class="fas fa-lock me-2"></i>Confirm Password
                </label>
                <div class="password-input-group">
                  <input 
                    :type="showConfirmPassword ? 'text' : 'password'" 
                    class="form-control custom-input" 
                    id="confirmPassword" 
                    v-model="form.confirmPassword"
                    :class="{ 'is-invalid': errors.confirmPassword, 'is-valid': form.confirmPassword && !errors.confirmPassword }"
                    placeholder="Confirm your password"
                    required
                  >
                  <button 
                    type="button" 
                    class="password-toggle"
                    @click="toggleConfirmPassword"
                  >
                    <i :class="showConfirmPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                  </button>
                </div>
                <div class="invalid-feedback" v-if="errors.confirmPassword">
                  <i class="fas fa-exclamation-circle me-1"></i>{{ errors.confirmPassword }}
                </div>
              </div>

              <div class="mb-4">
                <div class="form-check">
                  <input 
                    class="form-check-input custom-checkbox" 
                    type="checkbox" 
                    id="terms" 
                    v-model="form.agreeToTerms"
                    :class="{ 'is-invalid': errors.agreeToTerms }"
                  >
                  <label class="form-check-label" for="terms">
                    I agree to the <a href="#" class="link-primary">Terms of Service</a> and 
                    <a href="#" class="link-primary">Privacy Policy</a>
                  </label>
                </div>
                <div class="invalid-feedback" v-if="errors.agreeToTerms">
                  <i class="fas fa-exclamation-circle me-1"></i>{{ errors.agreeToTerms }}
                </div>
              </div>

              <div class="d-grid mb-4">
                <button 
                  type="submit" 
                  class="btn btn-primary register-btn"
                  :disabled="isLoading"
                >
                  <span v-if="isLoading" class="spinner-border spinner-border-sm me-2"></span>
                  <i v-else class="fas fa-user-plus me-2"></i>
                  {{ isLoading ? 'Creating Account...' : 'Create Account' }}
                </button>
              </div>

              <div class="text-center">
                <p class="signin-link">
                  Already have an account? 
                  <router-link to="/login" class="link-primary">Sign in here</router-link>
                </p>
              </div>
            </form>
          </div>
        </div>

        <!-- Background Side -->
        <div class="col-lg-6 d-none d-lg-block">
          <div class="register-bg">
            <div class="bg-overlay">
              <div class="bg-content">
                <div class="bg-icon mb-4">
                  <i class="fas fa-rocket"></i>
                </div>
                <h1 class="bg-title">Welcome to the Future</h1>
                <p class="bg-description">
                  Join Team Mavericks and become part of an innovative community 
                  dedicated to robotics and technology advancement.
                </p>
                <div class="benefits-grid">
                  <div class="benefit-item">
                    <div class="benefit-icon">
                      <i class="fas fa-rocket"></i>
                    </div>
                    <div class="benefit-text">
                      <h6>Cutting-edge Projects</h6>
                      <p>Access to innovative robotics projects</p>
                    </div>
                  </div>
                  <div class="benefit-item">
                    <div class="benefit-icon">
                      <i class="fas fa-users"></i>
                    </div>
                    <div class="benefit-text">
                      <h6>Innovation Community</h6>
                      <p>Connect with like-minded innovators</p>
                    </div>
                  </div>
                  <div class="benefit-item">
                    <div class="benefit-icon">
                      <i class="fas fa-trophy"></i>
                    </div>
                    <div class="benefit-text">
                      <h6>Competitions</h6>
                      <p>Participate in events and competitions</p>
                    </div>
                  </div>
                  <div class="benefit-item">
                    <div class="benefit-icon">
                      <i class="fas fa-graduation-cap"></i>
                    </div>
                    <div class="benefit-text">
                      <h6>Expert Mentorship</h6>
                      <p>Learn from experienced mentors</p>
                    </div>
                  </div>
                  <div class="benefit-item">
                    <div class="benefit-icon">
                      <i class="fas fa-certificate"></i>
                    </div>
                    <div class="benefit-text">
                      <h6>Skill Development</h6>
                      <p>Build your portfolio and skills</p>
                    </div>
                  </div>
                  <div class="benefit-item">
                    <div class="benefit-icon">
                      <i class="fas fa-network-wired"></i>
                    </div>
                    <div class="benefit-text">
                      <h6>Industry Network</h6>
                      <p>Connect with industry professionals</p>
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
  name: 'Register',
  setup() {
    const router = useRouter()
    const authStore = useAuthStore()
    
    const isLoading = ref(false)
    const showPassword = ref(false)
    const showConfirmPassword = ref(false)
    
    const form = reactive({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      branch: '',
      batch: '',
      password: '',
      confirmPassword: '',
      agreeToTerms: false
    })
    
    const errors = reactive({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      branch: '',
      batch: '',
      password: '',
      confirmPassword: '',
      agreeToTerms: ''
    })

    const validateForm = () => {
      let isValid = true
      
      // Reset errors
      Object.keys(errors).forEach(key => {
        errors[key] = ''
      })
      
      // First Name validation
      if (!form.firstName.trim()) {
        errors.firstName = 'First name is required'
        isValid = false
      }
      
      // Last Name validation
      if (!form.lastName.trim()) {
        errors.lastName = 'Last name is required'
        isValid = false
      }
      
      // Username validation
      if (!form.username.trim()) {
        errors.username = 'Username is required'
        isValid = false
      } else if (form.username.length < 3) {
        errors.username = 'Username must be at least 3 characters long'
        isValid = false
      }
      
      // Email validation
      if (!form.email.trim()) {
        errors.email = 'Email is required'
        isValid = false
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        errors.email = 'Please enter a valid email address'
        isValid = false
      }
      
      // Branch validation
      if (!form.branch) {
        errors.branch = 'Please select your branch'
        isValid = false
      }
      
      // Batch validation
      if (!form.batch) {
        errors.batch = 'Please select your batch'
        isValid = false
      }
      
      // Password validation
      if (!form.password) {
        errors.password = 'Password is required'
        isValid = false
      } else if (form.password.length < 8) {
        errors.password = 'Password must be at least 8 characters long'
        isValid = false
      } else if (!/(?=.*[A-Za-z])(?=.*\d)/.test(form.password)) {
        errors.password = 'Password must contain both letters and numbers'
        isValid = false
      }
      
      // Confirm Password validation
      if (!form.confirmPassword) {
        errors.confirmPassword = 'Please confirm your password'
        isValid = false
      } else if (form.password !== form.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match'
        isValid = false
      }
      
      // Terms validation
      if (!form.agreeToTerms) {
        errors.agreeToTerms = 'You must agree to the terms and conditions'
        isValid = false
      }
      
      return isValid
    }

    const handleRegister = async () => {
      if (!validateForm()) {
        return
      }
      
      isLoading.value = true
      
      try {
        const userData = {
          username: form.username,
          email: form.email,
          password: form.password,
          firstName: form.firstName,
          lastName: form.lastName,
          branch: form.branch,
          batch: form.batch
        }
        
        const result = await authStore.register(userData)
        
        if (result.success) {
          router.push('/login')
        }
      } catch (error) {
        console.error('Registration error:', error)
      } finally {
        isLoading.value = false
      }
    }

    const togglePassword = () => {
      showPassword.value = !showPassword.value
    }

    const toggleConfirmPassword = () => {
      showConfirmPassword.value = !showConfirmPassword.value
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
      showConfirmPassword,
      handleRegister,
      togglePassword,
      toggleConfirmPassword
    }
  }
}
</script>

<style scoped>
.register-page {
  background: #ffffff;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}

.register-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="50" cy="50" r="0.5" fill="%23ffffff" opacity="0.1"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
  pointer-events: none;
}

.register-form-container {
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(25px);
  border-radius: 20px;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.15),
    0 0 1px rgba(255, 255, 255, 0.5) inset;
  padding: 2.5rem;
  max-width: 600px;
  width: 100%;
  position: relative;
  z-index: 1;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

.register-form-container:hover {
  transform: translateY(-5px);
  box-shadow: 
    0 25px 80px rgba(0, 0, 0, 0.2),
    0 0 1px rgba(255, 255, 255, 0.6) inset;
}

.register-header {
  margin-bottom: 2rem;
}

.logo-container {
  display: inline-block;
  padding: 1.2rem;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  box-shadow: 
    0 15px 35px rgba(102, 126, 234, 0.4),
    0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.logo-container:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 
    0 20px 45px rgba(102, 126, 234, 0.5),
    0 8px 20px rgba(0, 0, 0, 0.15);
}

.logo-img {
  height: 50px;
  width: auto;
  filter: brightness(0) invert(1);
  transition: transform 0.3s ease;
}

.logo-container:hover .logo-img {
  transform: rotate(10deg);
}

.register-title {
  font-size: 2.2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea, #764ba2);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 0.5rem;
  letter-spacing: -0.5px;
}

.register-subtitle {
  color: #6c757d;
  font-size: 1rem;
  margin: 0;
  opacity: 0.8;
}

.form-group {
  position: relative;
  margin-bottom: 1.5rem;
}

.form-label {
  font-weight: 600;
  color: #495057;
  margin-bottom: 0.5rem;
  display: block;
  font-size: 0.9rem;
  letter-spacing: 0.3px;
}

.form-label i {
  color: #667eea;
  margin-right: 0.5rem;
}

.custom-input {
  border: 2px solid #e9ecef;
  border-radius: 12px;
  padding: 0.9rem 1.1rem;
  font-size: 0.95rem;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  position: relative;
}

.custom-input:focus {
  border-color: #667eea;
  box-shadow: 
    0 0 0 0.15rem rgba(102, 126, 234, 0.15),
    0 8px 25px rgba(0, 0, 0, 0.1);
  background: white;
  transform: translateY(-2px);
  outline: none;
}

.custom-input.is-valid {
  border-color: #28a745;
  background: rgba(40, 167, 69, 0.03);
  box-shadow: 0 0 0 0.15rem rgba(40, 167, 69, 0.1);
}

.custom-input.is-invalid {
  border-color: #dc3545;
  background: rgba(220, 53, 69, 0.03);
  box-shadow: 0 0 0 0.15rem rgba(220, 53, 69, 0.1);
}

.password-input-group {
  position: relative;
}

.password-toggle {
  position: absolute;
  right: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: #6c757d;
  cursor: pointer;
  padding: 0.6rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  z-index: 10;
}

.password-toggle:hover {
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  transform: translateY(-50%) scale(1.1);
}

.form-text {
  color: #6c757d;
  font-size: 0.8rem;
  margin-top: 0.4rem;
  display: flex;
  align-items: center;
}

.form-text i {
  color: #667eea;
  margin-right: 0.3rem;
}

.custom-checkbox {
  width: 1.1rem;
  height: 1.1rem;
  border: 2px solid #dee2e6;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.custom-checkbox:checked {
  background-color: #667eea;
  border-color: #667eea;
  transform: scale(1.1);
}

.custom-checkbox:focus {
  box-shadow: 0 0 0 0.15rem rgba(102, 126, 234, 0.2);
  outline: none;
}

.register-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  border-radius: 12px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
}

.register-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s ease;
}

.register-btn:hover::before {
  left: 100%;
}

.register-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 35px rgba(102, 126, 234, 0.4);
}

.register-btn:active {
  transform: translateY(-1px);
}

.register-btn:disabled {
  transform: none;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.2);
  opacity: 0.7;
}

.signin-link {
  color: #6c757d;
  margin: 0;
  font-size: 0.9rem;
}

.link-primary {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
}

.link-primary::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  transition: width 0.3s ease;
}

.link-primary:hover {
  color: #764ba2;
}

.link-primary:hover::after {
  width: 100%;
}

/* Background Side */
.register-bg {
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.9), rgba(118, 75, 162, 0.9));
}

.bg-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
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
  font-size: 3.5rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 1.5rem;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.bg-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, #ffffff, rgba(255, 255, 255, 0.8));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
}

.bg-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  opacity: 0.9;
}

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
  text-align: left;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
  padding: 1.2rem;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.benefit-item:hover {
  background: rgba(255, 255, 255, 0.18);
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.benefit-icon {
  font-size: 1.4rem;
  color: rgba(255, 255, 255, 0.9);
  flex-shrink: 0;
  margin-top: 0.2rem;
}

.benefit-text h6 {
  margin: 0 0 0.3rem 0;
  font-weight: 600;
  font-size: 0.95rem;
  color: white;
}

.benefit-text p {
  margin: 0;
  font-size: 0.85rem;
  opacity: 0.8;
  line-height: 1.4;
}

/* Responsive Design */
@media (max-width: 991.98px) {
  .register-page {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  }
  
  .register-form-container {
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.98);
    padding: 2rem 1.5rem;
    margin: 1rem;
  }
  
  .register-title {
    font-size: 1.8rem;
  }
  
  .benefits-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
}

@media (max-width: 576px) {
  .register-form-container {
    padding: 1.5rem 1rem;
    margin: 0.5rem;
  }
  
  .register-title {
    font-size: 1.6rem;
  }
  
  .logo-container {
    padding: 1rem;
  }
  
  .logo-img {
    height: 40px;
  }
  
  .row .col-md-6 {
    margin-bottom: 1rem;
  }
  
  .custom-input {
    padding: 0.8rem 1rem;
    font-size: 0.9rem;
  }
  
  .register-btn {
    padding: 0.9rem 1.5rem;
    font-size: 0.9rem;
  }
}

/* Enhanced Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.register-form-container {
  animation: fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1);
}

.form-group, .row {
  animation: slideInRight 0.6s ease-out;
  animation-fill-mode: both;
}

.form-group:nth-child(1) { animation-delay: 0.1s; }
.form-group:nth-child(2) { animation-delay: 0.15s; }
.form-group:nth-child(3) { animation-delay: 0.2s; }
.form-group:nth-child(4) { animation-delay: 0.25s; }
.form-group:nth-child(5) { animation-delay: 0.3s; }
.form-group:nth-child(6) { animation-delay: 0.35s; }
.form-group:nth-child(7) { animation-delay: 0.4s; }
.form-group:nth-child(8) { animation-delay: 0.45s; }

.bg-content {
  animation: fadeInUp 1s ease-out;
}

.benefit-item {
  animation: fadeInUp 0.6s ease-out;
  animation-fill-mode: both;
}

.benefit-item:nth-child(1) { animation-delay: 0.2s; }
.benefit-item:nth-child(2) { animation-delay: 0.3s; }
.benefit-item:nth-child(3) { animation-delay: 0.4s; }
.benefit-item:nth-child(4) { animation-delay: 0.5s; }
.benefit-item:nth-child(5) { animation-delay: 0.6s; }
.benefit-item:nth-child(6) { animation-delay: 0.7s; }

/* Custom scrollbar for webkit browsers */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #764ba2, #667eea);
}
</style> 
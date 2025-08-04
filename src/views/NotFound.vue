<template>
  <div class="not-found">
    <div class="container">
      <div class="row min-vh-100 align-items-center justify-content-center">
        <div class="col-lg-6 text-center">
          <div class="error-content">
            <div class="error-number">404</div>
            <h1 class="error-title mb-4">Page Not Found</h1>
            <p class="error-description mb-5">
              Oops! The page you're looking for doesn't exist. It might have been moved, 
              deleted, or you entered the wrong URL.
            </p>
            
            <div class="error-actions">
              <router-link to="/" class="btn btn-primary btn-lg me-3">
                <i class="fas fa-home me-2"></i>
                Go Home
              </router-link>
              <button class="btn btn-outline-secondary btn-lg" @click="goBack">
                <i class="fas fa-arrow-left me-2"></i>
                Go Back
              </button>
            </div>
            
            <div class="error-help mt-5">
              <h5 class="mb-3">Looking for something specific?</h5>
              <div class="row g-3">
                <div class="col-md-4">
                  <router-link to="/about" class="text-decoration-none">
                    <div class="help-card">
                      <i class="fas fa-info-circle text-primary mb-2"></i>
                      <h6>About Us</h6>
                      <small class="text-muted">Learn about Team Mavericks</small>
                    </div>
                  </router-link>
                </div>
                <div class="col-md-4">
                  <router-link to="/projects" class="text-decoration-none">
                    <div class="help-card">
                      <i class="fas fa-project-diagram text-primary mb-2"></i>
                      <h6>Projects</h6>
                      <small class="text-muted">View our robotics projects</small>
                    </div>
                  </router-link>
                </div>
                <div class="col-md-4">
                  <router-link to="/contact" class="text-decoration-none">
                    <div class="help-card">
                      <i class="fas fa-envelope text-primary mb-2"></i>
                      <h6>Contact</h6>
                      <small class="text-muted">Get in touch with us</small>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="col-lg-6 d-none d-lg-block">
          <div class="error-illustration">
            <div class="robot-animation">
              <div class="robot">
                <div class="robot-head">
                  <div class="robot-eye left"></div>
                  <div class="robot-eye right"></div>
                  <div class="robot-mouth"></div>
                </div>
                <div class="robot-body">
                  <div class="robot-arm left"></div>
                  <div class="robot-arm right"></div>
                </div>
                <div class="robot-legs">
                  <div class="robot-leg left"></div>
                  <div class="robot-leg right"></div>
                </div>
              </div>
            </div>
            <div class="search-animation">
              <div class="search-icon">
                <i class="fas fa-search"></i>
              </div>
              <div class="search-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'NotFound',
  setup() {
    const router = useRouter()

    const goBack = () => {
      router.go(-1)
    }

    return {
      goBack
    }
  }
}
</script>

<style scoped>
.not-found {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  min-height: 100vh;
  color: white;
}

.error-content {
  padding: 2rem;
}

.error-number {
  font-size: 8rem;
  font-weight: 900;
  color: rgba(255, 255, 255, 0.1);
  line-height: 1;
  margin-bottom: 1rem;
}

.error-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.error-description {
  font-size: 1.2rem;
  opacity: 0.9;
  max-width: 500px;
  margin: 0 auto;
}

.error-actions .btn {
  padding: 12px 30px;
  font-weight: 600;
  border-radius: 50px;
  transition: all 0.3s ease;
}

.error-actions .btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.help-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  color: white;
}

.help-card:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-5px);
}

.help-card i {
  font-size: 2rem;
}

.help-card h6 {
  margin: 0.5rem 0;
  font-weight: 600;
}

.error-illustration {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.robot-animation {
  position: relative;
  z-index: 2;
}

.robot {
  width: 200px;
  height: 300px;
  position: relative;
  animation: robotFloat 3s ease-in-out infinite;
}

.robot-head {
  width: 80px;
  height: 80px;
  background: #fff;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.robot-eye {
  width: 12px;
  height: 12px;
  background: #007bff;
  border-radius: 50%;
  position: absolute;
  top: 30px;
  animation: robotBlink 2s infinite;
}

.robot-eye.left {
  left: 25px;
}

.robot-eye.right {
  right: 25px;
}

.robot-mouth {
  width: 20px;
  height: 3px;
  background: #333;
  border-radius: 2px;
  position: absolute;
  bottom: 20px;
}

.robot-body {
  width: 120px;
  height: 120px;
  background: #fff;
  border-radius: 20px;
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.robot-arm {
  width: 20px;
  height: 80px;
  background: #fff;
  border-radius: 10px;
  position: absolute;
  top: 80px;
  animation: robotWave 2s ease-in-out infinite;
}

.robot-arm.left {
  left: -30px;
  transform: rotate(-30deg);
}

.robot-arm.right {
  right: -30px;
  transform: rotate(30deg);
}

.robot-legs {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 20px;
}

.robot-leg {
  width: 25px;
  height: 60px;
  background: #fff;
  border-radius: 12px;
  animation: robotWalk 1s ease-in-out infinite;
}

.search-animation {
  position: absolute;
  top: 50%;
  right: 20%;
  transform: translateY(-50%);
  z-index: 1;
}

.search-icon {
  font-size: 3rem;
  color: rgba(255, 255, 255, 0.3);
  animation: searchPulse 2s ease-in-out infinite;
}

.search-dots {
  display: flex;
  gap: 8px;
  justify-content: center;
  margin-top: 1rem;
}

.search-dots span {
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  animation: dotPulse 1.5s ease-in-out infinite;
}

.search-dots span:nth-child(2) {
  animation-delay: 0.2s;
}

.search-dots span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes robotFloat {
  0%, 100% { transform: translateX(-50%) translateY(0px); }
  50% { transform: translateX(-50%) translateY(-10px); }
}

@keyframes robotBlink {
  0%, 90%, 100% { opacity: 1; }
  95% { opacity: 0; }
}

@keyframes robotWave {
  0%, 100% { transform: rotate(-30deg); }
  50% { transform: rotate(-60deg); }
}

@keyframes robotWalk {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-5px); }
}

@keyframes searchPulse {
  0%, 100% { transform: scale(1); opacity: 0.3; }
  50% { transform: scale(1.1); opacity: 0.6; }
}

@keyframes dotPulse {
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50% { transform: scale(1.5); opacity: 1; }
}

@media (max-width: 991.98px) {
  .error-number {
    font-size: 6rem;
  }
  
  .error-title {
    font-size: 2.5rem;
  }
  
  .error-description {
    font-size: 1rem;
  }
  
  .error-actions .btn {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
  }
  
  .error-actions .btn:last-child {
    margin-bottom: 0;
  }
}
</style> 
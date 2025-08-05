<template>
  <div class="team">
    <!-- Hero Section -->
    <section class="hero-section position-relative">
      <div class="hero-background">
        <img src="/images/team-heading.jpg" alt="Team Banner" class="w-100">
        <div class="hero-overlay"></div>
      </div>
      
      <div class="container position-relative">
        <div class="row min-vh-50 align-items-center">
          <div class="col-12 text-center">
            <div class="hero-content text-white">
              <h1 class="display-4 fw-bold mb-4">Our Team</h1>
              <p class="lead">Meet the talented members of Team Mavericks</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Content -->
    <section class="team-content py-5">
      <div class="container">
        <!-- Filter Tabs -->
        <div class="row mb-5">
          <div class="col-12">
            <ul class="nav nav-tabs justify-content-center" id="teamTabs" role="tablist">
              <li class="nav-item" role="presentation" v-for="(tab, index) in tabs" :key="index">
                <button 
                  class="nav-link" 
                  :class="{ active: activeTab === tab.id }"
                  :id="tab.id + '-tab'"
                  data-bs-toggle="tab"
                  :data-bs-target="'#' + tab.id"
                  type="button"
                  role="tab"
                  @click="setActiveTab(tab.id)"
                >
                  {{ tab.name }}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <!-- Tab Content -->
        <div class="tab-content" id="teamTabsContent">
          <!-- Current Members -->
          <div class="tab-pane fade" :class="{ 'show active': activeTab === 'current' }" id="current" role="tabpanel">
            <div class="row g-4">
              <div class="col-lg-3 col-md-6" v-for="(member, index) in currentMembers" :key="index">
                <div class="member-card text-center">
                  <div class="member-image mb-3">
                    <img :src="member.img_url || '/images/team-img/profile.png'" :alt="member.name" class="rounded-circle" width="200" height="200">
                    <div class="member-overlay">
                      <div class="member-social">
                        <a v-if="member.linkedin" :href="member.linkedin" class="social-link" target="_blank">
                          <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="#" class="social-link"><i class="fab fa-github"></i></a>
                        <a href="#" class="social-link"><i class="fas fa-envelope"></i></a>
                      </div>
                    </div>
                  </div>
                  <h5 class="mb-1">{{ member.name }}</h5>
                  <p class="text-primary mb-2">{{ member.designation }}</p>
                  <p class="text-muted small">{{ member.batch }} | {{ member.branch }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Batch 2025 -->
          <div class="tab-pane fade" :class="{ 'show active': activeTab === 'batch25' }" id="batch25" role="tabpanel">
            <div class="row g-4">
              <div class="col-lg-3 col-md-6" v-for="(member, index) in batch25Members" :key="index">
                <div class="member-card text-center">
                  <div class="member-image mb-3">
                    <img :src="member.img_url || '/images/team-img/profile.png'" :alt="member.name" class="rounded-circle" width="200" height="200">
                    <div class="member-overlay">
                      <div class="member-social">
                        <a v-if="member.linkedin" :href="member.linkedin" class="social-link" target="_blank">
                          <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="#" class="social-link"><i class="fab fa-github"></i></a>
                        <a href="#" class="social-link"><i class="fas fa-envelope"></i></a>
                      </div>
                    </div>
                  </div>
                  <h5 class="mb-1">{{ member.name }}</h5>
                  <p class="text-muted small">{{ member.branch }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Batch 2026 -->
          <div class="tab-pane fade" :class="{ 'show active': activeTab === 'batch26' }" id="batch26" role="tabpanel">
            <div class="row g-4">
              <div class="col-lg-3 col-md-6" v-for="(member, index) in batch26Members" :key="index">
                <div class="member-card text-center">
                  <div class="member-image mb-3">
                    <img :src="member.img_url || '/images/team-img/profile.png'" :alt="member.name" class="rounded-circle" width="200" height="200">
                    <div class="member-overlay">
                      <div class="member-social">
                        <a v-if="member.linkedin" :href="member.linkedin" class="social-link" target="_blank">
                          <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="#" class="social-link"><i class="fab fa-github"></i></a>
                        <a href="#" class="social-link"><i class="fas fa-envelope"></i></a>
                      </div>
                    </div>
                  </div>
                  <h5 class="mb-1">{{ member.name }}</h5>
                  <p class="text-primary mb-2">{{ member.designation }}</p>
                  <p class="text-muted small">{{ member.batch }} | {{ member.branch }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Batch 2027 -->
          <div class="tab-pane fade" :class="{ 'show active': activeTab === 'batch27' }" id="batch27" role="tabpanel">
            <div class="row g-4">
              <div class="col-lg-3 col-md-6" v-for="(member, index) in batch27Members" :key="index">
                <div class="member-card text-center">
                  <div class="member-image mb-3">
                    <img :src="member.img_url || '/images/team-img/profile.png'" :alt="member.name" class="rounded-circle" width="200" height="200">
                    <div class="member-overlay">
                      <div class="member-social">
                        <a v-if="member.linkedin" :href="member.linkedin" class="social-link" target="_blank">
                          <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="#" class="social-link"><i class="fab fa-github"></i></a>
                        <a href="#" class="social-link"><i class="fas fa-envelope"></i></a>
                      </div>
                    </div>
                  </div>
                  <h5 class="mb-1">{{ member.name }}</h5>
                  <p class="text-primary mb-2">{{ member.designation }}</p>
                  <p class="text-muted small">{{ member.branch }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Diploma Members -->
          <div class="tab-pane fade" :class="{ 'show active': activeTab === 'diploma' }" id="diploma" role="tabpanel">
            <div class="row g-4">
              <div class="col-lg-3 col-md-6" v-for="(member, index) in diplomaMembers" :key="index">
                <div class="member-card text-center">
                  <div class="member-image mb-3">
                    <img :src="member.ProfessionalPhotoURL || '/images/team-img/profile.png'" :alt="member.name" class="rounded-circle" width="200" height="200">
                    <div class="member-overlay">
                      <div class="member-social">
                        <a v-if="member.LinkedInURL" :href="member.LinkedInURL" class="social-link" target="_blank">
                          <i class="fab fa-linkedin"></i>
                        </a>
                        <a href="#" class="social-link"><i class="fas fa-envelope"></i></a>
                      </div>
                    </div>
                  </div>
                  <h5 class="mb-1">{{ member.name }}</h5>
                  <p class="text-primary mb-2">{{ member.status }}</p>
                  <p class="text-muted small">{{ member.branch }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Alumni -->
          <div class="tab-pane fade" :class="{ 'show active': activeTab === 'alumni' }" id="alumni" role="tabpanel">
            <div class="row g-4">
              <div class="col-lg-3 col-md-6" v-for="(member, index) in alumniMembers" :key="index">
                <div class="member-card text-center">
                  <div class="member-image mb-3">
                    <img :src="member.img_url" :alt="member.name" class="rounded-circle" width="200" height="200">
                    <div class="member-overlay">
                      <div class="member-social">
                        <a href="#" class="social-link"><i class="fab fa-linkedin"></i></a>
                        <a href="#" class="social-link"><i class="fab fa-github"></i></a>
                        <a href="#" class="social-link"><i class="fas fa-envelope"></i></a>
                      </div>
                    </div>
                  </div>
                  <h5 class="mb-1">{{ member.name }}</h5>
                  <p class="text-primary mb-2">Alumni</p>
                  <p class="text-muted small">{{ member.batch }} | {{ member.branch }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Stats -->
    <section class="team-stats py-5 bg-light">
      <div class="container">
        <div class="row text-center">
          <div class="col-lg-3 col-md-6 mb-4" v-for="(stat, index) in teamStats" :key="index">
            <div class="stat-card">
              <div class="stat-number mb-2">
                <span class="display-4 fw-bold text-primary">{{ stat.number }}</span>
              </div>
              <h5 class="mb-1">{{ stat.title }}</h5>
              <p class="text-muted">{{ stat.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Join Team Section -->
    <section class="join-team py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h2 class="display-5 fw-bold mb-4">Join Our Team</h2>
            <p class="lead text-muted mb-4">
              Are you passionate about robotics and technology? We're always looking for 
              talented individuals to join our team and contribute to innovative projects.
            </p>
            <ul class="list-unstyled">
              <li class="mb-3">
                <i class="fas fa-check-circle text-primary me-2"></i>
                Work on cutting-edge robotics projects
              </li>
              <li class="mb-3">
                <i class="fas fa-check-circle text-primary me-2"></i>
                Learn from experienced team members
              </li>
              <li class="mb-3">
                <i class="fas fa-check-circle text-primary me-2"></i>
                Participate in competitions and events
              </li>
              <li class="mb-3">
                <i class="fas fa-check-circle text-primary me-2"></i>
                Build your portfolio and skills
              </li>
            </ul>
            <router-link to="/contact" class="btn btn-primary btn-lg">
              Get In Touch
            </router-link>
          </div>
          <div class="col-lg-6">
            <img src="/images/team-heading.jpg" alt="Join Team" class="img-fluid rounded shadow">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { 
  members, 
  batch25_members, 
  batch26_members, 
  batch27_members, 
  diploma_members, 
  members_old 
} from '@/data'

export default {
  name: 'Team',
  setup() {
    const activeTab = ref('current')

    const tabs = [
      { id: 'current', name: 'Current Members' },
      { id: 'batch25', name: 'Batch 2025' },
      { id: 'batch26', name: 'Batch 2026' },
      { id: 'batch27', name: 'Batch 2027' },
      { id: 'diploma', name: 'Diploma Members' },
      { id: 'alumni', name: 'Alumni' }
    ]

    const currentMembers = computed(() => members)
    const batch25Members = computed(() => batch25_members)
    const batch26Members = computed(() => batch26_members)
    const batch27Members = computed(() => batch27_members)
    const diplomaMembers = computed(() => diploma_members)
    const alumniMembers = computed(() => members_old)

    const teamStats = [
      {
        number: '50+',
        title: 'Active Members',
        description: 'Dedicated students working on projects'
      },
      {
        number: '15+',
        title: 'Projects Completed',
        description: 'Successful robotics and IoT projects'
      },
      {
        number: '10+',
        title: 'Competitions Won',
        description: 'National and international recognition'
      },
      {
        number: '5+',
        title: 'Years Experience',
        description: 'Building innovative solutions'
      }
    ]

    const setActiveTab = (tabId) => {
      activeTab.value = tabId
    }

    return {
      activeTab,
      tabs,
      currentMembers,
      batch25Members,
      batch26Members,
      batch27Members,
      diplomaMembers,
      alumniMembers,
      teamStats,
      setActiveTab
    }
  }
}
</script>

<style scoped>
.hero-section {
  position: relative;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.hero-background img {
  object-fit: cover;
  height: 100%;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
}

.hero-content {
  z-index: 1;
}

.nav-tabs {
  border-bottom: 2px solid #e9ecef;
}

.nav-tabs .nav-link {
  border: none;
  border-radius: 0;
  padding: 15px 30px;
  font-weight: 500;
  color: #6c757d;
  transition: all 0.3s ease;
}

.nav-tabs .nav-link:hover {
  color: #007bff;
  background-color: transparent;
}

.nav-tabs .nav-link.active {
  color: #007bff;
  background-color: transparent;
  border-bottom: 3px solid #007bff;
}

.member-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  overflow: hidden;
}

.member-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
}

.member-image {
  position: relative;
  display: inline-block;
}

.member-image img {
  object-fit: cover;
  border: 4px solid #007bff;
  transition: transform 0.3s ease;
}

.member-card:hover .member-image img {
  transform: scale(1.05);
}

.member-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 123, 255, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.member-card:hover .member-overlay {
  opacity: 1;
}

.member-social {
  display: flex;
  gap: 15px;
}

.social-link {
  color: white;
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.social-link:hover {
  color: white;
  transform: scale(1.2);
}

.stat-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.tab-content {
  min-height: 400px;
}
</style> 
<template>
  <div class="dashboard">
    <!-- Dashboard Header -->
    <section class="dashboard-header py-4 bg-primary text-white">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-8">
            <h1 class="h3 mb-0">Dashboard</h1>
            <p class="mb-0">Welcome back, {{ authStore.user?.username || 'User' }}!</p>
          </div>
          <div class="col-md-4 text-md-end">
            <div class="user-info">
              <span class="badge bg-light text-dark me-2">{{ authStore.user?.role || 'User' }}</span>
              <small>{{ new Date().toLocaleDateString() }}</small>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Dashboard Content -->
    <section class="dashboard-content py-5">
      <div class="container">
        <!-- Stats Cards -->
        <div class="row mb-5">
          <div class="col-lg-3 col-md-6 mb-4" v-for="(stat, index) in stats" :key="index">
            <div class="stat-card">
              <div class="stat-icon">
                <i :class="stat.icon" class="text-primary"></i>
              </div>
              <div class="stat-content">
                <h3 class="stat-number">{{ stat.number }}</h3>
                <p class="stat-label">{{ stat.label }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="row mb-5">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h5 class="mb-0">Quick Actions</h5>
              </div>
              <div class="card-body">
                <div class="row g-3">
                  <div class="col-md-3" v-for="(action, index) in quickActions" :key="index">
                    <button class="btn btn-outline-primary w-100" @click="handleQuickAction(action.action)">
                      <i :class="action.icon" class="me-2"></i>
                      {{ action.label }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Content Tabs -->
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs" role="tablist">
                  <li class="nav-item" v-for="(tab, index) in tabs" :key="index">
                    <button 
                      class="nav-link" 
                      :class="{ active: activeTab === tab.id }"
                      @click="setActiveTab(tab.id)"
                    >
                      {{ tab.name }}
                    </button>
                  </li>
                </ul>
              </div>
              <div class="card-body">
                <!-- Projects Tab -->
                <div v-if="activeTab === 'projects'" class="tab-content">
                  <div class="d-flex justify-content-between align-items-center mb-4">
                    <h5>Recent Projects</h5>
                    <button class="btn btn-primary btn-sm">
                      <i class="fas fa-plus me-1"></i>Add Project
                    </button>
                  </div>
                  <div class="table-responsive">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Project Name</th>
                          <th>Status</th>
                          <th>Team Size</th>
                          <th>Progress</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(project, index) in projects" :key="index">
                          <td>{{ project.title }}</td>
                          <td>
                            <span class="badge" :class="getStatusClass(project.status)">
                              {{ project.status }}
                            </span>
                          </td>
                          <td>{{ project.teamSize }}</td>
                          <td>
                            <div class="progress" style="height: 6px;">
                              <div 
                                class="progress-bar" 
                                :style="{ width: project.progress + '%' }"
                              ></div>
                            </div>
                            <small class="text-muted">{{ project.progress }}%</small>
                          </td>
                          <td>
                            <button class="btn btn-sm btn-outline-primary me-1">
                              <i class="fas fa-edit"></i>
                            </button>
                            <button class="btn btn-sm btn-outline-danger">
                              <i class="fas fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <!-- Team Members Tab -->
                <div v-if="activeTab === 'members'" class="tab-content">
                  <div class="d-flex justify-content-between align-items-center mb-4">
                    <h5>Team Members</h5>
                    <button class="btn btn-primary btn-sm">
                      <i class="fas fa-user-plus me-1"></i>Add Member
                    </button>
                  </div>
                  <div class="row g-4">
                    <div class="col-lg-4 col-md-6" v-for="(member, index) in teamMembers" :key="index">
                      <div class="member-card">
                        <div class="member-avatar">
                          <img :src="member.img_url" :alt="member.name" class="rounded-circle">
                        </div>
                        <div class="member-info">
                          <h6 class="mb-1">{{ member.name }}</h6>
                          <p class="text-muted mb-2">{{ member.designation }}</p>
                          <p class="text-muted small mb-2">{{ member.batch }} | {{ member.branch }}</p>
                          <div class="member-actions">
                            <button class="btn btn-sm btn-outline-primary me-1">
                              <i class="fas fa-envelope"></i>
                            </button>
                            <button class="btn btn-sm btn-outline-secondary me-1">
                              <i class="fas fa-edit"></i>
                            </button>
                            <button class="btn btn-sm btn-outline-danger">
                              <i class="fas fa-trash"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Events Tab -->
                <div v-if="activeTab === 'events'" class="tab-content">
                  <div class="d-flex justify-content-between align-items-center mb-4">
                    <h5>Upcoming Events</h5>
                    <button class="btn btn-primary btn-sm">
                      <i class="fas fa-calendar-plus me-1"></i>Add Event
                    </button>
                  </div>
                  <div class="row g-4">
                    <div class="col-lg-6" v-for="(event, index) in events" :key="index">
                      <div class="event-card">
                        <div class="event-date">
                          <div class="date-day">{{ formatDate(event.date).day }}</div>
                          <div class="date-month">{{ formatDate(event.date).month }}</div>
                        </div>
                        <div class="event-details">
                          <h6 class="mb-2">{{ event.title }}</h6>
                          <p class="text-muted mb-2">{{ event.description }}</p>
                          <span class="badge" :class="getStatusClass(event.status)">
                            {{ event.status }}
                          </span>
                        </div>
                        <div class="event-actions">
                          <button class="btn btn-sm btn-outline-primary me-1">
                            <i class="fas fa-edit"></i>
                          </button>
                          <button class="btn btn-sm btn-outline-danger">
                            <i class="fas fa-trash"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Analytics Tab -->
                <div v-if="activeTab === 'analytics'" class="tab-content">
                  <div class="row">
                    <div class="col-lg-6 mb-4">
                      <div class="card">
                        <div class="card-header">
                          <h6 class="mb-0">Project Status Distribution</h6>
                        </div>
                        <div class="card-body">
                          <div class="chart-placeholder text-center py-4">
                            <i class="fas fa-chart-pie fa-3x text-muted mb-3"></i>
                            <p class="text-muted">Chart would be displayed here</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-lg-6 mb-4">
                      <div class="card">
                        <div class="card-header">
                          <h6 class="mb-0">Monthly Activity</h6>
                        </div>
                        <div class="card-body">
                          <div class="chart-placeholder text-center py-4">
                            <i class="fas fa-chart-line fa-3x text-muted mb-3"></i>
                            <p class="text-muted">Chart would be displayed here</p>
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
      </div>
    </section>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { iot_projects, events, members } from '@/data'

export default {
  name: 'Dashboard',
  setup() {
    const authStore = useAuthStore()
    const activeTab = ref('projects')

    const stats = [
      {
        icon: 'fas fa-project-diagram fa-2x',
        number: '15',
        label: 'Active Projects'
      },
      {
        icon: 'fas fa-users fa-2x',
        number: '50+',
        label: 'Team Members'
      },
      {
        icon: 'fas fa-calendar fa-2x',
        number: '8',
        label: 'Upcoming Events'
      },
      {
        icon: 'fas fa-trophy fa-2x',
        number: '12',
        label: 'Competitions Won'
      }
    ]

    const quickActions = [
      {
        icon: 'fas fa-plus',
        label: 'Add Project',
        action: 'add-project'
      },
      {
        icon: 'fas fa-user-plus',
        label: 'Add Member',
        action: 'add-member'
      },
      {
        icon: 'fas fa-calendar-plus',
        label: 'Add Event',
        action: 'add-event'
      },
      {
        icon: 'fas fa-download',
        label: 'Export Data',
        action: 'export-data'
      }
    ]

    const tabs = [
      { id: 'projects', name: 'Projects' },
      { id: 'members', name: 'Team Members' },
      { id: 'events', name: 'Events' },
      { id: 'analytics', name: 'Analytics' }
    ]

    const projects = computed(() => [
      ...iot_projects,
      {
        title: 'Autonomous Line Follower',
        status: 'In Progress',
        teamSize: '3 members',
        progress: 75
      },
      {
        title: 'Smart Irrigation System',
        status: 'Completed',
        teamSize: '4 members',
        progress: 100
      },
      {
        title: 'Gesture Controlled Robot',
        status: 'Planning',
        teamSize: '5 members',
        progress: 25
      }
    ])

    const teamMembers = computed(() => members.slice(0, 6))
    const eventsData = computed(() => events)

    const setActiveTab = (tabId) => {
      activeTab.value = tabId
    }

    const getStatusClass = (status) => {
      switch (status) {
        case 'Completed':
          return 'bg-success'
        case 'In Progress':
          return 'bg-warning'
        case 'Planning':
          return 'bg-info'
        case 'Upcoming':
          return 'bg-primary'
        default:
          return 'bg-secondary'
      }
    }

    const formatDate = (dateString) => {
      const date = new Date(dateString)
      return {
        day: date.getDate(),
        month: date.toLocaleDateString('en-US', { month: 'short' })
      }
    }

    const handleQuickAction = (action) => {
      console.log('Quick action:', action)
      // Handle different quick actions
    }

    onMounted(() => {
      // Initialize dashboard data
      console.log('Dashboard mounted')
    })

    return {
      authStore,
      activeTab,
      stats,
      quickActions,
      tabs,
      projects,
      teamMembers,
      events: eventsData,
      setActiveTab,
      getStatusClass,
      formatDate,
      handleQuickAction
    }
  }
}
</script>

<style scoped>
.dashboard-header {
  background: linear-gradient(135deg, #007bff 0%, #0056b3 100%);
}

.stat-card {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-icon {
  margin-right: 1rem;
}

.stat-number {
  font-size: 2rem;
  font-weight: bold;
  margin: 0;
  color: #007bff;
}

.stat-label {
  margin: 0;
  color: #6c757d;
  font-size: 0.9rem;
}

.member-card {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
}

.member-card:hover {
  transform: translateY(-3px);
}

.member-avatar {
  margin-right: 1rem;
}

.member-avatar img {
  width: 60px;
  height: 60px;
  object-fit: cover;
}

.member-info {
  flex: 1;
}

.member-actions {
  margin-top: 0.5rem;
}

.event-card {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  transition: transform 0.3s ease;
}

.event-card:hover {
  transform: translateY(-3px);
}

.event-date {
  margin-right: 1rem;
  text-align: center;
  min-width: 60px;
}

.date-day {
  font-size: 1.5rem;
  font-weight: bold;
  color: #007bff;
}

.date-month {
  font-size: 0.8rem;
  color: #6c757d;
  text-transform: uppercase;
}

.event-details {
  flex: 1;
}

.event-actions {
  margin-left: 1rem;
}

.chart-placeholder {
  background: #f8f9fa;
  border-radius: 10px;
}

.nav-tabs .nav-link {
  border: none;
  color: #6c757d;
  font-weight: 500;
}

.nav-tabs .nav-link.active {
  color: #007bff;
  border-bottom: 3px solid #007bff;
  background: none;
}

.table th {
  border-top: none;
  font-weight: 600;
  color: #495057;
}

.progress {
  background-color: #e9ecef;
}

.progress-bar {
  background-color: #007bff;
}
</style> 
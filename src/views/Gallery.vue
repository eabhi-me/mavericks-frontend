<template>
  <div class="gallery">
    <!-- Hero Section -->
    <section class="hero-section position-relative">
      <div class="hero-background">
        <img src="https://res.cloudinary.com/demo/image/upload/v1/samples/people/bicycle.jpg" alt="Gallery Banner" class="w-100">
        <div class="hero-overlay"></div>
      </div>
      
      <div class="container position-relative">
        <div class="row min-vh-50 align-items-center">
          <div class="col-12 text-center">
            <div class="hero-content text-white">
              <h1 class="display-4 fw-bold mb-4">Gallery</h1>
              <p class="lead">Capturing moments of innovation and creativity</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Gallery Content -->
    <section class="gallery-content py-5">
      <div class="container">
        <!-- Filter Buttons -->
        <div class="row mb-5">
          <div class="col-12">
            <div class="filter-buttons text-center">
              <div class="btn-group" role="group">
                <button 
                  type="button" 
                  class="btn"
                  :class="activeFilter === 'all' ? 'btn-primary' : 'btn-outline-primary'"
                  @click="setFilter('all')"
                >
                  All
                </button>
                <button 
                  type="button" 
                  class="btn"
                  :class="activeFilter === 'events' ? 'btn-primary' : 'btn-outline-primary'"
                  @click="setFilter('events')"
                >
                  Events
                </button>
                <button 
                  type="button" 
                  class="btn"
                  :class="activeFilter === 'projects' ? 'btn-primary' : 'btn-outline-primary'"
                  @click="setFilter('projects')"
                >
                  Projects
                </button>
                <button 
                  type="button" 
                  class="btn"
                  :class="activeFilter === 'workshops' ? 'btn-primary' : 'btn-outline-primary'"
                  @click="setFilter('workshops')"
                >
                  Workshops
                </button>
                <button 
                  type="button" 
                  class="btn"
                  :class="activeFilter === 'team' ? 'btn-primary' : 'btn-outline-primary'"
                  @click="setFilter('team')"
                >
                  Team
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Gallery Grid -->
        <div class="row g-4">
          <div 
            class="col-lg-4 col-md-6" 
            v-for="(image, index) in filteredImages" 
            :key="index"
          >
            <div class="gallery-item" @click="openLightbox(index)">
              <div class="gallery-image">
                <img :src="image.url" :alt="image.title" class="w-100">
                <div class="gallery-overlay">
                  <div class="gallery-info">
                    <h6 class="text-white mb-1">{{ image.title }}</h6>
                    <p class="text-white-50 small mb-0">{{ image.description }}</p>
                    <span class="badge bg-primary">{{ image.category }}</span>
                  </div>
                  <div class="gallery-actions">
                    <i class="fas fa-search-plus text-white"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- No Images Message -->
        <div v-if="filteredImages.length === 0" class="text-center py-5">
          <i class="fas fa-images fa-4x text-muted mb-3"></i>
          <h4 class="text-muted">No images found</h4>
          <p class="text-muted">No images match the selected filter criteria.</p>
        </div>
      </div>
    </section>

    <!-- Lightbox Modal -->
    <div class="lightbox-modal" v-if="showLightbox" @click="closeLightbox">
      <div class="lightbox-content" @click.stop>
        <button class="lightbox-close" @click="closeLightbox">
          <i class="fas fa-times"></i>
        </button>
        
        <div class="lightbox-navigation">
          <button class="nav-btn prev" @click="previousImage" v-if="filteredImages.length > 1">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button class="nav-btn next" @click="nextImage" v-if="filteredImages.length > 1">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
        
        <div class="lightbox-image-container">
          <img :src="currentImage.url" :alt="currentImage.title" class="lightbox-image">
        </div>
        
        <div class="lightbox-info">
          <h4 class="text-white mb-2">{{ currentImage.title }}</h4>
          <p class="text-white-50 mb-2">{{ currentImage.description }}</p>
          <div class="lightbox-meta">
            <span class="badge bg-primary me-2">{{ currentImage.category }}</span>
            <span class="text-white-50">{{ currentImage.date }}</span>
          </div>
        </div>
        
        <div class="lightbox-counter">
          {{ currentImageIndex + 1 }} / {{ filteredImages.length }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { gallery } from '@/data'

export default {
  name: 'Gallery',
  setup() {
    const activeFilter = ref('all')
    const showLightbox = ref(false)
    const currentImageIndex = ref(0)

    // Use only the Cloudinary data from the data file
    const images = ref(gallery)

    const filteredImages = computed(() => {
      if (activeFilter.value === 'all') {
        return images.value
      }
      return images.value.filter(image => image.category === activeFilter.value)
    })

    const currentImage = computed(() => {
      return filteredImages.value[currentImageIndex.value] || {}
    })

    const setFilter = (filter) => {
      activeFilter.value = filter
      currentImageIndex.value = 0
    }

    const openLightbox = (index) => {
      currentImageIndex.value = index
      showLightbox.value = true
      document.body.style.overflow = 'hidden'
    }

    const closeLightbox = () => {
      showLightbox.value = false
      document.body.style.overflow = 'auto'
    }

    const nextImage = () => {
      currentImageIndex.value = (currentImageIndex.value + 1) % filteredImages.value.length
    }

    const previousImage = () => {
      currentImageIndex.value = currentImageIndex.value === 0 
        ? filteredImages.value.length - 1 
        : currentImageIndex.value - 1
    }

    return {
      activeFilter,
      showLightbox,
      currentImageIndex,
      images,
      filteredImages,
      currentImage,
      setFilter,
      openLightbox,
      closeLightbox,
      nextImage,
      previousImage
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

.filter-buttons .btn-group {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 25px;
  overflow: hidden;
}

.filter-buttons .btn {
  border-radius: 0;
  border: none;
  padding: 10px 20px;
}

.filter-buttons .btn:first-child {
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
}

.filter-buttons .btn:last-child {
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
}

.gallery-item {
  cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: translateY(-5px);
}

.gallery-image {
  position: relative;
  height: 250px;
  overflow: hidden;
}

.gallery-image img {
  object-fit: cover;
  height: 100%;
  width: 100%;
  transition: transform 0.3s ease;
}

.gallery-item:hover .gallery-image img {
  transform: scale(1.1);
}

.gallery-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.gallery-item:hover .gallery-overlay {
  opacity: 1;
}

.gallery-actions {
  text-align: center;
  font-size: 1.5rem;
}

/* Lightbox Styles */
.lightbox-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.lightbox-content {
  position: relative;
  max-width: 90%;
  max-height: 90%;
}

.lightbox-close {
  position: absolute;
  top: -50px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10000;
}

.lightbox-navigation {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 10000;
}

.nav-btn {
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  padding: 15px;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s ease;
}

.nav-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

.lightbox-image-container {
  text-align: center;
}

.lightbox-image {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 10px;
}

.lightbox-info {
  text-align: center;
  margin-top: 20px;
}

.lightbox-counter {
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1.1rem;
}

@media (max-width: 768px) {
  .lightbox-navigation {
    padding: 0 10px;
  }
  
  .nav-btn {
    padding: 10px;
  }
  
  .lightbox-close {
    top: -40px;
    font-size: 1.5rem;
  }
}
</style> 
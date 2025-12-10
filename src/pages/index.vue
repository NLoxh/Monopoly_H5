<template>
  <div class="app">
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="logo">VueSpace</div>
        <div class="nav-links">
          <a href="#" class="nav-link">首页</a>
          <a href="#" class="nav-link">关于</a>
          <a href="#" class="nav-link">服务</a>
          <a href="#" class="nav-link">联系</a>
        </div>
      </div>
    </nav>

    <!-- 英雄区域 -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">欢迎来到未来</h1>
        <p class="hero-subtitle">探索无限可能，创造精彩体验</p>
        <button class="cta-button" @click="handleClick">开始探索</button>
      </div>
    </section>

    <!-- 特性卡片 -->
    <section class="features">
      <h2 class="section-title">核心特性</h2>
      <div class="card-container">
        <div class="feature-card" v-for="feature in features" :key="feature.id" @click="goUrl(feature.url)">
          <div class="card-icon">
            <i :class="feature.icon"></i>
          </div>
          <h3>{{ feature.title }}</h3>
          <p>{{ feature.description }}</p>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="footer-content">
        <p>&copy; 2024 VueSpace. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
// 通过 Vite 资源导入为 URL，移除路径前的空格并加上 ?url
import AppH5 from '@/assets/costco-food-court-screen-release.apk?url'
import App from '@/assets/costco-food-court-cater-frontend-release.apk?url'

const features = ref([
  {
    id: 1,
    icon: 'fas fa-rocket',
    title: '餐吧备餐H5',
    url: AppH5,
    description: '采用最新技术栈，提供极致的用户体验',
  },
  {
    id: 2,
    icon: 'fas fa-shield-alt',
    title: '餐吧双屏',
    url: App,
    description: '企业级安全保障，让您的数据更安全',
  },
  {
    id: 3,
    icon: 'fas fa-chart-line',
    title: '数据分析',
    url:'',
    description: '强大的数据分析能力，助力业务增长',
  },
])

const handleClick = () => {
  console.log('开始探索！')
}
const goUrl = (url) => {
  window.open(url, '_blank')
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  background: linear-gradient(45deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #333;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #667eea;
}

.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  padding: 2rem;
}

.hero-title {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  animation: fadeInUp 1s ease;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  animation: fadeInUp 1s ease 0.2s;
  animation-fill-mode: both;
}

.cta-button {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  border: none;
  border-radius: 50px;
  background: white;
  color: #667eea;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  animation: fadeInUp 1s ease 0.4s;
  animation-fill-mode: both;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.features {
  padding: 5rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
}

.card-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.feature-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.card-icon {
  font-size: 2.5rem;
  color: #667eea;
  margin-bottom: 1rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

.footer {
  background: #f8f9fa;
  padding: 2rem;
  text-align: center;
}

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

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }
}
</style>

<!-- 添加Font Awesome图标库 -->
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>

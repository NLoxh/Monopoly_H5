<template>
  <div class="not-found">
    <div class="content">
      <h1 class="error-code">404</h1>
      <h2 class="message">页面未找到</h2>
      <p class="description">抱歉，您访问的页面不存在或已被移除</p>
      <router-link to="/" class="home-link">
        返回首页
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound',
}
</script>

<style scoped>
.not-found {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  font-family: Arial, sans-serif;
}

.content {
  text-align: center;
  animation: fadeIn 0.8s ease-in-out;
}

.error-code {
  font-size: 120px;
  font-weight: bold;
  color: #2c3e50;
  margin: 0;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  animation: pulse 2s infinite;
}

.message {
  font-size: 32px;
  color: #34495e;
  margin: 20px 0;
}

.description {
  font-size: 18px;
  color: #7f8c8d;
  margin-bottom: 30px;
}

.home-link {
  display: inline-block;
  padding: 12px 30px;
  background-color: #3498db;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  transition: all 0.3s ease;
  font-weight: bold;
}

.home-link:hover {
  background-color: #2980b9;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

@media (max-width: 768px) {
  .error-code {
    font-size: 80px;
  }
  .message {
    font-size: 24px;
  }
  .description {
    font-size: 16px;
  }
}
</style>

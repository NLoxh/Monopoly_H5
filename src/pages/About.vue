<template>
  <section class="page">
    <h2>关于</h2>
    <p>使用 Vue 3、Vite、TypeScript、Pinia 和 Vue Router 构建。</p>
    <ul class="list">
      <li>移动端 viewport 与基础样式</li>
      <li>路由示例：/ 与 /about</li>
      <li>状态示例：Pinia 计数器</li>
    </ul>
  </section>
</template>

<script setup>
definePage({
  alias: ['/n/:name'], // 路由别名
  meta: {
    requiresAuth: true, // 路由元数据
  },
})
</script>

<style scoped>
.page {
  max-width: 720px;
  margin: 0 auto;
}
h2 {
  margin: 0 0 12px;
  font-size: 18px;
}
.list {
  padding-left: 20px;
}
@media (min-width: 768px) {
  h2 {
    font-size: 20px;
  }
}
</style>

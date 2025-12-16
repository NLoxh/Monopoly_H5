<template>
  <section class="page">
    <h2>首页</h2>
    <p>这是一个面向 H5 的 Vue 3 + Vite 脚手架。</p>
    <div class="card">
      <div class="row">
        <span>计数：</span>
        <strong>{{ counter.count }}</strong>
      </div>
      <div class="row gap">
        <button class="btn" @click="counter.inc()">+1</button>
        <button class="btn outline" @click="counter.reset()">重置</button>
      </div>
    </div>
  </section>
  
</template>

<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
const counter = useCounterStore()
</script>

<style scoped>
.page { max-width: 720px; margin: 0 auto; }
h2 { margin: 0 0 12px; font-size: 18px; }
.card {
  background: #fff;
  border: 1px solid #eee;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.04);
}
.row { display: flex; align-items: center; justify-content: space-between; }
.row.gap { gap: 12px; }
.btn {
  -webkit-tap-highlight-color: transparent;
  appearance: none;
  border: none;
  border-radius: 10px;
  padding: 10px 14px;
  background: #1f7aec;
  color: #fff;
  font-size: 15px;
}
.btn.outline { background: #fff; color: #1f7aec; border: 1px solid #1f7aec; }
@media (min-width: 768px) {
  h2 { font-size: 20px; }
}
</style>

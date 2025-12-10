import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(async (_to, _from, next) => {
  next()
})

router.afterEach((_to) => {})

export default router

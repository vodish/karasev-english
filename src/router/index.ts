import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/routes'
import { useMenuStore } from '@/stores/store.menu'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes.map(({ path, src }) => ({
    path,
    component: () => import(/* @vite-ignore */ src)
  })),
})

// обработчик навигации
router.beforeEach(to => useMenuStore().click(to.fullPath))

export default router 

import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/routes'
import { useMenuStore } from '@/stores/store.menu'

const routeList = routes.map(({ path, component }) => ({ path, component }))

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeList
})

// обработчик навигации
router.beforeEach(to => useMenuStore().click(to.matched[0].path))

export default router 

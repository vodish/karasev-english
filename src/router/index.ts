import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/routes'
import { useMenuStore } from '@/stores/store.menu'

const routeList = routes.map(({ path, component }) => ({ path, component }))

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routeList
})

// обработчик навигации
router.beforeEach(to => {
  window.scrollTo(0, 0);
  useMenuStore().click(to.matched[0].path)
})

export default router 

import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { pages } from '@/router/pagesPath'

const routes: RouteRecordRaw[] = pages.map(
  ({ path, name, src }) => ({
    path,
    name,
    component: () => import(src)
  })
)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

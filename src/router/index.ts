import { createRouter, createWebHistory } from 'vue-router'
import { routes } from '@/router/routes'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes.map(({ path, name, src }) => ({
    path,
    name,
    component: () => import(/* @vite-ignore */ src)
  })),
})

export default router 

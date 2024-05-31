import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('@/pages/PageMain.vue'), },
    { path: '/subject/what', component: () => import('@/pages/subjects/PageSubjectWhat.vue'), },
    
  ],
})

export default router

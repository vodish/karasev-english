import './assets/css.main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { useMenuStore } from './stores/store.menu'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(createPinia())
app.use(router)

const menu = useMenuStore()
router.beforeEach(to => {
  menu.click(to.fullPath)
})

app.mount('#app')

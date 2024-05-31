import { ref } from 'vue'
import { defineStore } from 'pinia'
import { routes } from '../router/routes'

export const useMenuStore = defineStore('menu', () => {
  const menu = ref(routes)

  function byCategories() {
    menu.value.reduce(el => el, [])
  }

  function getByUrl(url: string) {
    return menu.value.filter(el => el.path == url)
  }

  return { menu, byCategories, getByUrl }
})

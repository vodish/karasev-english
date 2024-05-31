import { ref } from 'vue'
import { defineStore } from 'pinia'
import { pages } from '../router/pagesPath'

export const useMenuStore = defineStore('menu', () => {
  const menu = ref(pages)

  function byCategories() {
    menu.value.reduce(el => el, [])
  }

  function getByUrl(url: string) {
    return menu.value.filter(el => el.path == url)
  }

  return { menu, byCategories, getByUrl }
})

import { ref } from 'vue'
import { defineStore } from 'pinia'
import { menuSource } from './menuSource'

export type TMenu = {
  category: string
  url: string
  component: string
  name: string
}

export const useMenuStore = defineStore('menu', () => {
  const menu = ref(menuSource)

  function byCategories() {
    menu.value.reduce( el => el, [] )
  }

  function getByUrl(url: string) {
    return menu.value.filter(el => el.url == url)
  }

  return { menu, byCategories, getByUrl }
})

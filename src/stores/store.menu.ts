import { ref } from 'vue'
import { defineStore } from 'pinia'
import { routes } from '../router/routes'


const categoryList = new Map
categoryList.set('page', 'Страницы')
categoryList.set('subject', 'Субъекты')
categoryList.set('verb', 'Глаголы')
categoryList.set('sentence', 'Предложения')


export const useMenuStore = defineStore('menu', () => {
  const menu = ref(routes)
  const category = ref(menu.value[0].category);
  const title = ref(menu.value[0].title);

  const pathMap = new Map;
  for (let i = 0; i < menu.value.length; i++) {
    pathMap.set(menu.value[i].path, i);
  }

  function click(path: string) {
    const el = menu.value[pathMap.get(path)]

    category.value = categoryList.has(el.category) ? categoryList.get(el.category) : el.category
    title.value = el.title
    document.title = el.title
  }


  function filterCategory(catName: string) {
    return menu.value.filter(el => el.category === catName)
  }


  return { menu, category, title, filterCategory, click }
})

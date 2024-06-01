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
  const show = ref(true)
  const category = ref(menu.value[0].category);
  const title = ref(menu.value[0].title);
  const next = ref(menu.value[1].path);
  const back = ref('');

  const pathMap = new Map;
  for (let i = 0; i < menu.value.length; i++) {
    pathMap.set(menu.value[i].path, i);
  }

  function click(path: string) {
    const key = pathMap.get(path)
    const el = menu.value[key]

    category.value = categoryList.get(el.category) || el.category
    title.value = el.title
    document.title = el.title
    next.value = menu.value[key + 1] ? menu.value[key + 1].path : ''
    back.value = menu.value[key - 1] ? menu.value[key - 1].path : ''
  }


  function filterCategory(catName: string) {
    return menu.value.filter(el => el.category === catName)
  }


  return {
    menu, show, category, title, next, back,
    click, filterCategory,
  }
})

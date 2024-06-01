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
  const catList: { [key: string]: string[] } = {};

  for (let i = 0, el; i < menu.value.length; i++) {
    el = menu.value[i]
    pathMap.set(el.path, i)

    catList[el.category] = catList[el.category] || [];
    catList[el.category].push(el.path)
  }

  const points = ref(catList[category.value]);
  // console.log(catList)

  
  function click(path: string) {
    const key = pathMap.get(path)
    const el = menu.value[key]

    category.value = categoryList.get(el.category) || el.category
    title.value = el.title
    document.title = el.title
    next.value = menu.value[key + 1] ? menu.value[key + 1].path : ''
    back.value = menu.value[key - 1] ? menu.value[key - 1].path : ''
    points.value = catList[el.category];
  }


  function filterCategory(catName: string) {
    return menu.value.filter(el => el.category === catName)
  }


  return {
    menu, show, category, title, next, back, points,
    click, filterCategory,
  }
})

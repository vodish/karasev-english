import { ref } from 'vue'
import { defineStore } from 'pinia'
import { routes } from '../router/routes'


const categoryList = new Map
categoryList.set('page', 'Страницы')
categoryList.set('subject', 'Субъекты')
categoryList.set('verb', 'Глаголы')
categoryList.set('sentence', 'Предложения')


export const useMenuStore = defineStore('menu', () => {
  // конфигурация
  const pathMap = new Map;
  const pipeline: string[] = [];
  const catList: { [key: string]: { path: string, title: string }[] } = {};

  for (let i = 0, el; i < routes.length; i++) {
    el = routes[i]
    pathMap.set(el.path, i)

    if (!catList[el.category]) catList[el.category] = [];

    if (el.isPipe) {
      pipeline.push(el.path);
      catList[el.category].push({ path: el.path, title: el.title });
    }
  }


  // установки
  const show = ref(false)
  const category = ref(routes[0].category);
  const title = ref(routes[0].title);
  const next = ref('');
  const back = ref('');
  const points = ref();



  // изменение адреса
  function click(path: string) {
    const key = pathMap.get(path)
    const el = routes[key]

    if (!el) return;
    // console.log(path)

    points.value = catList[el.category];
    category.value = categoryList.get(el.category) || el.category
    title.value = el.title
    document.title = el.title

    let cur = pipeline.indexOf(path)
    cur = cur < 0 ? -99 : cur
    next.value = pipeline[cur + 1] || ''
    back.value = pipeline[cur - 1] || ''
  }


  function filterCategory(catName: string) {
    return routes.filter(el => el.category === catName)
  }


  return {
    show, category, title, next, back, points,
    click, filterCategory,
  }
})

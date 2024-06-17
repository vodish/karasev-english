export type TRoute = {
  src: string
  path: string
  category: string
  title: string
  menu?: string
  url?: string
  isPipe?: boolean
  component?: any
}

export const routes: TRoute[] = [
  {
    path: '/',
    src: '../pages/PageMain.vue',
    category: 'page',
    title: 'Тренажер по английскому',
    menu: 'Главная',
    isPipe: true,
    component: () => import('../pages/PageMain.vue'),
  },
  {
    path: '/verbs/:verb?',
    src: '../pages/PageVerbs.vue',
    url: '/verbs',
    category: 'page',
    title: 'Cписок глаголов',
    component: () => import('../pages/PageVerbs.vue'),
  },
  {
    path: '/:url(.*)*',
    src: '../pages/PageNotFound.vue',
    category: 'tech',
    title: '404',
    component: () => import('../pages/PageNotFound.vue'),
  },

  {
    path: '/subjects/what',
    src: '../pages/subjects/PageSubjectWhat.vue',
    category: 'subject',
    title: 'Кто такие субъекты',
    isPipe: true,
    component: () => import('../pages/subjects/PageSubjectWhat.vue'),
  },
  {
    path: '/subjects/rus',
    src: '../pages/subjects/PageSubjectRus.vue',
    category: 'subject',
    title: 'Русские субъекты',
    isPipe: true,
    component: () => import('../pages/subjects/PageSubjectRus.vue'),
  },
  {
    path: '/subjects/eng',
    src: '../pages/subjects/PageSubjectEng.vue',
    category: 'subject',
    title: 'Английские переводы',
    isPipe: true,
    component: () => import('../pages/subjects/PageSubjectEng.vue'),
  },
  {
    path: '/subjects/gym',
    src: '../pages/subjects/PageSubjectGym.vue',
    category: 'subject',
    title: 'Тренажер субъектов',
    isPipe: true,
    component: () => import('../pages/subjects/PageSubjectGym.vue'),
  },

  {
    path: '/verb/what',
    src: '../pages/verbs/PageVerbWhat.vue',
    category: 'verb',
    title: 'Что такое глаголы',
    isPipe: true,
    component: () => import('../pages/verbs/PageVerbWhat.vue'),
  },
  {
    path: '/verb/action',
    src: '../pages/verbs/PageVerbAction.vue',
    category: 'verb',
    title: 'Что такое действие',
    isPipe: true,
    component: () => import('../pages/verbs/PageVerbAction.vue'),
  },
  {
    path: '/verb/sense',
    src: '../pages/verbs/PageVerbSense.vue',
    category: 'verb',
    title: 'Смысловой глагол',
    isPipe: true,
    component: () => import('../pages/verbs/PageVerbSense.vue'),
  },
  {
    path: '/verb/modal',
    src: '../pages/verbs/PageVerbModal.vue',
    category: 'verb',
    title: 'Модальный глагол',
    isPipe: true,
    component: () => import('../pages/verbs/PageVerbModal.vue'),
  },
  {
    path: '/verb/affirmative',
    src: '../pages/verbs/PageVerbAffirm.vue',
    category: 'verb',
    title: 'Утверждение',
    isPipe: true,
    component: () => import('../pages/verbs/PageVerbAffirm.vue'),
  },
  {
    path: '/verb/negative',
    src: '../pages/verbs/PageVerbNegative.vue',
    category: 'verb',
    title: 'Отрицание',
    isPipe: true,
    component: () => import('../pages/verbs/PageVerbNegative.vue'),
  },
  {
    path: '/verb/question',
    src: '../pages/verbs/PageVerbQuestion.vue',
    category: 'verb',
    title: 'Вопрос',
    isPipe: true,
    component: () => import('../pages/verbs/PageVerbQuestion.vue'),
  },


  {
    path: '/sentence/order',
    src: '../pages/sentences/PageSentenceOrder.vue',
    category: 'sentence',
    title: 'Строгий порядок слов',
    isPipe: true,
    component: () => import('../pages/sentences/PageSentenceOrder.vue'),
  },
  {
    path: '/sentence/table',
    src: '../pages/sentences/PageSentenceTable.vue',
    category: 'sentence',
    title: 'Таблица времени',
    isPipe: true,
    component: () => import('../pages/sentences/PageSentenceTable.vue'),
  },
  {
    path: '/sentence/rule',
    src: '../pages/sentences/PageSentenceRule.vue',
    category: 'sentence',
    title: 'Английское предложение',
    isPipe: true,
    component: () => import('../pages/sentences/PageSentenceRule.vue'),
  },
  {
    path: '/sentence/affirmative',
    src: '../pages/sentences/PageSentenceAffirm.vue',
    category: 'sentence',
    title: 'Английское утверждение',
    isPipe: true,
    component: () => import('../pages/sentences/PageSentenceAffirm.vue'),
  },
  {
    path: '/sentence/aux',
    src: '../pages/sentences/PageSentenceAux.vue',
    category: 'sentence',
    title: 'Вспомогательный глагол',
    isPipe: true,
    component: () => import('../pages/sentences/PageSentenceAux.vue'),
  },
  {
    path: '/sentence/negative',
    src: '../pages/sentences/PageSentenceNegative.vue',
    category: 'sentence',
    title: 'Английское отрицание',
    isPipe: true,
    component: () => import('../pages/sentences/PageSentenceNegative.vue'),
  },
  {
    path: '/sentence/question',
    src: '../pages/sentences/PageSentenceQuestion.vue',
    category: 'sentence',
    title: 'Английский вопрос',
    isPipe: true,
    component: () => import('../pages/sentences/PageSentenceQuestion.vue'),
  },
  {
    path: '/sentence/gym',
    src: '../pages/sentences/PageSentenceGym.vue',
    category: 'sentence',
    title: 'Тренажер глаголов',
    isPipe: true,
    component: () => import('../pages/sentences/PageSentenceGym.vue'),
  },

]

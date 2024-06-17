export type TRoute = {
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
    category: 'page',
    title: 'Тренажер по английскому',
    menu: 'Главная',
    isPipe: true,
    component: () => import('../pages/PageMain.vue'),
  },
  {
    path: '/verbs/:verb?',
    url: '/verbs',
    category: 'page',
    title: 'Cписок глаголов',
    component: () => import('../pages/PageVerbs.vue'),
  },
  {
    path: '/:url(.*)*',
    category: 'tech',
    title: '404',
    component: () => import('../pages/PageNotFound.vue'),
  },

  {
    path: '/subjects/what',
    category: 'subject',
    title: 'Кто такие субъекты',
    isPipe: true,
    component: () => import('../pages/subjects/PageSubjectWhat.vue'),
  },
  {
    path: '/subjects/rus',
    category: 'subject',
    title: 'Русские субъекты',
    isPipe: true,
    component: () => import('../pages/subjects/PageSubjectRus.vue'),
  },
  {
    path: '/subjects/eng',
    category: 'subject',
    title: 'Английские переводы',
    isPipe: true,
    component: () => import('../pages/subjects/PageSubjectEng.vue'),
  },
  {
    path: '/subjects/gym',
    category: 'subject',
    title: 'Тренажер субъектов',
    isPipe: true,
    component: () => import('../pages/subjects/PageSubjectGym.vue'),
  },

  {
    path: '/verb/what',
    category: 'verb',
    title: 'Что такое глаголы',
    isPipe: true,
    component: () => import('../pages/verbs/PageVerbWhat.vue'),
  },
  {
    path: '/verb/action',
    category: 'verb',
    title: 'Что такое действие',
    isPipe: true,
    component: () => import('../pages/verbs/PageVerbAction.vue'),
  },
  {
    path: '/verb/sense',
    category: 'verb',
    title: 'Смысловой глагол',
    isPipe: true,
    component: () => import('../pages/verbs/PageVerbSense.vue'),
  },
  {
    path: '/verb/modal',
    category: 'verb',
    title: 'Модальный глагол',
    isPipe: true,
    component: () => import('../pages/verbs/PageVerbModal.vue'),
  },
  {
    path: '/verb/affirmative',
    category: 'verb',
    title: 'Утверждение',
    isPipe: true,
    component: () => import('../pages/verbs/PageVerbAffirm.vue'),
  },
  {
    path: '/verb/negative',
    category: 'verb',
    title: 'Отрицание',
    isPipe: true,
    component: () => import('../pages/verbs/PageVerbNegative.vue'),
  },
  {
    path: '/verb/question',
    category: 'verb',
    title: 'Вопрос',
    isPipe: true,
    component: () => import('../pages/verbs/PageVerbQuestion.vue'),
  },


  {
    path: '/sentence/order',
    category: 'sentence',
    title: 'Строгий порядок слов',
    isPipe: true,
    component: () => import('../pages/sentences/PageSentenceOrder.vue'),
  },
  {
    path: '/sentence/table',
    category: 'sentence',
    title: 'Таблица времени',
    isPipe: true,
    component: () => import('../pages/sentences/PageSentenceTable.vue'),
  },
  {
    path: '/sentence/rule',
    category: 'sentence',
    title: 'Английское предложение',
    isPipe: true,
    component: () => import('../pages/sentences/PageSentenceRule.vue'),
  },
  {
    path: '/sentence/affirmative',
    category: 'sentence',
    title: 'Английское утверждение',
    isPipe: true,
    component: () => import('../pages/sentences/PageSentenceAffirm.vue'),
  },
  {
    path: '/sentence/aux',
    category: 'sentence',
    title: 'Вспомогательный глагол',
    isPipe: true,
    component: () => import('../pages/sentences/PageSentenceAux.vue'),
  },
  {
    path: '/sentence/negative',
    category: 'sentence',
    title: 'Английское отрицание',
    isPipe: true,
    component: () => import('../pages/sentences/PageSentenceNegative.vue'),
  },
  {
    path: '/sentence/question',
    category: 'sentence',
    title: 'Английский вопрос',
    isPipe: true,
    component: () => import('../pages/sentences/PageSentenceQuestion.vue'),
  },
  {
    path: '/sentence/gym',
    category: 'sentence',
    title: 'Тренажер глаголов',
    isPipe: true,
    component: () => import('../pages/sentences/PageSentenceGym.vue'),
  },

]

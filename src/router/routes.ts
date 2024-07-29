export type TRoute = {
  path: string
  category: string
  title: string
  menu?: string
  url?: string
  isPipe?: boolean
  name: string
  component?: any
}

export const routes: TRoute[] = [
  {
    path: '/',
    category: 'page',
    title: 'Тренажер по&nbsp;английскому',
    menu: 'Главная',
    isPipe: true,
    name: 'PageMain',
    component: () => import('../pages/PageMain.vue'),
  },
  {
    path: '/verbs/:verb?',
    url: '/verbs',
    category: 'page',
    title: 'Cписок глаголов',
    name: 'PageVerbs',
    component: () => import('../pages/PageVerbs.vue'),
  },
  {
    path: '/:url(.*)*',
    category: 'tech',
    title: '404',
    name: 'PageNotFound',
    component: () => import('../pages/PageNotFound.vue'),
  },

  {
    path: '/subjects/what',
    category: 'subject',
    title: 'Кто&nbsp;такие субъекты',
    isPipe: true,
    name: 'PageSubjectWhat',
    component: () => import('../pages/subjects/PageSubjectWhat.vue'),
  },
  {
    path: '/subjects/rus',
    category: 'subject',
    title: 'Русские субъекты',
    isPipe: true,
    name: 'PageSubjectRus',
    component: () => import('../pages/subjects/PageSubjectRus.vue'),
  },
  {
    path: '/subjects/eng',
    category: 'subject',
    title: 'Английские переводы',
    isPipe: true,
    name: 'PageSubjectEng',
    component: () => import('../pages/subjects/PageSubjectEng.vue'),
  },
  {
    path: '/subjects/gym',
    category: 'subject',
    title: 'Тренажер субъектов',
    isPipe: true,
    name: 'PageSubjectGym',
    component: () => import('../pages/subjects/PageSubjectGym.vue'),
  },

  {
    path: '/verb/what',
    category: 'verb',
    title: 'Что&nbsp;такое глаголы',
    isPipe: true,
    name: 'PageVerbWhat',
    component: () => import('../pages/verbs/PageVerbWhat.vue'),
  },
  {
    path: '/verb/action',
    category: 'verb',
    title: 'Что&nbsp;такое действие',
    isPipe: true,
    name: 'PageVerbAction',
    component: () => import('../pages/verbs/PageVerbAction.vue'),
  },
  {
    path: '/verb/sense',
    category: 'verb',
    title: 'Смысловой глагол',
    isPipe: true,
    name: 'PageVerbSense',
    component: () => import('../pages/verbs/PageVerbSense.vue'),
  },
  {
    path: '/verb/modal',
    category: 'verb',
    title: 'Модальный глагол',
    isPipe: true,
    name: 'PageVerbModal',
    component: () => import('../pages/verbs/PageVerbModal.vue'),
  },
  {
    path: '/verb/affirmative',
    category: 'verb',
    title: 'Утверждение',
    isPipe: true,
    name: 'PageVerbAffirm',
    component: () => import('../pages/verbs/PageVerbAffirm.vue'),
  },
  {
    path: '/verb/negative',
    category: 'verb',
    title: 'Отрицание',
    isPipe: true,
    name: 'PageVerbNegative',
    component: () => import('../pages/verbs/PageVerbNegative.vue'),
  },
  {
    path: '/verb/question',
    category: 'verb',
    title: 'Вопрос',
    isPipe: true,
    name: 'PageVerbQuestion',
    component: () => import('../pages/verbs/PageVerbQuestion.vue'),
  },


  {
    path: '/sentence/order',
    category: 'sentence',
    title: 'Строгий порядок слов',
    isPipe: true,
    name: 'PageSentenceOrder',
    component: () => import('../pages/sentences/PageSentenceOrder.vue'),
  },
  {
    path: '/sentence/table',
    category: 'sentence',
    title: 'Таблица времени',
    isPipe: true,
    name: 'PageSentenceTable',
    component: () => import('../pages/sentences/PageSentenceTable.vue'),
  },
  {
    path: '/sentence/rule',
    category: 'sentence',
    title: 'Английское предложение',
    isPipe: true,
    name: 'PageSentenceRule',
    component: () => import('../pages/sentences/PageSentenceRule.vue'),
  },
  {
    path: '/sentence/affirmative',
    category: 'sentence',
    title: 'Английское утверждение',
    isPipe: true,
    name: 'PageSentenceAffirm',
    component: () => import('../pages/sentences/PageSentenceAffirm.vue'),
  },
  {
    path: '/sentence/aux',
    category: 'sentence',
    title: 'Вспомогательный глагол',
    isPipe: true,
    name: 'PageSentenceAux',
    component: () => import('../pages/sentences/PageSentenceAux.vue'),
  },
  {
    path: '/sentence/negative',
    category: 'sentence',
    title: 'Английское отрицание',
    isPipe: true,
    name: 'PageSentenceNegative',
    component: () => import('../pages/sentences/PageSentenceNegative.vue'),
  },
  {
    path: '/sentence/question',
    category: 'sentence',
    title: 'Английский вопрос',
    isPipe: true,
    name: 'PageSentenceQuestion',
    component: () => import('../pages/sentences/PageSentenceQuestion.vue'),
  },
  {
    path: '/sentence/gym',
    category: 'sentence',
    title: 'Тренажер предложений',
    isPipe: true,
    name: 'PageSentenceGym',
    component: () => import('../pages/sentences/PageSentenceGym.vue'),
  },

]

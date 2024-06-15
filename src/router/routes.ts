export type TRoute = {
  src: string
  path: string
  category: string
  title: string
  menu?: string
  url?: string
  isPipe?: boolean
}

export const routes: TRoute[] = [
  {
    path: '/',
    src: '../pages/PageMain.vue',
    category: 'page',
    title: 'Тренажер по английскому',
    menu: 'Главная',
    isPipe: true,
  },
  {
    path: '/verbs/:verb?',
    src: '../pages/PageVerbs.vue',
    url: '/verbs',
    category: 'page',
    title: 'Cписок глаголов',
  },
  {
    path: '/:url(.*)*',
    src: '../pages/PageNotFound.vue',
    category: 'tech',
    title: '404',
  },

  {
    path: '/subjects/what',
    src: '../pages/subjects/PageSubjectWhat.vue',
    category: 'subject',
    title: 'Кто такие субъекты',
    isPipe: true,
  },
  {
    path: '/subjects/rus',
    src: '../pages/subjects/PageSubjectRus.vue',
    category: 'subject',
    title: 'Русские субъекты',
    isPipe: true,
  },
  {
    path: '/subjects/eng',
    src: '../pages/subjects/PageSubjectEng.vue',
    category: 'subject',
    title: 'Английские переводы',
    isPipe: true,
  },
  {
    path: '/subjects/gym',
    src: '../pages/subjects/PageSubjectGym.vue',
    category: 'subject',
    title: 'Тренажер субъектов',
    isPipe: true,
  },

  {
    path: '/verb/what',
    src: '../pages/verbs/PageVerbWhat.vue',
    category: 'verb',
    title: 'Что такое глаголы',
    isPipe: true,
  },
  {
    path: '/verb/action',
    src: '../pages/verbs/PageVerbAction.vue',
    category: 'verb',
    title: 'Что такое действие',
    isPipe: true,
  },
  {
    path: '/verb/sense',
    src: '../pages/verbs/PageVerbSense.vue',
    category: 'verb',
    title: 'Смысловой глагол',
    isPipe: true,
  },
  {
    path: '/verb/modal',
    src: '../pages/verbs/PageVerbModal.vue',
    category: 'verb',
    title: 'Модальный глагол',
    isPipe: true,
  },
  {
    path: '/verb/affirmative',
    src: '../pages/verbs/PageVerbAffirm.vue',
    category: 'verb',
    title: 'Утверждение',
    isPipe: true,
  },
  {
    path: '/verb/negative',
    src: '../pages/verbs/PageVerbNegative.vue',
    category: 'verb',
    title: 'Отрицание',
    isPipe: true,
  },
  {
    path: '/verb/question',
    src: '../pages/verbs/PageVerbQuestion.vue',
    category: 'verb',
    title: 'Вопрос',
    isPipe: true,
  },


  {
    path: '/sentence/order',
    src: '../pages/sentences/PageSentenceOrder.vue',
    category: 'sentence',
    title: 'Строгий порядок слов',
    isPipe: true,
  },
  {
    path: '/sentence/table',
    src: '../pages/sentences/PageSentenceTable.vue',
    category: 'sentence',
    title: 'Таблица времени',
    isPipe: true,
  },
  {
    path: '/sentence/rule',
    src: '../pages/sentences/PageSentenceRule.vue',
    category: 'sentence',
    title: 'Английское предложение',
    isPipe: true,
  },
  {
    path: '/sentence/affirmative',
    src: '../pages/sentences/PageSentenceAffirm.vue',
    category: 'sentence',
    title: 'Английское утверждение',
    isPipe: true,
  },
  {
    path: '/sentence/aux',
    src: '../pages/sentences/PageSentenceAux.vue',
    category: 'sentence',
    title: 'Вспомогательный глагол',
    isPipe: true,
  },
  {
    path: '/sentence/negative',
    src: '../pages/sentences/PageSentenceNegative.vue',
    category: 'sentence',
    title: 'Английское отрицание',
    isPipe: true,
  },
  {
    path: '/sentence/question',
    src: '../pages/sentences/PageSentenceQuestion.vue',
    category: 'sentence',
    title: 'Английский вопрос',
    isPipe: true,
  },
  {
    path: '/sentence/gym',
    src: '../pages/sentences/PageSentenceGym.vue',
    category: 'sentence',
    title: 'Тренажер глаголов',
    isPipe: true,
  },

]

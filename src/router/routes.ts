export type TRoute = {
  src: string
  path: string
  name: string
  category: string
  title: string
}

export const routes: TRoute[] = [
  {
    path: '/',
    name: 'PageMain',
    src: '../pages/PageMain.vue',
    category: 'Главная',
    title: 'Главная',
  },

  {
    path: '/subjects/what',
    name: 'PageSubjectWhat',
    src: '../pages/subjects/PageSubjectWhat.vue',
    category: 'Субъект',
    title: 'Кто такие субъекты',
  },
  {
    path: '/subjects/rus',
    name: 'PageSubjectRus',
    src: '../pages/subjects/PageSubjectRus.vue',
    category: 'Субъект',
    title: 'Русские субъекты',
  },
  {
    path: '/subjects/eng',
    name: 'PageSubjectEng',
    src: '../pages/subjects/PageSubjectEng.vue',
    category: 'Субъект',
    title: 'Английские переводы',
  },
  {
    path: '/subjects/gym',
    name: 'PageSubjectGym',
    src: '../pages/subjects/PageSubjectGym.vue',
    category: 'Субъект',
    title: 'Тренажер субъектов',
  },

  {
    path: '/verb/what',
    name: 'PageVerbWhat',
    src: '../pages/verbs/PageVerbWhat.vue',
    category: 'Глаголы',
    title: 'Что такое глаголы',
  },
  {
    path: '/verb/action',
    name: 'PageVerbAction',
    src: '../pages/verbs/PageVerbAction.vue',
    category: 'Глаголы',
    title: 'Что такое действие',
  },
  {
    path: '/verb/sense',
    name: 'PageVerbSense',
    src: '../pages/verbs/PageVerbSense.vue',
    category: 'Глаголы',
    title: 'Смысловой глагол',
  },
  {
    path: '/verb/modal',
    name: 'PageVerbModal',
    src: '../pages/verbs/PageVerbModal.vue',
    category: 'Глаголы',
    title: 'Модальный глагол',
  },
  {
    path: '/verb/affirmative',
    name: 'PageVerbAffirm',
    src: '../pages/verbs/PageVerbAffirm.vue',
    category: 'Глаголы',
    title: 'Утверждение',
  },
  {
    path: '/verb/negative',
    name: 'PageVerbNegative',
    src: '../pages/verbs/PageVerbNegative.vue',
    category: 'Глаголы',
    title: 'Отрицание',
  },
  {
    path: '/verb/question',
    name: 'PageVerbQuestion',
    src: '../pages/verbs/PageVerbQuestion.vue',
    category: 'Глаголы',
    title: 'Вопрос',
  },
  {
    path: '/verb/search',
    name: 'PageVerbSearch',
    src: '../pages/verbs/PageVerbSearch.vue',
    category: 'Глаголы',
    title: 'Список глаголов',
  },

  {
    path: '/sentence/table',
    name: 'PageSentenceTable',
    src: '../pages/sentences/PageSentenceTable.vue',
    category: 'Предложения',
    title: 'Таблица времени',
  },
  {
    path: '/sentence/rule',
    name: 'PageSentenceRule',
    src: '../pages/sentences/PageSentenceRule.vue',
    category: 'Предложения',
    title: 'Английское предложение',
  },
  {
    path: '/sentence/affirmative',
    name: 'PageSentenceAffirm',
    src: '../pages/sentences/PageSentenceAffirm.vue',
    category: 'Предложения',
    title: 'Английское утверждение',
  },
  {
    path: '/sentence/aux',
    name: 'PageSentenceAux',
    src: '../pages/sentences/PageSentenceAux.vue',
    category: 'Предложения',
    title: 'Вспомогательный глагол',
  },
  {
    path: '/sentence/negative',
    name: 'PageSentenceNegative',
    src: '../pages/sentences/PageSentenceNegative.vue',
    category: 'Предложения',
    title: 'Английское отрицание',
  },
  {
    path: '/sentence/question',
    name: 'PageSentenceQuestion',
    src: '../pages/sentences/PageSentenceQuestion.vue',
    category: 'Предложения',
    title: 'Английский вопрос',
  },
  {
    path: '/sentence/gym',
    name: 'PageSentenceGym',
    src: '../pages/sentences/PageSentenceGym.vue',
    category: 'Предложения',
    title: 'Тренажер глаголов',
  },
]

export type TRoute = {
  src: string
  path: string
  category: string
  title: string
}

export const routes: TRoute[] = [
  {
    path: '/',
    src: '../pages/PageMain.vue',
    category: 'page',
    title: 'Главная',
  },

  {
    path: '/subjects/what',
    src: '../pages/subjects/PageSubjectWhat.vue',
    category: 'subject',
    title: 'Кто такие субъекты',
  },
  {
    path: '/subjects/rus',
    src: '../pages/subjects/PageSubjectRus.vue',
    category: 'subject',
    title: 'Русские субъекты',
  },
  {
    path: '/subjects/eng',
    src: '../pages/subjects/PageSubjectEng.vue',
    category: 'subject',
    title: 'Английские переводы',
  },
  {
    path: '/subjects/gym',
    src: '../pages/subjects/PageSubjectGym.vue',
    category: 'subject',
    title: 'Тренажер субъектов',
  },

  {
    path: '/verb/what',
    src: '../pages/verbs/PageVerbWhat.vue',
    category: 'verb',
    title: 'Что такое глаголы',
  },
  {
    path: '/verb/action',
    src: '../pages/verbs/PageVerbAction.vue',
    category: 'verb',
    title: 'Что такое действие',
  },
  {
    path: '/verb/sense',
    src: '../pages/verbs/PageVerbSense.vue',
    category: 'verb',
    title: 'Смысловой глагол',
  },
  {
    path: '/verb/modal',
    src: '../pages/verbs/PageVerbModal.vue',
    category: 'verb',
    title: 'Модальный глагол',
  },
  {
    path: '/verb/affirmative',
    src: '../pages/verbs/PageVerbAffirm.vue',
    category: 'verb',
    title: 'Утверждение',
  },
  {
    path: '/verb/negative',
    src: '../pages/verbs/PageVerbNegative.vue',
    category: 'verb',
    title: 'Отрицание',
  },
  {
    path: '/verb/question',
    src: '../pages/verbs/PageVerbQuestion.vue',
    category: 'verb',
    title: 'Вопрос',
  },
  {
    path: '/verb/search',
    src: '../pages/verbs/PageVerbSearch.vue',
    category: 'verb',
    title: 'Список глаголов',
  },

  {
    path: '/sentence/table',
    src: '../pages/sentences/PageSentenceTable.vue',
    category: 'sentence',
    title: 'Таблица времени',
  },
  {
    path: '/sentence/rule',
    src: '../pages/sentences/PageSentenceRule.vue',
    category: 'sentence',
    title: 'Английское предложение',
  },
  {
    path: '/sentence/affirmative',
    src: '../pages/sentences/PageSentenceAffirm.vue',
    category: 'sentence',
    title: 'Английское утверждение',
  },
  {
    path: '/sentence/aux',
    src: '../pages/sentences/PageSentenceAux.vue',
    category: 'sentence',
    title: 'Вспомогательный глагол',
  },
  {
    path: '/sentence/negative',
    src: '../pages/sentences/PageSentenceNegative.vue',
    category: 'sentence',
    title: 'Английское отрицание',
  },
  {
    path: '/sentence/question',
    src: '../pages/sentences/PageSentenceQuestion.vue',
    category: 'sentence',
    title: 'Английский вопрос',
  },
  {
    path: '/sentence/gym',
    src: '../pages/sentences/PageSentenceGym.vue',
    category: 'sentence',
    title: 'Тренажер глаголов',
  },
  

]

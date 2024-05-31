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
    category: 'page',
    title: 'Главная',
  },

  {
    path: '/subjects/what',
    name: 'PageSubjectWhat',
    src: '../pages/subjects/PageSubjectWhat.vue',
    category: 'subject',
    title: 'Кто такие субъекты',
  },
  {
    path: '/subjects/rus',
    name: 'PageSubjectRus',
    src: '../pages/subjects/PageSubjectRus.vue',
    category: 'subject',
    title: 'Русские субъекты',
  },
  {
    path: '/subjects/eng',
    name: 'PageSubjectEng',
    src: '../pages/subjects/PageSubjectEng.vue',
    category: 'subject',
    title: 'Английские переводы',
  },
  {
    path: '/subjects/gym',
    name: 'PageSubjectGym',
    src: '../pages/subjects/PageSubjectGym.vue',
    category: 'subject',
    title: 'Тренажер субъектов',
  },

  {
    path: '/verb/what',
    name: 'PageVerbWhat',
    src: '../pages/verbs/PageVerbWhat.vue',
    category: 'verb',
    title: 'Что такое глаголы',
  },
  {
    path: '/verb/action',
    name: 'PageVerbAction',
    src: '../pages/verbs/PageVerbAction.vue',
    category: 'verb',
    title: 'Что такое действие',
  },
  {
    path: '/verb/sense',
    name: 'PageVerbSense',
    src: '../pages/verbs/PageVerbSense.vue',
    category: 'verb',
    title: 'Смысловой глагол',
  },
  {
    path: '/verb/modal',
    name: 'PageVerbModal',
    src: '../pages/verbs/PageVerbModal.vue',
    category: 'verb',
    title: 'Модальный глагол',
  },
  {
    path: '/verb/affirmative',
    name: 'PageVerbAffirm',
    src: '../pages/verbs/PageVerbAffirm.vue',
    category: 'verb',
    title: 'Утверждение',
  },
  {
    path: '/verb/negative',
    name: 'PageVerbNegative',
    src: '../pages/verbs/PageVerbNegative.vue',
    category: 'verb',
    title: 'Отрицание',
  },
  {
    path: '/verb/question',
    name: 'PageVerbQuestion',
    src: '../pages/verbs/PageVerbQuestion.vue',
    category: 'verb',
    title: 'Вопрос',
  },
  {
    path: '/verb/search',
    name: 'PageVerbSearch',
    src: '../pages/verbs/PageVerbSearch.vue',
    category: 'verb',
    title: 'Список глаголов',
  },

  {
    path: '/sentence/table',
    name: 'PageSentenceTable',
    src: '../pages/sentences/PageSentenceTable.vue',
    category: 'sentence',
    title: 'Таблица времени',
  },
  {
    path: '/sentence/rule',
    name: 'PageSentenceRule',
    src: '../pages/sentences/PageSentenceRule.vue',
    category: 'sentence',
    title: 'Английское предложение',
  },
  {
    path: '/sentence/affirmative',
    name: 'PageSentenceAffirm',
    src: '../pages/sentences/PageSentenceAffirm.vue',
    category: 'sentence',
    title: 'Английское утверждение',
  },
  {
    path: '/sentence/aux',
    name: 'PageSentenceAux',
    src: '../pages/sentences/PageSentenceAux.vue',
    category: 'sentence',
    title: 'Вспомогательный глагол',
  },
  {
    path: '/sentence/negative',
    name: 'PageSentenceNegative',
    src: '../pages/sentences/PageSentenceNegative.vue',
    category: 'sentence',
    title: 'Английское отрицание',
  },
  {
    path: '/sentence/question',
    name: 'PageSentenceQuestion',
    src: '../pages/sentences/PageSentenceQuestion.vue',
    category: 'sentence',
    title: 'Английский вопрос',
  },
  {
    path: '/sentence/gym',
    name: 'PageSentenceGym',
    src: '../pages/sentences/PageSentenceGym.vue',
    category: 'sentence',
    title: 'Тренажер глаголов',
  },
]

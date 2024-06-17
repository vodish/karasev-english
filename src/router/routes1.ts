import PageMain from '../pages/PageMain.vue'
import PageVerbs from '../pages/PageVerbs.vue'
import PageNotFound from '../pages/PageNotFound.vue'
import PageSubjectWhat from '../pages/subjects/PageSubjectWhat.vue'
import PageSubjectRus from '../pages/subjects/PageSubjectRus.vue'
import PageSubjectEng from '../pages/subjects/PageSubjectEng.vue'
import PageSubjectGym from '../pages/subjects/PageSubjectGym.vue'
import PageVerbWhat from '../pages/verbs/PageVerbWhat.vue'
import PageVerbAction from '../pages/verbs/PageVerbAction.vue'
import PageVerbSense from '../pages/verbs/PageVerbSense.vue'
import PageVerbModal from '../pages/verbs/PageVerbModal.vue'
import PageVerbAffirm from '../pages/verbs/PageVerbAffirm.vue'
import PageVerbNegative from '../pages/verbs/PageVerbNegative.vue'
import PageVerbQuestion from '../pages/verbs/PageVerbQuestion.vue'
import PageSentenceOrder from '../pages/sentences/PageSentenceOrder.vue'
import PageSentenceTable from '../pages/sentences/PageSentenceTable.vue'
import PageSentenceRule from '../pages/sentences/PageSentenceRule.vue'
import PageSentenceAffirm from '../pages/sentences/PageSentenceAffirm.vue'
import PageSentenceAux from '../pages/sentences/PageSentenceAux.vue'
import PageSentenceNegative from '../pages/sentences/PageSentenceNegative.vue'
import PageSentenceQuestion from '../pages/sentences/PageSentenceQuestion.vue'
import PageSentenceGym from '../pages/sentences/PageSentenceGym.vue'


export type TRoute = {
  src: string
  path: string
  category: string
  title: string
  menu?: string
  url?: string
  isPipe?: boolean
  component: any
}


export const routes: TRoute[] = [
  {
    path: '/',
    src: '../pages/PageMain.vue',
    category: 'page',
    title: 'Тренажер по английскому',
    menu: 'Главная',
    isPipe: true,
    component: PageMain,
  },
  {
    path: '/verbs/:verb?',
    src: '../pages/PageVerbs.vue',
    url: '/verbs',
    category: 'page',
    title: 'Cписок глаголов',
    component: PageVerbs,
  },
  {
    path: '/:url(.*)*',
    src: '../pages/PageNotFound.vue',
    category: 'tech',
    title: '404',
    component: PageNotFound,
  },

  {
    path: '/subjects/what',
    src: '../pages/subjects/PageSubjectWhat.vue',
    category: 'subject',
    title: 'Кто такие субъекты',
    isPipe: true,
    component: PageSubjectWhat,
  },
  {
    path: '/subjects/rus',
    src: '../pages/subjects/PageSubjectRus.vue',
    category: 'subject',
    title: 'Русские субъекты',
    isPipe: true,
    component: PageSubjectRus,
  },
  {
    path: '/subjects/eng',
    src: '../pages/subjects/PageSubjectEng.vue',
    category: 'subject',
    title: 'Английские переводы',
    isPipe: true,
    component: PageSubjectEng,
  },
  {
    path: '/subjects/gym',
    src: '../pages/subjects/PageSubjectGym.vue',
    category: 'subject',
    title: 'Тренажер субъектов',
    isPipe: true,
    component: PageSubjectGym,
  },

  {
    path: '/verb/what',
    src: '../pages/verbs/PageVerbWhat.vue',
    category: 'verb',
    title: 'Что такое глаголы',
    isPipe: true,
    component: PageVerbWhat,
  },
  {
    path: '/verb/action',
    src: '../pages/verbs/PageVerbAction.vue',
    category: 'verb',
    title: 'Что такое действие',
    isPipe: true,
    component: PageVerbAction,
  },
  {
    path: '/verb/sense',
    src: '../pages/verbs/PageVerbSense.vue',
    category: 'verb',
    title: 'Смысловой глагол',
    isPipe: true,
    component: PageVerbSense,
  },
  {
    path: '/verb/modal',
    src: '../pages/verbs/PageVerbModal.vue',
    category: 'verb',
    title: 'Модальный глагол',
    isPipe: true,
    component: PageVerbModal,
  },
  {
    path: '/verb/affirmative',
    src: '../pages/verbs/PageVerbAffirm.vue',
    category: 'verb',
    title: 'Утверждение',
    isPipe: true,
    component: PageVerbAffirm,
  },
  {
    path: '/verb/negative',
    src: '../pages/verbs/PageVerbNegative.vue',
    category: 'verb',
    title: 'Отрицание',
    isPipe: true,
    component: PageVerbNegative,
  },
  {
    path: '/verb/question',
    src: '../pages/verbs/PageVerbQuestion.vue',
    category: 'verb',
    title: 'Вопрос',
    isPipe: true,
    component: PageVerbQuestion,
  },


  {
    path: '/sentence/order',
    src: '../pages/sentences/PageSentenceOrder.vue',
    category: 'sentence',
    title: 'Строгий порядок слов',
    isPipe: true,
    component: PageSentenceOrder,
  },
  {
    path: '/sentence/table',
    src: '../pages/sentences/PageSentenceTable.vue',
    category: 'sentence',
    title: 'Таблица времени',
    isPipe: true,
    component: PageSentenceTable,
  },
  {
    path: '/sentence/rule',
    src: '../pages/sentences/PageSentenceRule.vue',
    category: 'sentence',
    title: 'Английское предложение',
    isPipe: true,
    component: PageSentenceRule,
  },
  {
    path: '/sentence/affirmative',
    src: '../pages/sentences/PageSentenceAffirm.vue',
    category: 'sentence',
    title: 'Английское утверждение',
    isPipe: true,
    component: PageSentenceAffirm,
  },
  {
    path: '/sentence/aux',
    src: '../pages/sentences/PageSentenceAux.vue',
    category: 'sentence',
    title: 'Вспомогательный глагол',
    isPipe: true,
    component: PageSentenceAux,
  },
  {
    path: '/sentence/negative',
    src: '../pages/sentences/PageSentenceNegative.vue',
    category: 'sentence',
    title: 'Английское отрицание',
    isPipe: true,
    component: PageSentenceNegative,
  },
  {
    path: '/sentence/question',
    src: '../pages/sentences/PageSentenceQuestion.vue',
    category: 'sentence',
    title: 'Английский вопрос',
    isPipe: true,
    component: PageSentenceQuestion,
  },
  {
    path: '/sentence/gym',
    src: '../pages/sentences/PageSentenceGym.vue',
    category: 'sentence',
    title: 'Тренажер глаголов',
    isPipe: true,
    component: PageSentenceGym,
  },
]

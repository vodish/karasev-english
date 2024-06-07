import { ref } from 'vue'
import { defineStore } from 'pinia'
import { verbs, type TVerb, type TVerbKey } from '@/db/verb'


const listSentence = ['affirmative', 'negative', 'question']
const listTime = ['pastSimple', 'presentSimple', 'futureSimple']
const listSubjectRu = ['я', 'вы', 'мы', 'они', 'он', 'она', 'это']
const listSubject = ['I', 'you', 'we', 'they', 'he', 'she', 'it']
const listPattern: { [k: string]: { ru: string, en: string } } = {
  'affirmative pastSimple': { ru: '{subject} {verb}.', en: '{subject} {verb}.' },
  'affirmative presentSimple': { ru: '{subject} {verb}.', en: '{subject} {verb}.' },
  'affirmative futureSimple': { ru: '{subject} {быть} {verb}.', en: '{subject} will {verb}.' },

  'negative pastSimple': { ru: '{subject} не {verb}.', en: '{subject} {do} not {verb}.' },
  'negative presentSimple': { ru: '{subject} не {verb}.', en: '{subject} {do} not {verb}.' },
  'negative futureSimple': { ru: '{subject} не {быть} {verb}.', en: '{subject} will not {verb}.' },

  'question pastSimple': { ru: '{subject} {verb}?', en: '{do} {subject} {verb}?' },
  'question presentSimple': { ru: '{subject} {verb}?', en: '{do} {subject} {verb}?' },
  'question futureSimple': { ru: '{subject} {быть} {verb}?', en: 'will {subject} {verb}?' },
}
const listVerb = ['expect']



export const useSentenceStore = defineStore('sentence', () => {
  const sentence = ref('')
  const time = ref('')
  const subject = ref('')
  const verb = ref('')
  const patternRu = ref('')
  const patternEn = ref('')
  const goalRu = ref('')
  const goalEn = ref('')

  
  
  // генератор задачи
  function gen() {
    sentence.value = rand(listSentence)
    time.value = rand(listTime)
    subject.value = rand(listSubject)
    verb.value = rand(listVerb)

    let { ru, en } = listPattern[`${sentence.value} ${time.value}`]

    patternRu.value = ru
    patternEn.value = en

    // подставить субъекта
    ru = ru.replace(/{subject}/, listSubjectRu[listSubject.indexOf(subject.value)])
    en = en.replace(/{subject}/, subject.value)


    // подставить русские глаголы
    if (/{быть}/.test(ru)) {
      const ruMod = getVerbForm('ru', 'be')
      if (ruMod) ru = ru.replace(/{быть}/, ruMod)

      const ruVerb = getVerbInfinitive('ru', verb.value as TVerb)
      if (ruVerb) ru = ru.replace(/{verb}/, ruVerb)
    }
    else {
      const ruVerb = getVerbForm('ru', verb.value as TVerb)
      if (ruVerb) ru = ru.replace(/{verb}/, ruVerb);
    }


    // подставить английские глаголы
    if (/will/.test(en)) {
      const enVerb = getVerbInfinitive('en', verb.value as TVerb)
      if (enVerb) en = en.replace(/{verb}/, enVerb)
    }
    else if (/{do}/.test(en)) {
      const enAux = getVerbForm('en', 'do')
      if (enAux) en = en.replace(/{do}/, enAux)

      const enVerb = getVerbInfinitive('en', verb.value as TVerb)
      if (enVerb) en = en.replace(/{verb}/, enVerb)
    }
    else {
      const enVerb = getVerbForm('en', verb.value as TVerb)
      if (enVerb) en = en.replace(/{verb}/, enVerb)
    }


    goalRu.value = startUp(ru)
    goalEn.value = startUp(en)
  }




  function rand(list: string[]) {
    const rand = Math.floor(Math.random() * list.length)
    return list[rand]
  }

  function getVerbInfinitive(lang: 'ru' | 'en', word: TVerb) {
    const verb1 = verbs[word as TVerb]
    if (!verb1) return undefined;

    return verb1[`${lang} infinitive` as TVerbKey]
  }

  function getVerbForm(lang: 'ru' | 'en', word: TVerb) {
    const infinitive = getVerbInfinitive(lang, word)
    if (!infinitive) return null;

    const verb1 = verbs[word as TVerb]
    const key1 = `${lang} ${subject.value} ${time.value}` as TVerbKey

    return verb1[key1]
  }

  function startUp(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }



  return {
    sentence, time, subject, verb, patternRu, patternEn, goalRu, goalEn,
    gen,
  }
})
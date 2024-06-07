import { ref } from 'vue'
import { defineStore } from 'pinia'
import { verbs, type TVerb, type TVerbKey } from '@/db/verbs'
import { patterns, type TPatternKey } from '@/db/pattern'


const listSentence = ['affirmative', 'negative', 'question']
const listTime = ['pastSimple', 'presentSimple', 'futureSimple']
const listSubjectRu = ['я', 'вы', 'мы', 'они', 'он', 'она', 'что-то']
const listSubject = ['I', 'you', 'we', 'they', 'he', 'she', 'it']
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

    const { ru, en } = transform({
      pattern: patterns[`${sentence.value} ${time.value}` as TPatternKey],
      sentence: sentence.value,
      time: time.value,
      subject: subject.value,
      verb: verb.value,
    })

    goalRu.value = ru;
    goalEn.value = en;
  }


  return {
    sentence, time, subject, verb, patternRu, patternEn, goalRu, goalEn,
    gen,
  }
})







type TTranslateParam = {
  pattern: { ru: string, en: string }
  sentence: string
  time: string
  subject: string
  verb: string
}


function transform(param: TTranslateParam) {
  let { ru, en } = param.pattern

  // подставить субъекта
  ru = ru.replace(/{subject}/, listSubjectRu[listSubject.indexOf(param.subject)])
  en = en.replace(/{subject}/, param.subject)


  // подставить русские глаголы
  if (/{быть}/.test(ru)) {
    const ruMod = getVerbForm('be', 'ru', param.subject, param.time)
    if (ruMod) ru = ru.replace(/{быть}/, ruMod)

    const ruVerb = getVerbInfinitive('ru', param.verb as TVerb)
    ru = ru.replace(/{verb}/, ruVerb || `{${param.verb}}`)
  }
  else {
    const ruVerb = getVerbForm(param.verb as TVerb, 'ru', param.subject, param.time)
    ru = ru.replace(/{verb}/, ruVerb || `{${param.verb}}`);
  }


  // подставить английские глаголы
  if (/will/.test(en)) {
    const enVerb = getVerbInfinitive('en', param.verb as TVerb)
    en = en.replace(/{verb}/, enVerb || `{${param.verb}}`)
  }
  else if (/{do}/.test(en)) {
    const enAux = getVerbForm('do', 'en', param.subject, param.time)
    if (enAux) en = en.replace(/{do}/, enAux)

    const enVerb = getVerbInfinitive('en', param.verb as TVerb)
    en = en.replace(/{verb}/, enVerb || `{${param.verb}}`)
  }
  else {
    const enVerb = getVerbForm(param.verb as TVerb, 'en', param.subject, param.time)
    en = en.replace(/{verb}/, enVerb || `{${param.verb}}`)
  }


  // предложение с большой буквы
  ru = startUp(ru)
  en = startUp(en)


  return { ru, en }
}



function getVerbInfinitive(lang: 'ru' | 'en', word: TVerb) {
  const verb1 = verbs[word as TVerb]
  if (!verb1) return undefined;

  return verb1[`${lang} infinitive` as TVerbKey]
}



function getVerbForm(word: TVerb, lang: 'ru' | 'en', subject: string, time: string,) {
  const infinitive = getVerbInfinitive(lang, word)
  if (!infinitive) return null;

  const verb1 = verbs[word as TVerb]
  const key1 = `${lang} ${subject} ${time}` as TVerbKey

  return verb1[key1]
}



function rand(list: string[]) {
  const rand = Math.floor(Math.random() * list.length)
  return list[rand]
}


function startUp(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

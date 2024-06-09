import { ref } from 'vue'
import { defineStore } from 'pinia'
import { verbs } from '@/db/db.verbs'
import { patterns, type TpatternKey } from '@/db/db.pattern'
import type { Tverb, TverbFld, TverbObj } from '@/db/db.verbs.type';


export { verbs };
export { patterns };
export const listSentence = ['affirmative', 'negative', 'question']
export const listTime = ['pastSimple', 'presentSimple', 'futureSimple']
export const listSubject = ['I', 'you', 'we', 'they', 'he', 'she', 'it']
export const listSubjectRu = ['я', 'вы', 'мы', 'они', 'он', 'она', 'оно']



export const useSentenceStore = defineStore('sentence', () => {
  const verbList = ref(['expect'])
  const param = ref({
    sentence: '',
    time: '',
    subject: '',
    verb: '',
  })
  const ru = ref('')
  const en = ref('')


  function setVerbList(list: string[]) {
    verbList.value = list
  }


  // генератор задачи
  function genTask() {
    param.value = {
      sentence: myRand(listSentence),
      time: myRand(listTime),
      subject: myRand(listSubject),
      verb: myRand(verbList.value),
    }
    const pattern = patterns[`${param.value.sentence} ${param.value.time}` as TpatternKey]

    const { ruForm, enForm } = transForm({ ...param.value, pattern })
    ru.value = ruForm;
    en.value = enForm;
  }



  return { param, ru, en, setVerbList, genTask }
})







type TtranslateParam = {
  pattern: { ru: string, en: string }
  sentence: string
  time: string
  subject: string
  verb: string
}


export function transForm(param: TtranslateParam) {
  let { ru, en } = param.pattern


  // подставить субъекта
  ru = ru.replace(/{subject}/, listSubjectRu[listSubject.indexOf(param.subject)])
  en = en.replace(/{subject}/, param.subject)



  // подставить русские глаголы
  if (/{быть}/.test(ru)) {
    const ruMod = getVerbForm('be', 'ru', param.subject, param.time)
    if (ruMod) ru = ru.replace(/{быть}/, ruMod)

    const ruVerb = getVerbInfinitive('ru', param.verb as Tverb)
    ru = ru.replace(/{verb}/, ruVerb || `{${param.verb}}`)
  }
  else {
    const ruVerb = getVerbForm(param.verb as Tverb, 'ru', param.subject, param.time)
    ru = ru.replace(/{verb}/, ruVerb || `{${param.verb}}`);
  }


  // подставить английские глаголы
  if (/will/.test(en)) {
    const enVerb = getVerbInfinitive('en', param.verb as Tverb)
    en = en.replace(/{verb}/, enVerb || `{${param.verb}}`)
  }
  else if (/{do}/.test(en)) {
    const enAux = getVerbForm('do', 'en', param.subject, param.time)
    if (enAux) en = en.replace(/{do}/, enAux)

    const enVerb = getVerbInfinitive('en', param.verb as Tverb)
    en = en.replace(/{verb}/, enVerb || `{${param.verb}}`)
  }
  else {
    const enVerb = getVerbForm(param.verb as Tverb, 'en', param.subject, param.time)
    en = en.replace(/{verb}/, enVerb || `{${param.verb}}`)
  }


  // предложение с большой буквы
  const ruForm = startUp(ru)
  const enForm = startUp(en)


  return { ruForm, enForm }
}



function getVerbInfinitive(lang: 'ru' | 'en', word: Tverb) {
  const verb = verbs[word]
  if (!verb) return undefined;

  return verb[`${lang} infinitive`]
}



function getVerbForm(word: Tverb, lang: 'ru' | 'en', subject: string, time: string) {
  const infinitive = getVerbInfinitive(lang, word)
  if (!infinitive) return null;


  const verb = verbs[word] as TverbObj

  return verb[`${lang} ${subject} ${time}` as TverbFld]
}


function myRand(list: string[]) {
  const rand = Math.floor(Math.random() * list.length)
  return list[rand]
}


function startUp(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

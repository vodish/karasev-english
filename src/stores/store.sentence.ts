import { ref } from 'vue'
import { defineStore } from 'pinia'


export const useSentenceStore = defineStore('sentence', () => {
  const sentence = ref(['affirmative', 'negative', 'question'])
  const time = ref(['pastSimple', 'presentSimple', 'futureSimple'])
  const subject = ref(['I', 'you', 'we', 'they', 'he', 'she', 'it'])
  const verb = ref(['expect', 'love'])
  
  const pattern: { [k: string]: { ru: string, en: string } } = {
    'affirmative pastSimple': { ru: '{subject} {verb}.', en: '{subject} {verb}.' },
    'affirmative presentSimple': { ru: '{subject} {verb}.', en: '{subject} {verb}.' },
    'affirmative futureSimple': { ru: '{subject} {быть} {verb}.', en: '{subject} will {verb}.' },

    'negative pastSimple': { ru: '{subject} не {verb}', en: '{subject} {do} not {verb}.' },
    'negative presentSimple': { ru: '{subject} не {verb}', en: '{subject} {do} not {verb}.' },
    'negative futureSimple': { ru: '{subject} не {mod:быть} {verb}', en: '{subject} will not {verb}.' },

    'question pastSimple': { ru: '{subject} {verb}?', en: '{do} {subject} {verb}?' },
    'question presentSimple': { ru: '{subject} {verb}?', en: '{do} {subject} {verb}?' },
    'question futureSimple': { ru: '{subject} {быть} {verb}?', en: 'Will {subject} {verb}?' },
  }



  const tth = ref(random(true))



  function randList(list: string[]) {
    const rand = Math.floor(Math.random() * list.length)
    return list[rand]
  }

  function random(def = false) {
    const set = {
      sentence: randList(sentence.value),
      time: randList(time.value),
      subject: randList(subject.value),
      verb: randList(verb.value),
      pattern: {ru: '', en: ''},
    }
    set.pattern = pattern[`${set.sentence} ${set.time}`]


    if (def) return set
    tth.value = set
  }


  function Letter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


  return {
    sentence, time, subject, verb,
    tth,
    random,
  }
})
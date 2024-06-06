import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSentenceStore = defineStore('sentence', () => {
  const sentence = ref(['affirmative', 'negative', 'question'])
  const time = ref(['pastSimple', 'presentSimple', 'futureSimple'])
  const subject = ref(['I', 'you', 'we', 'they', 'he', 'she', 'it'])
  const verb = ref(['expect', 'love'])
  const aux = ref(['do'])
  const mod = ref(['will'])
  const pattern: { [k: string]: { ru: string, en: string } } = {
    'affirmative pastSimple': { ru: '...', en: 'subject verb.' },
    'affirmative presentSimple': { ru: '...', en: 'subject verb.' },
    'affirmative futureSimple': { ru: '...', en: 'subject mod verb.' },

    'negative pastSimple': { ru: '...', en: 'subject aux not verb.' },
    'negative presentSimple': { ru: '...', en: 'subject aux not verb.' },
    'negative futureSimple': { ru: '...', en: 'subject mod not verb.' },

    'question pastSimple': { ru: '...', en: 'aux subject verb?' },
    'question presentSimple': { ru: '...', en: 'aux subject verb?' },
    'question futureSimple': { ru: '...', en: 'mod subject verb?' },
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
      aux: randList(aux.value),
      mod: randList(mod.value),
      pattern: {ru: '', en: ''},
    }
    set.pattern = pattern[`${set.sentence} ${set.time}`]


    if (def) return set
    tth.value = set
  }


  return {
    sentence, time, subject, verb, mod, aux,
    tth,
    random,
  }
})
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSentenceStore = defineStore('sentence', () => {
  const sentence = ref(['affirmative', 'negative', 'question'])
  const time = ref(['pastSimple', 'presentSimple', 'futureSimple'])
  const subject = ref(['I', 'you', 'we', 'they', 'he', 'she', 'it'])
  const verb = ref(['expect', 'love'])
  const aux = ref(['do'])
  const mod = ref(['will'])
  const pattern: { [k: string]: string } = {
    'affirmative pastSimple': 'Subject verb.',
    'affirmative presentSimple': 'Subject verb.',
    'affirmative futureSimple': 'Subject mod verb.',

    'negative pastSimple': 'Subject aux not verb.',
    'negative presentSimple': 'Subject aux not verb.',
    'negative futureSimple': 'Subject mod not verb.',

    'question pastSimple': 'Aux subject verb?',
    'question presentSimple': 'Aux subject verb?',
    'question futureSimple': 'Mod subject verb?',
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
      pattern: '',
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
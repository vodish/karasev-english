import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSentenceStore = defineStore('sentence', () => {
  const sentenceList = ['affirmative', 'negative', 'question']
  const timeList = ['pastSimple', 'presentSimple', 'futureSimple']
  const subjectList = ['I', 'you', 'we', 'they', 'hi', 'shi', 'it']
  const verbList = ['expect', 'love']


  const tth = ref(random(true))


  function randList(list: string[]) {
    const rand = Math.floor(Math.random() * list.length)
    return list[rand]
  }

  function random(ret = false) {
    const set = {
      sentence: randList(sentenceList),
      time: randList(timeList),
      subject: randList(subjectList),
      verb: randList(verbList),
    }

    if (ret) return set
    else tth.value = set
  }





  return { tth, random }
})
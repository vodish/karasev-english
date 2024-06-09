<script setup lang="ts">
import { useSentenceStore } from '@/stores/store.sentence'

const sentence = useSentenceStore()
// sentence.setVerbList(['love', 'like'])
sentence.genTask()
</script>

<template>
  <p>
    Тренажер для запоминания порядка слов в предложении вместе со смысловыми глаголами.
  </p>


  <br>
  <p class="big">{{ sentence.ru }}</p>
  <p class="big">{{ sentence.en }}</p>

  <p><button @click="sentence.genTask()">Еще</button></p>
</template>


<style scoped>
.big {
  font-size: 1.4em;
}
</style>
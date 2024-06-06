<script setup lang="ts">
import { useSentenceStore } from '@/stores/store.sentence'

const sentence = useSentenceStore()
</script>

<template>
  <div class="flex">
    <div>
      <p class="sel">Задание <button @click="sentence.random()">Еще</button></p>
      <br />
      <p>Субъект: {{ sentence.tth?.subject }}</p>
      <p>Предложение: {{ sentence.tth?.sentence }}</p>
      <p>Время: {{ sentence.tth?.time }}</p>
      <p>Глагол: {{ sentence.tth?.verb }}</p>
    </div>
    <div>
      <p>Русский: <span style="font-size: 1.4em;">{{ sentence.tth?.pattern.ru }}</span></p>
      <p>Английский: <span style="font-size: 1.4em;">{{ sentence.tth?.pattern.en }}</span></p>
    </div>
  </div>
  
  
</template>


<style scoped>
.flex {
  display: flex;
  gap: 30px;
}
.flex > div:nth-child(1) {
  flex-basis: 250px;
}
.flex > div:nth-child(2) {
  flex-grow: 1;
}
</style>
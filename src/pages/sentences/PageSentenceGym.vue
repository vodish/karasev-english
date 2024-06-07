<script setup lang="ts">
import { useSentenceStore } from '@/stores/store.sentence'

const sentence = useSentenceStore()
sentence.setTack();
</script>

<template>
  <div class="flex">
    <div>
      <p class="sel">Задание <button @click="sentence.setTack()">Еще</button></p>
      <br />
      <p>Субъект: {{ sentence.param.subject }}</p>
      <p>Предложение: {{ sentence.param.sentence }}</p>
      <p>Время: {{ sentence.param.time }}</p>
      <p>Глагол: {{ sentence.param.verb }}</p>
    </div>
    <div>
      <p>Ru: <span style="font-size: 1.4em;">{{ sentence.ru }}</span></p>
      <p>En: <span style="font-size: 1.4em;">{{ sentence.en }}</span></p>
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
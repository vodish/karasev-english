<script setup lang="ts">
import { useSentenceStore } from '@/stores/store.sentence'

const sentence = useSentenceStore()
sentence.gen();
</script>

<template>
  <div class="flex">
    <div>
      <p class="sel">Задание <button @click="sentence.gen()">Еще</button></p>
      <br />
      <p>Субъект: {{ sentence.subject }}</p>
      <p>Предложение: {{ sentence.sentence }}</p>
      <p>Время: {{ sentence.time }}</p>
      <p>Глагол: {{ sentence.verb }}</p>
    </div>
    <div>
      <p>GoalRu: <span style="font-size: 1.4em;">{{ sentence.goalRu }}</span></p>
      <p>GoalEn: <span style="font-size: 1.4em;">{{ sentence.goalEn }}</span></p>
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
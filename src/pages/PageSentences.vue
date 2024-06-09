<script setup lang="ts">
import { useRoute } from 'vue-router';
import { listSentence } from '@/stores/store.sentence';
import { listTime } from '@/stores/store.sentence';
import { listSubject } from '@/stores/store.sentence';

const route = useRoute()

</script>

<template>
  <p>Проверка тренажёра предложений.</p>
  
  <div>Глаголы: [ выбрать ]</div>
  <div>{{ listSentence }}</div>
  <div>{{ listTime }}</div>
  <div>{{ listSubject }}</div>


</template>


<style scoped>

</style>
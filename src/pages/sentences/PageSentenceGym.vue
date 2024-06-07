<script setup lang="ts">
import { useSentenceStore } from '@/stores/store.sentence'

const sentence = useSentenceStore()
// sentence.setVerbList(['love', 'like'])
sentence.genTask()
</script>

<template>
  <p><button @click="sentence.genTask()">Еще</button> {{ sentence.param }} </p>
  <br>
  <p class="big">{{ sentence.ru }}</p>
  <p class="big">{{ sentence.en }}</p>


</template>


<style scoped>
.big {
  font-size: 1.4em;
}
</style>
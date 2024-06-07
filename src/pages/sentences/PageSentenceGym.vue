<script setup lang="ts">
import { useSentenceStore } from '@/stores/store.sentence'

const sentence = useSentenceStore()
// sentence.setVerbList(['love', 'like'])
sentence.setTack()
</script>

<template>
  <p><button @click="sentence.setTack()">Еще</button> {{ sentence.param }} </p>
  <br>
  <p>Ru: <span style="font-size: 1.4em;">{{ sentence.ru }}</span></p>
  <p>En: <span style="font-size: 1.4em;">{{ sentence.en }}</span></p>
</template>


<style scoped></style>
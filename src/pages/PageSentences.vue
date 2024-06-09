<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute()

// const verb = ref(route.params.verb);
const subject = ['I', 'you', 'we', 'they', 'hi', 'shi', 'it']
const enPastSimple = ['expected', 'expected', 'expected', 'expected', 'expected', 'expected', 'expected']
const enPresentSimple = ['expect', 'expect', 'expect', 'expect', 'expects', 'expects', 'expects']




// console.log(route.params);

</script>

<template>
  <h3>Показать таблицу предложений с глаголами.</h3>
  <h3>Все варианты для проверки: Время, Предлложение, Субъект</h3>

</template>


<style scoped>

</style>
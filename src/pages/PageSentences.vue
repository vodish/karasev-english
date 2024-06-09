<script setup lang="ts">
import { useRoute } from 'vue-router';
const route = useRoute()

// const verb = ref(route.params.verb);
const subject = ['I', 'you', 'we', 'they', 'hi', 'shi', 'it']
const enPastSimple = ['expected', 'expected', 'expected', 'expected', 'expected', 'expected', 'expected']
const enPresentSimple = ['expect', 'expect', 'expect', 'expect', 'expects', 'expects', 'expects']

</script>

<template>
  <p>Проверка тренажёра предложений.</p>
    
</template>


<style scoped>

</style>
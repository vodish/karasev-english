<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  size: { type: Number, default: 24 },
})
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size + 'px'" :height="size + 'px'" viewBox="0 -960 960 960">
    <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
  </svg>
</template>

<style scoped>
svg > path {
  fill: #F19E39;
}
</style>
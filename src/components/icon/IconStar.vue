<script setup lang="ts">
import { defineProps } from 'vue'

defineProps({
  size: { type: Number, default: 20 },
})
// width="20" height="19"
</script>

<template>
  <svg :width="size + 'px'" :height="size + 'px'" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.825 19L5.45 11.975L0 7.25L7.2 6.625L10 0L12.8 6.625L20 7.25L14.55 11.975L16.175 19L10 15.275L3.825 19Z" />
  </svg>
</template>

<style scoped>
svg > path {
  fill: #F19E39;
}
</style>
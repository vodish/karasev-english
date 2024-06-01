<script setup lang="ts">
import { useMenuStore } from '@/stores/store.menu';
import { RouterLink } from 'vue-router';

// sdvsd
const menu = useMenuStore()
</script>

<template>
  Эта страничка со списком глаголов, пригодится потом. Жми <RouterLink :to="menu.next">Дальше &rarr;</RouterLink>
  
</template>

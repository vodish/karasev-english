<script setup lang="ts">
import { useMenuStore } from '@/stores/store.menu';
import { defineProps } from "vue";

const props = defineProps<{
  category: string
  name: string
}>()

const menu = useMenuStore()
const list = menu.filterCategory(props.category)

</script>


<template>
  <div>
    <div class="name">{{ props.name }}</div>
    <div>
      <RouterLink v-for="page in list" :key="page.name" :to="page.path">
        {{ page.title }}
      </RouterLink>
    </div>
  </div>
</template>


<style scoped>
.name {
  border-bottom: solid 1px #ccc;
  margin-bottom: 0.5em;
}

a {
  display: block;
}

a.router-link-exact-active {
  color: var(--color-text);
  cursor: default;
}

a.router-link-exact-active:hover {
  background-color: transparent;
}
</style>

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
      <RouterLink v-for="page in list" :key="page.path" :to="page.path" @click="menu.show = false">
        {{ page.title }}
      </RouterLink>
    </div>
  </div>
</template>


<style scoped>
.name {
  font-size: 13px;
  /* border-bottom: solid 1px var(--color-border); */
  margin-bottom: 0.3em;
}

a {
  display: block;
  font-size: 14px;
  margin-top: 2px;
}

a.router-link-exact-active {
  color: var(--color-select);
  cursor: default;
}

a.router-link-exact-active:hover {
  background-color: transparent;
}
</style>

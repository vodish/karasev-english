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
      <RouterLink v-for="page in list" :key="page.path" :to="page.url || page.path" @click="menu.show = false" activeClass="active">
        {{ page.title }}
      </RouterLink>
    </div>
  </div>
</template>


<style scoped>
.name {
  font-size: 13px;
  margin-bottom: 0.3em;
}

a {
  display: block;
  font-size: 14px;
  margin-top: 2px;
}

a.active {
  color: var(--color-select);
  cursor: default;
}

a.active:hover {
  background-color: transparent;
}
</style>

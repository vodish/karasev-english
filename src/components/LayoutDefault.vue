<script setup lang="ts">
import { useMenuStore } from '@/stores/store.menu';
import { RouterView } from 'vue-router'
import MainMenu from './main/MainMenu.vue';
const menu = useMenuStore()

</script>

<template>
  <header>
    <div class="title">
      <div class="title">{{ menu.category }}</div>
      <div>переключалка страниц: </div>
      <div>Карта</div>
    </div>
  </header>
  <div class="menu">
    <div class="category">
      <div class="name">Название</div>
      <nav>
        <MainMenu category="subject" name="Субъекты" />
        <MainMenu category="verb" name="Глаголы" />
        <MainMenu category="sentence" name="Предложения" />
      </nav>
    </div>
  </div>

  <RouterView />

  <footer>
    <div>footer</div>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.title {
  display: flex;
  gap: 40px;
}

.title>*:last-child {
  margin-left: auto;
}

nav {
  width: 100%;
  display: flex;
  gap: 10%;
}
</style>

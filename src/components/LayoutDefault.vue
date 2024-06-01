<script setup lang="ts">
import { useMenuStore } from '@/stores/store.menu';
import { RouterLink, RouterView } from 'vue-router'
import MainMenu from './main/MainMenu.vue';

const menu = useMenuStore()
</script>

<template>
  <header>
    <div class="title">{{ menu.category }}</div>
    <div>&bull; &bull; &bull; &bull; &bull; &bull; </div>
    <button @click="menu.show = !menu.show">&nbsp;</button>
  </header>

  <nav class="menu" v-if="menu.show">
    <MainMenu category="page" name="Страницы" />
    <MainMenu category="subject" name="Субъекты" />
    <MainMenu category="verb" name="Глаголы" />
    <MainMenu category="sentence" name="Предложения" />
  </nav>

  <main>
    <RouterView />
  </main>

  <footer>
    <RouterLink :to="menu.back" class="back">Назад</RouterLink>
    <RouterLink :to="menu.next" class="next">Дальше</RouterLink>
  </footer>
</template>

<style scoped>
header {
  display: flex;
  gap: 40px;
  line-height: 1.5;
  max-height: 100vh;
  padding-bottom: 15px;
  border-bottom: solid 1px #ccc;
  margin-bottom: 20px;
}

header>.title {
  font-size: 28px;
}

header>*:last-child {
  margin-left: auto;
}

nav {
  width: 100%;
  display: flex;
  gap: 7%;
  border-bottom: solid 1px #ccc;
  padding: 0 15px 20px 0;
  margin-bottom: 20px;
}

main {
  min-height: 30vh;
}

footer {
  border-top: solid 1px #ccc;
  padding: 15px 0;
}
</style>

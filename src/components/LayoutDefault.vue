<script setup lang="ts">
import { useMenuStore } from '@/stores/store.menu';
import { RouterView } from 'vue-router'
import MainMenu from './main/MainMenu.vue';
import { ref } from 'vue';

const menu = useMenuStore()
const show = ref(false)
</script>

<template>
  <header>
    <div class="title">{{ menu.category }}</div>
    <div>&bull; &bull; &bull; &bull; &bull; &bull; </div>
    <button @click="show = !show">&nbsp;</button>
  </header>

  <nav class="menu" v-if="show">
    <MainMenu category="page" name="Страницы" />
    <MainMenu category="subject" name="Субъекты" />
    <MainMenu category="verb" name="Глаголы" />
    <MainMenu category="sentence" name="Предложения" />
  </nav>


  <RouterView />

  <footer>
    <div>footer</div>
  </footer>
</template>

<style scoped>
header {
  display: flex;
  gap: 40px;
  line-height: 1.5;
  max-height: 100vh;
  padding-bottom: 20px;
  border-bottom: solid 1px #eee;
  margin-bottom: 20px;
}
header > .title {
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
  padding: 0 2em 1.5em 2em;
  margin-bottom: 20px;
}
</style>

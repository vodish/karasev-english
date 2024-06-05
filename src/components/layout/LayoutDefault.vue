<style>
@import './css.header.css';
@import './css.main.css';
@import './css.table.css';
@import './css.tbl2.css';
@import './css.frame.css';
@import './css.footer.css';
</style>

<script setup lang="ts">
import { useMenuStore } from '@/stores/store.menu';
import { RouterLink, RouterView } from 'vue-router'
import MainMenu from '@/components/main/MainMenu.vue';
import IconMenu from '@/assets/IconMenu.vue';

const menu = useMenuStore()
</script>

<template>
  <header>
    <div class="title" v-if="menu.category == 'Страницы'">{{ menu.title }}</div>
    <template v-else>
      <div class="title">{{ menu.category }}</div>
      <div class="points">
        <RouterLink v-for="{ path, title } in menu.points" :key="path" :to="path" :title="title" />
      </div>
    </template>
    <IconMenu :class="['iconmenu', menu.show ? 'active' : '']" @click="menu.show = !menu.show" />
  </header>

  <nav v-if="menu.show">
    <MainMenu category="page" name="Страницы" />
    <MainMenu category="subject" name="Субъекты" />
    <MainMenu category="verb" name="Глаголы" />
    <MainMenu category="sentence" name="Предложения" />
  </nav>

  <main>
    <RouterView />
  </main>

  <footer>
    <RouterLink :to="menu.back" class="btn back" v-if="menu.back">&larr;</RouterLink>
    <RouterLink :to="menu.next" class="btn next" v-if="menu.next">Дальше &rarr;</RouterLink>
  </footer>
</template>

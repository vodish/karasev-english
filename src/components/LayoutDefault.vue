<script setup lang="ts">
import { useMenuStore } from '@/stores/store.menu';
import { RouterLink, RouterView } from 'vue-router'
import MainMenu from './main/MainMenu.vue';
import IconMenu from '@/assets/IconMenu.vue';

const menu = useMenuStore()
</script>

<template>
  <header>
    <template v-if="menu.category == 'Страницы'">
      <div class="title">Тренажер по английскому</div>
    </template>
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

<style>
header {
  display: flex;
  align-items: baseline;
  gap: 40px;
  line-height: 1.5;
  max-height: 100vh;
  padding-bottom: 15px;
  border-bottom: solid 1px var(--color-border);
  margin-bottom: 20px;
}

header .title {
  font-size: 28px;
}

header>*:last-child {
  margin-left: auto;
}

header .iconmenu {
  cursor: pointer;
  stroke: #888;
  stroke-width: 2;
  transform: scale(1.5, 1.5);
}

header .iconmenu.active {
  stroke: var(--color-link);
}

header .points {
  display: flex;
  gap: 10px;
}

header .points>a {
  --size: 13px;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  border: solid 1px var(--color-border);
  line-height: 0;
}

header .points>a.router-link-exact-active {
  background-color: #888;
  border-color: #888;
  cursor: default;
}

nav {
  width: 100%;
  display: flex;
  gap: 7%;
  border-bottom: solid 1px var(--color-border);
  padding: 0 15px 40px 0;
  margin-bottom: 20px;
}

main {
  min-height: 50vh;
  padding-bottom: 40px;
}

main p {
  margin-top: 0;
  margin-bottom: 0.4em;
  width: 80%;
}
main ul {
  margin: 0.1em 0 0.4em 0;
}


footer {
  border-top: solid 1px var(--color-border);
  padding: 15px 0;
  display: flex;
  gap: 30px;
}

.btn {
  padding: 5px 10px;
  border-radius: 4px;
  border: solid 1px var(--color-border);
  color: inherit;
}

.btn:hover {
  background-color: #eee;
}

.btn:active {
  border-color: transparent;
}

.btn.end {
  opacity: 0;
}

.btn.next {
  flex-basis: 200px;
  background-color: var(--color-link);
  text-align: center;
}

.btn.next:hover {
  color: var(--vt-c-white-mute);
  background-color: var(--color-link-hover);
  border-color: #888;
}

.btn.next:active {
  background-color: var(--color-link);
  border-color: transparent;
}
</style>

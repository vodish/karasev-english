<script setup lang="ts">
import { useMenuStore } from '@/stores/menu';
import { RouterLink, RouterView } from 'vue-router'


const menu = useMenuStore()
</script>

<template>
  <header>
    <div class="title">
      <div>Название страницы</div>
      <div>переключалка страниц: {{ $route.fullPath }}</div>
      <div>Карта</div>
    </div>

    <div class="menu">
      <div class="category">
        <div class="name">Название</div>
        <nav>
          <RouterLink :to="page.path" v-for="page in menu.menu" :key="page.name">{{page.title}}</RouterLink>
        </nav>
      </div>
    </div>

  </header>


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
  /* font-size: 12px; */
  /* text-align: center; */
  margin-top: 2rem;
  gap: 5px;
}

nav a {
  display: block;
  padding: 0 1rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
  cursor: default;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a:first-of-type {
  border: 0;
}
</style>

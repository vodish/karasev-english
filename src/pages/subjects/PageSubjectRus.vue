<script setup lang="ts">
const subject = [
  { en: 'I', ru: 'я' },
  { en: 'you', ru: 'ты' },
  { en: 'we', ru: 'мы' },
  { en: 'they', ru: 'они' },
  { en: 'he', ru: 'он' },
  { en: 'she', ru: 'она' },
  { en: 'it', ru: 'оно' },
]
</script>

<template>
  <p>
    Кстати, в&nbsp;английском &laquo;я&raquo; всегда пишется с&nbsp;заглавной буквы&nbsp;&mdash; <span
      style="font-family: Times;">I</span>. <br />
      Впиши субъкта &laquo;по-русски&raquo;, в&nbsp;третью колонку.
  </p>

  <table class="col1 tbl1">
    <thead>
      <td>Субъект</td>
      <td>Перевод</td>
      <td>По-русски</td>
      <td>Проверка</td>
    </thead>
    <tr>
      <td></td>
    </tr>
    <tbody>
      <template v-for="({ en, ru }) in subject" :key="ru">
        <tr>
          <td>{{ en }}</td>
          <td>{{ ru }}</td>
          <td><input type="text" class="subject" maxlength="4" /></td>
          <td>...</td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

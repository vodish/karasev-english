<script setup lang="ts">
const subject = [
  { en: 'I', ru: 'я' },
  { en: 'you', ru: 'ты' },
  { en: 'we', ru: 'мы' },
  { en: 'they', ru: 'они' },
  { en: 'he', ru: 'он' },
  { en: 'she', ru: 'она' },
  { en: 'it', ru: 'это' },
]
</script>

<template>
  <p>
    Задание наоборот. <br />
    Впиши английское слово в&nbsp;третью колонку &laquo;по-английски&raquo;.
  </p>

  <table class="col1 tbl1">
    <thead>
      <td>Субъект</td>
      <td>Перевод</td>
      <td>По-английски</td>
      <td>Проверка</td>
    </thead>
    <tr>
      <td></td>
    </tr>
    <tbody>
      <template v-for="({ en, ru }) in subject" :key="ru">
        <tr>
          <td>{{ ru }}</td>
          <td>{{ en }}</td>
          <td><input type="text" class="subject" maxlength="4" /></td>
          <td>...</td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

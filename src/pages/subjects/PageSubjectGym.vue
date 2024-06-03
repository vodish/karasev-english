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
    Тренажер для запоминания субъектов. Доведи до&nbsp;автоматизма перевод субъектов. <br />
    Это поможет нормально двигаться дальше.
  </p>

  <table class="col1 tbl1">
    <thead>
      <td>Субъект</td>
      <td>Перевод</td>
      <td>Проверка</td>
    </thead>
    <tr>
      <td></td>
    </tr>
    <tbody>
      <template v-for="({ ru }) in subject" :key="ru">
        <tr>
          <td>{{ ru }}</td>
          <td><input type="text" class="subject" maxlength="4" /></td>
          <td>...</td>
        </tr>
      </template>
    </tbody>
  </table>
</template>

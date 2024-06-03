<script setup lang="ts">
const subject = [
  { en: 'I', ru: 'Я' },
  { en: 'You', ru: 'Ты' },
  { en: 'We', ru: 'Мы' },
  { en: 'They', ru: 'Они' },
  { en: 'He', ru: 'Он' },
  { en: 'She', ru: 'Она' },
  { en: 'It', ru: 'Это' },
]
</script>

<template>
  <p>Субъект&nbsp;&mdash; это кто-то или что-то. В&nbsp;английском предложении всегда есть <b>субъект</b>, который
    что-то <b>делает</b>. <br />
    Если не&nbsp;понятно где субъект в&nbsp;предложении, то&nbsp;скорее всего это&nbsp;it.</p>

  <p>It&nbsp;обозначает все, что не&nbsp;является человеком (стул, животное, ветер).</p>

  <div class="col1">
    <table class="tbl1">
      <thead>
        <td>Субъект</td>
        <td>Перевод</td>
      </thead>
      <tbody>
        <template v-for="({ en, ru }) in subject" :key="ru">
          <tr>
            <td>{{ en }}</td>
            <td>{{ ru }}</td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
tbody {
  color: var(--color-select);
}
</style>


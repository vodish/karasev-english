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
  <p><b class="sel">Субъект</b>&nbsp;&mdash; это кто-то или что-то. 
    В&nbsp;английском предложении всегда есть субъект, который что-то <b>делает</b>.
  </p>
  <p>
    Если не&nbsp;понятно где субъект в&nbsp;предложении, то&nbsp;скорее всего это it. <br />
    It&nbsp;обозначает все, что угодно, кроме человека &mdash;&nbsp;стул, животное, ветер и тому подобное.
  </p>

  <table class="col1 tbl1">
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
</template>

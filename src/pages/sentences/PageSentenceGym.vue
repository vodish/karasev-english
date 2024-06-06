<script setup lang="ts">
import { useSentenceStore } from '@/stores/store.sentence'

const sentence = useSentenceStore()
</script>

<template>
  <div class="flex">
    <div>
      <p class="sel">Задание <button @click="sentence.random()">Еще</button></p>
      <br />
      <p>Субъект: {{ sentence.tth?.subject }}</p>
      <p>Предложение: {{ sentence.tth?.sentence }}</p>
      <p>Время: {{ sentence.tth?.time }}</p>
      <p>Глагол: {{ sentence.tth?.verb }}</p>
    </div>
    <div>
      <p>Шаблон: <span style="font-size: 1.4em;">{{ sentence.tth?.pattern }}</span></p>
      <p>Русский: <span style="font-size: 1.4em;">...</span></p>
      <p>Английский: <span style="font-size: 1.4em;">...</span></p>
    </div>
  </div>
  

  <br><br><br><br>

  <div>Фильтр глаголов: </div>

  <ol>
    <li>Один правильный глагол expect</li>
    <li>Три правильных глагола: expect, do, love</li>
    <li>Десять правильных глаголов: </li>
    <li>Три неправильных глагола: </li>
    <li>Десять неправильных глаголов: </li>
    <li>Свои настройки: </li>
  </ol>

  <p>
    Глаголы: <span title="ожидать">expect</span>
  </p>

  <table>
    <tr>
      <td>Предложение:</td>
      <td>Я ожидаю.</td>
    </tr>
    <tr>
      <td>Перевод:</td>
      <td><input type="text"></td>
    </tr>
    <tr>
      <td>Подсказка</td>
      <td>...</td>
    </tr>
  </table>
</template>


<style scoped>
.flex {
  display: flex;
  gap: 30px;
}
.flex > div:nth-child(1) {
  flex-basis: 250px;
}
.flex > div:nth-child(2) {
  flex-basis: 350px;
}
</style>
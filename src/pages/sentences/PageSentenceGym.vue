<script setup lang="ts">
import {useSentenceStore} from '@/stores/store.sentence'

const sentence = useSentenceStore()
</script>

<template>
  <button @click="sentence.random()">Еще</button>

  <h4>Задание</h4>
  <p>{{ sentence.tth }}</p>

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

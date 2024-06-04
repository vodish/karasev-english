<script setup lang="ts">
// sdvsd
</script>

<template>
  <p>
    Сводная табличка с&nbsp;предложениями будет выглядеть следующим образом.
    Предложение состоит из&nbsp;субъекта и&nbsp;действия. Действие получается из&nbsp;сочетания:
  </p>
  <ul>
    <li>смыслового глагола (ожидать)</li>
    <li>указание времени, через смысловой или модальный глагол (буду)</li>
    <li>частицы &laquo;не&raquo;&nbsp;&mdash; для отрицания</li>
    <li>и&nbsp;вопросительного знака&nbsp;&mdash; для вопроса</li>
  </ul>


  <div class="col1 tbl2">
    <div class="top">
      <div class="time" style="text-align: left;">Время</div>
      <div class="sel">Прошeдшее</div>
      <div class="sel">Настоящее</div>
      <div class="sel">Будушее</div>
    </div>
    <div class="row">
      <div class="sel">Утверждение</div>
      <div class="big">Я ожид<u class="time">ал</u>.</div>
      <div class="big">Я ожид<u class="time">аю</u>.</div>
      <div class="big">Я <u class="time">буду</u> ожидать.</div>
    </div>
    <div class="row mid">
      <div class="sel">Отрицание</div>
      <div class="big">Я <u class="sel">не</u> ожид<u class="time">ал</u>.</div>
      <div class="big">Я <u class="sel">не</u> ожид<u class="time">аю</u>.</div>
      <div class="big">Я <u class="sel">не</u> <u class="time">буду</u> ожидать.</div>
    </div>
    <div class="row">
      <div class="sel">Вопрос</div>
      <div class="big">Я ожид<u class="time">ал</u><u class="sel">?</u></div>
      <div class="big">Я ожид<u class="time">аю</u><u class="sel">?</u></div>
      <div class="big">Я <u class="time">буду</u> ожидать<u class="sel">?</u></div>
    </div>
  </div>
</template>

<style scoped>
@import '@/components/layout/css.tbl2.css';
</style>
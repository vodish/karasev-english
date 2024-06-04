<script setup lang="ts">
// sdvsd
</script>

<template>
  <p>
    <b>Вопросительное предложение</b> в&nbsp;русском языке получается с&nbsp;помощью интонации в&nbsp;голосе. <br />
    Да, русский язык является тоновым. На&nbsp;письме тоновая вопросительная нагрузка передается через вопросительный знак
    в&nbsp;конце предложения. Но&nbsp;если знак в&nbsp;конце предложения не&nbsp;поставить, то&nbsp;понять что это вопрос
    не&nbsp;получится.
  </p>


  <div class="col1 frame1">
    <div>
      <div class="border">
        <div>Я ожид<u class="time">ал</u><u class="sel">?</u></div>
        <div class="affirm">Я ожид<u class="time">ал</u><u class="sel">.</u></div>
      </div>
      <div class="note">
        субъект (я); <br />
        <b>прошедшее</b> время (было); <br />
        через смысловой глагол
      </div>
    </div>
    <div>
      <div class="border">
        <div>Я ожид<u class="time">аю</u><u class="sel">?</u></div>
        <div class="affirm">Я ожид<u class="time">аю</u><u class="sel">.</u></div>
      </div>
      <div class="note">
        субъект (я); <br />
        <b>настоящее</b> время (сейчас); <br />
        через смысловой глагол
      </div>
    </div>
    <div>
      <div class="border">
        <div>Я <u class="time">буду</u> ожидать<u class="sel">?</u></div>
        <div class="affirm">Я <u class="time">буду</u> ожидать<u class="sel">.</u></div>
      </div>
      <div class="note">
        субъект (я); <br />
        <b>будущее</b> время (будет); <br />
        через модальный глагол
      </div>
    </div>
  </div>
</template>

<style scoped>
.border {
  width: 250px !important;
}

.affirm {
  margin-top: 1em;
  font-size: 0.8rem;
}
</style>

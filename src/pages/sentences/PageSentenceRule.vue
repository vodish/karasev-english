<template>
  <p>
    <b>Английское предложение</b> строится по&nbsp;тем&nbsp;же принципам, но&nbsp;со&nbsp;своими особенностями.
    Предложение по&nbsp;прежнему состоит только из&nbsp;двух частей: субъект и&nbsp;действие.
    Однако действие выражено по-другому:
  <ul>
    <li>смысловой глагол (expect, expected)</li>
    <li>указание времени, через смысловой, вспомогательный или модальный глагол</li>
    <li>модальный глагол (will)</li>
    <li>вспомогательный глагол (do, did)</li>
  </ul>
  </p>
  <p>
    А вопросительное предложение выражено явно путем переснановки глаголов в&nbsp;предложении.
    Знак вопроса ставится для завершения предложения вместо точки, хотя и&nbsp;без него понятно что задается вопрос.
  </p>

  <div class="col1 tbl2">
    <div class="top">
      <div class="time" style="text-align: left;">Время</div>
      <div class="sel">Прошeдшее</div>
      <div class="sel">Настоящее</div>
      <div class="sel">Будушее</div>
    </div>
    <div class="row">
      <div class="sel">Утверждение</div>
      <div class="big">
        <div>Я ожид<u class="time">ал</u>.</div>
        <div class="eng">I expect<u class="time">ed</u>.</div>
      </div>
      <div class="big">
        <div>Я ожид<u class="time">аю</u>.</div>
        <div class="eng">I <u class="time">expect</u>.</div>
      </div>
      <div class="big">
        <div>Я <u class="time">буду</u> ожидать.</div>
        <div class="eng">I <u class="time">will</u> expect.</div>
      </div>
    </div>
    <div class="row mid">
      <div class="sel">Отрицание</div>
      <div class="big">
        <div>Я <u class="sel">не</u> ожид<u class="time">ал</u>.</div>
        <div class="eng">I <u class="time">did</u> <u class="sel">not</u> expect.</div>
      </div>
      <div class="big">
        <div>Я <u class="sel">не</u> ожид<u class="time">аю</u>.</div>
        <div class="eng">I do <u class="sel">not</u> <u class="time">expect</u>.</div>
      </div>
      <div class="big">
        <div>Я <u class="sel">не</u> <u class="time">буду</u> ожидать.</div>
        <div class="eng">I <u class="time">will</u> <u class="sel">not</u> expect.</div>
      </div>
    </div>
    <div class="row">
      <div class="sel">Вопрос</div>
      <div class="big">
        <div>Я ожид<u class="time">ал</u><u class="sel">?</u></div>
        <div class="eng"><u class="time">Did</u> I expect?</div>
      </div>
      <div class="big">
        <div>Я ожид<u class="time">аю</u><u class="sel">?</u></div>
        <div class="eng"><u class="time">Do</u> I expect?</div>
      </div>
      <div class="big">
        <div>Я <u class="time">буду</u> ожидать<u class="sel">?</u></div>
        <div class="eng"><u class="time">Will</u> I  expect?</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.eng {
  margin-top: 0.3em;
  opacity: 0.9;
  font-size: 1rem;
}
</style>
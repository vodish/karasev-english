<script setup lang="ts">
const subject = ['Я', 'Вы', 'Мы', 'Они', 'Он', 'Она', 'Это']
const rus = ['ю', 'eте', 'ем', 'ют', 'ет', 'ет', 'ет']
</script>

<template>
  <p>
    <b>Утвердительное предложение</b> в&nbsp;английском языке, точно также как и&nbsp;в&nbsp;русском,
    состоит из&nbsp;<u class="sel">субъекта</u> и&nbsp;действия.
    <span class="time">Время</span> действия передается через форму смыслового глагола или через
    модальный глагол. Обратите внимание, что смысловой глагол <u class="sel">expect</u> (ожидать) имеет всего три формы,
    в&nbsp;отличии от&nbsp;русского языка (я&nbsp;ожидаю, вы&nbsp;ожидаете и&nbsp;тд.)

  </p>


  <div class="col1 frame1">
    <div>
      <div class="border">
        <table>
          <tr v-for="subj in subject" :key="subj">
            <td>{{ subj }}</td>
            <td>expect<u class="time">ed</u>.</td>
          </tr>
        </table>
      </div>
      <div class="note">
        субъект (я, вы, мы, они...); <br />
        форма смыслового глагола;
        <div><u class="time">Прошедшее</u> время (было)</div>
      </div>
    </div>
    <div>
      <div class="border">

        <table>
          <tr v-for="(subj, i) in subject" :key="subj">
            <td>{{ subj }}</td>
            <td v-if="i < 4">
              <u class="time">expect</u>.
            </td>
            <td v-else>
              expect<u class="time">s</u>.
            </td>
            <td class="rus">(ожида<u class="time">{{rus[i]}}</u>)</td>
          </tr>
        </table>

      </div>
      <div class="note">
        субъект (он, она, это); <br />
        форма смыслового глагола;
        <div><u class="time">Настоящее</u> время (сейчас)</div>
      </div>
    </div>
    <div>

      <div class="border">
        <table>
          <tr v-for="subj in subject" :key="subj">
            <td>{{ subj }}</td>
            <td class="time">will</td>
            <td>expect.</td>
          </tr>
        </table>
      </div>
      <div class="note">
        субъект (это); <br />
        форма модального глагола; <br />
        <p><u class="time">Будущее</u> время (будет)</p>
      </div>
    </div>
  </div>

  <p>
    Тонкий момент&nbsp;&mdash; в&nbsp;настоящем времени начальная форма смыслового глагола является одновременно
    указателем настоящего времени. Поэтому в&nbsp;таблице подсвечено полностью все слово <u class="time">expect</u>, т.к.
    рядом с&nbsp;субъектом оно указывает настоящее время.
  </p>
</template>

<style scoped>
.border {
  min-width: 210px;
  width: fit-content !important;
}

.rus {
  opacity: 0.8;
  font-size: 0.8em;
  padding-left: 20px;
}
</style>
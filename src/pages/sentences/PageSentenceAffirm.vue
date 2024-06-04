<script setup lang="ts">
const subject = ['Я', 'Вы', 'Мы', 'Они', 'Он', 'Она', 'Это']
</script>

<template>
  <p>
    <b>Утвердительное предложение</b> в&nbsp;английском языке, точно также как и&nbsp;в&nbsp;русском,
    состоит из&nbsp;<u class="sel">субъекта</u> и&nbsp;действия.
    <span class="time">Время</span> действия передается через форму смыслового глагола или через
    модальный глагол. Обратите внимание что смысловой глагол <u class="sel">expect</u> (ожидать) имеет всего три формы,
    в&nbsp;отличии от&nbsp;русского языка (я&nbsp;ожидаю, вы&nbsp;ожидаете и&nbsp;тд.)

  </p>


  <div class="col1 frame1">
    <div>
      <div class="border">
        <table>
          <tr v-for="subj in subject" :key="subj">
            <td>{{ subj }}</td>
            <td>expect<u class="time">ed</u></td>
          </tr>
        </table>
      </div>
      <div class="note">
        субъект (я, вы, мы, они...); <br />
        форма смыслового глагола;
        <div>Прошедшее время (было)</div>
      </div>
    </div>
    <div>
      <div class="border">
        <table>
          <tr>
            <td>Я</td>
            <td><u class="time">expect</u>.</td>
            <td class="rus">(ожидаю)</td>
          </tr>
          <tr>
            <td>Вы</td>
            <td><u class="time">expect</u>.</td>
            <td class="rus">(ожидаeте)</td>
          </tr>
          <tr>
            <td>Мы</td>
            <td><u class="time">expect</u>.</td>
            <td class="rus">(ожидаем)</td>
          </tr>
          <tr>
            <td>Они</td>
            <td><u class="time">expect</u>.</td>
            <td class="rus">(ожидают)</td>
          </tr>
          <tr>
            <td>Он</td>
            <td>expect<u class="time">s</u>.</td>
            <td class="rus">(ожидает)</td>
          </tr>
          <tr>
            <td>Она</td>
            <td>expect<u class="time">s</u>.</td>
            <td class="rus">(ожидает)</td>
          </tr>
          <tr>
            <td>Это</td>
            <td>expect<u class="time">s</u>.</td>
            <td class="rus">(ожидает)</td>
          </tr>
        </table>
      </div>
      <div class="note">
        субъект (он, она, это); <br />
        форма смыслового глагола;
        <div>Настоящее время (сейчас)</div>
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
        <p>Будущее время (будет)</p>
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
  font-size: 0.8em;
}
</style>
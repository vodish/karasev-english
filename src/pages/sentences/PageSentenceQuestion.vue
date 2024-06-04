<script setup lang="ts">
const subject = ['я', 'вы', 'мы', 'они', 'он', 'она', 'это']

function simpleTime() {

}
</script>

<template>
  <p>
    <b>Английский вопрос</b> образуется путем перестановки вспомогательного глагола и&nbsp;субъекта, т.е. они меняются
    местами. Поэтому в&nbsp;английском предложении всегда понятно когда речь идет о&nbsp;вопросе. Знак вопроса
    в&nbsp;конце предложения стоит для красоты.
  </p>
  <ul>
    <li>вспомогательный глагол (do, does, did) никак не&nbsp;переводится, он&nbsp;указывает только
      <span class="time">время</span> действия
    </li>
    <li>смысловой глагол (expect&nbsp;=&nbsp;ожидать) записывает в&nbsp;своей начальной форме</li>
  </ul>



  <div class="col1 frame1">
    <div>
      <div class="border">
        <table>
          <tr v-for="subj in subject" :key="subj">
            <td><u class="time">Did</u></td>
            <td>{{ subj }}</td>
            <td>expect?</td>
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
          <tr v-for="subj in subject" :key="subj">
            <td>
              <u class="time" v-if="subject">Do</u>
              <u class="time" v-else>Does</u>
            </td>
            <td>{{ subj }}</td>
            <td>expect?</td>
          </tr>
        </table>

        <table>
          <tr>
            <td>я</td>
            <td><u class="time">do</u> <u class="sel">not</u></td>
            <td>expect.</td>
          </tr>
          <tr>
            <td>Вы</td>
            <td><u class="time">do</u> <u class="sel">not</u></td>
            <td>expect.</td>
          </tr>
          <tr>
            <td>Мы</td>
            <td><u class="time">do</u> <u class="sel">not</u></td>
            <td>expect.</td>
          </tr>
          <tr>
            <td>Они</td>
            <td><u class="time">do</u> <u class="sel">not</u></td>
            <td>expect.</td>
          </tr>
          <tr>
            <td>Он</td>
            <td><u class="time">does</u> <u class="sel">not</u></td>
            <td>expect.</td>
          </tr>
          <tr>
            <td>Она</td>
            <td><u class="time">does</u> <u class="sel">not</u></td>
            <td>expect.</td>
          </tr>
          <tr>
            <td>Это</td>
            <td><u class="time">does</u> <u class="sel">not</u></td>
            <td>expect.</td>
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
            <td><u class="time">Will</u></td>
            <td>{{ subj }}</td>
            <td>expect?</td>
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
</template>


<style scoped>
.border {
  width: 260px !important;
}

.rus {
  opacity: 0.8;
  font-size: 0.8em;
  padding-left: 20px;
}
</style>


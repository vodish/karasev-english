<script setup lang="ts">
const subject = ['Я', 'Вы', 'Мы', 'Они', 'Он', 'Она', 'Это']
const rus = ['ю', 'ете', 'ем', 'ют', 'ет', 'ет', 'ет']
</script>


<template>
  <p>
    <b>Глаголы делятся на&nbsp;два типа</b>, в&nbsp;английском языке:
  <ul>
    <li>правильные (в&nbsp;прошедшем времени добавляется окончание "<u class="time">ed</u>", а&nbsp;в&nbsp;настоящем
      "<b class="time">s</b>")</li>
    <li>неправильные (которые имеют собственные формы вместо окончаний по-правилам)</li>
  </ul>
  </p>
  <p>
    Смысловой глагол&nbsp;<b class="sel">do</b> (делать) &mdash; неправильный.
    Ещё у него есть особая роль: он&nbsp;является вспомогательным глаголом и употребляется в&nbsp;отрицательных
    предложениях.
    Когда глагол do&nbsp;появляется в&nbsp;предложении как вспомогательный, то&nbsp;он&nbsp;никак не&nbsp;переводится.
  </p>

  <div class="col1 frame1">
    <div>
      <div class="border">
        <table>
          <tr v-for="subj in subject" :key="subj">
            <td>{{ subj }}</td>
            <td><u class="time">did</u>.</td>
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
            <td v-if="i < 4"><u class="time">do</u>.</td>
            <td v-else><u class="time">does</u>.</td>
            <td class="rus">(дела<u class="time">{{rus[i]}}</u>)</td>
          </tr>
        </table>
      </div>
      <div class="note">
        субъект (он, она, это/оно); <br />
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
            <td>do.</td>
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
</template>



<style scoped>
.border {
  width: 210px !important;
}

.rus {
  opacity: 0.8;
  font-size: 0.8em;
  padding-left: 20px;
}
</style>

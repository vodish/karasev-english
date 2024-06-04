<script setup lang="ts">
const subject = ['Я', 'Вы', 'Мы', 'Они', 'Он', 'Она', 'Это']
</script>


<template>
  <p>
    В&nbsp;английском языке <b>глаголы делятся на&nbsp;два типа</b>:
  <ul>
    <li>правильные (в&nbsp;прошедшем времени добавляется окончание "<u class="time">ed</u>", а&nbsp;в&nbsp;настоящем
      "<b class="time">s</b>")</li>
    <li>неправильные (которые имеют собственные формы вместо окончаний по-правилам)</li>
  </ul>
  </p>
  <p>
    Смысловой глагол&nbsp;<u class="sel">do</u> (делать) &mdash; неправильный.
    Ещё у него есть особая роль: он&nbsp;является вспомогательным глаголом и употребляется в&nbsp;отрицательных предложениях.
    Когда глагол do&nbsp;появляется в&nbsp;предложении как вспомогательный то&nbsp;он&nbsp;никак не&nbsp;переводится.
  </p>

  <div class="col1 frame1">
    <div>
      <div class="border">
        <table>
          <tr v-for="subj in subject" :key="subj">
            <td>{{ subj }}</td>
            <td><u class="time">did</u></td>
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
            <td><u class="time">do</u>.</td>
            <td class="rus">(делал)</td>
          </tr>
          <tr>
            <td>Вы</td>
            <td><u class="time">do</u>.</td>
            <td class="rus">(делали)</td>
          </tr>
          <tr>
            <td>Мы</td>
            <td><u class="time">do</u>.</td>
            <td class="rus">(делали)</td>
          </tr>
          <tr>
            <td>Они</td>
            <td><u class="time">do</u>.</td>
            <td class="rus">(делали)</td>
          </tr>
          <tr>
            <td>Он</td>
            <td><u class="time">does</u>.</td>
            <td class="rus">(делал)</td>
          </tr>
          <tr>
            <td>Она</td>
            <td><u class="time">does</u>.</td>
            <td class="rus">(делала)</td>
          </tr>
          <tr>
            <td>Это</td>
            <td><u class="time">does</u>.</td>
            <td class="rus">(делало)</td>
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
            <td>do.</td>
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
  width: 210px !important;
}
.rus {
  font-size: 0.8em;
}
</style>

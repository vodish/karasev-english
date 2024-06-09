<script setup lang="ts">
const subject = ['Я', 'Вы', 'Мы', 'Они', 'Он', 'Она', 'Это']
</script>

<template>
  <p>
    <b>Отрицательное предложение</b> образуется с&nbsp;помощью вспомогательного глагола&nbsp;<b class="sel">do</b>,
    который никак не&nbsp;переводится, но&nbsp;выполняет две задачи:
    (1.) показывает <span class="time">время</span> действия
    и&nbsp;(2.) присоединяет к&nbsp;себе частицу &laquo;<b class="sel">not</b>&raquo; (не)
  </p>
  <p>
    Смысловой глагол (expect = ожидать) освобождается от&nbsp;всей нагрузки и&nbsp;принимает свою начальную форму
    во&nbsp;всех предложениях.
  </p>
  <p>
    Модальный глагол <b class="sel">will</b> сам по&nbsp;себе уже является вспомогательным,
    поэтому может присоединяет к&nbsp;себе <b class="not">not</b> без дополнительной помощи.
  </p>


  <div class="col1 frame1">
    <div>
      <div class="border">
        <table>
          <tr v-for="subj in subject" :key="subj">
            <td>{{ subj }}</td>
            <td><u class="time">did</u> <u class="sel">not</u></td>
            <td>expect.</td>
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
            <td>
              <u class="time" v-if="i < 4"><u class="time">do</u> <u class="sel">not</u></u>
              <u class="time" v-else><u class="time">does</u> <u class="sel">not</u></u>
            </td>
            <td>expect.</td>
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
            <td><u class="time">will</u> <u class="sel">not</u></td>
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

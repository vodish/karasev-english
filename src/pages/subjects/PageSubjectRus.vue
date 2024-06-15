<script setup lang="ts">
import { ref } from 'vue'
import IconStar from '@/components/icon/IconStar.vue'
import IconWarning from '@/components/icon/IconWarning.vue'
import IconCheckCircle from '@/components/icon/IconCheckCircle.vue'
import { compareStr } from '@/stores/store.sentence'

const subject = ref([
  { en: 'I', ru: 'я', input: '', compare: 'wait' },
  { en: 'you', ru: 'ты', input: '', compare: 'wait' },
  { en: 'we', ru: 'мы', input: '', compare: 'wait' },
  { en: 'they', ru: 'они', input: '', compare: 'wait' },
  { en: 'he', ru: 'он', input: '', compare: 'wait' },
  { en: 'she', ru: 'она', input: '', compare: 'wait' },
  { en: 'it', ru: 'оно', input: '', compare: 'wait' },
])

function check1(value, k) {
  subject.value[k].input = value
  const { ru, input } = subject.value[k]
  subject.value[k].compare = compareStr(ru, input)
}

</script>

<template>
  <p>
    Кстати, в&nbsp;английском &laquo;я&raquo; всегда пишется с&nbsp;заглавной буквы&nbsp;&mdash; <span
      style="font-family: Times;">I</span>. <br />
    Впиши субъкта &laquo;по-русски&raquo;, в&nbsp;третью колонку.
  </p>

  <div class="flex">
    <table class="col1 tbl1">
      <thead>
        <td>Субъект</td>
        <td>Перевод</td>
        <td>По-русски</td>
        <td>Проверка</td>
      </thead>
      <tr>
        <td></td>
      </tr>
      <tbody>
        <template v-for="({ en, ru, compare }, k) in subject" :key="ru">
          <tr>
            <td>{{ en }}</td>
            <td>{{ ru }}</td>
            <td><input type="text" class="subject" maxlength="3" @input="event => check1(event.target.value, k)" /></td>
            <td class="check">
              <span v-if="compare === 'wait' || compare === 'type'">...</span>
              <IconStar v-else-if="compare==='done'" />
              <IconWarning v-else-if="compare==='err'" />

              <!-- <span>...</span>
              <IconStar :size="24" />
              <IconWarning :size="24" /> -->
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <div class="done">
      <IconCheckCircle :size="200" />
    </div>
  </div>

  {{ subject }}
</template>


<style scoped>
td.check {
  display: flex;
  align-items: center;
}

.flex {
  display: flex;
  gap: 5%;
}
.flex > .done {
  margin-top: 5em;
}
</style>
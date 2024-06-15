<script setup lang="ts">
import { ref } from 'vue'
import IconStar from '@/components/icon/IconStar.vue'
import IconWarning from '@/components/icon/IconWarning.vue'
import IconCheck from '@/components/icon/IconCheck.vue'
import IconCheckCircle from '@/components/icon/IconCheckCircle.vue'

const subject = ref([
  { en: 'I', ru: 'я', input: '', check: false },
  { en: 'you', ru: 'ты', input: '', check: false },
  { en: 'we', ru: 'мы', input: '', check: false },
  { en: 'they', ru: 'они', input: '', check: false },
  { en: 'he', ru: 'он', input: '', check: false },
  { en: 'she', ru: 'она', input: '', check: false },
  { en: 'it', ru: 'оно', input: '', check: false },
])

function check1(value, k) {
  subject.value[k].input = value
  const { ru, input } = subject.value[k]
  subject.value[k].check = ru.toLowerCase() === input.toLowerCase()
}

function compareStr(srt: string, type: string) {
  if (type === '') return 'wait'

  const str1 = srt.toLowerCase()
  const type1 = type.toLowerCase()

  if (str1 === type1) return 'done'

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
        <template v-for="({ en, ru, input, check }, k) in subject" :key="ru">
          <tr>
            <td>{{ en }}</td>
            <td>{{ ru }}</td>
            <td><input type="text" class="subject" maxlength="3" @input="event => check1(event.target.value, k)" /></td>
            <td class="check">
              <span v-if="input === ''">...</span>
              <IconStar v-else-if="check" />
              <IconWarning v-else />

              <span>...</span>
              <IconStar :size="20" />
              <IconWarning :size="20" />

            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <div class="done">
      <IconCheckCircle :size="200" />
    </div>
  </div>
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
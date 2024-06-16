<script setup lang="ts">
import IconCheckCircle from '@/components/icon/IconCheckCircle.vue';
import IconStar from '@/components/icon/IconStar.vue';
import IconWarning from '@/components/icon/IconWarning.vue';
import { compareStr } from '@/stores/store.sentence';
import { ref } from 'vue';

const subj = [
  { en: 'I', ru: 'я' },
  { en: 'you', ru: 'ты' },
  { en: 'we', ru: 'мы' },
  { en: 'they', ru: 'они' },
  { en: 'he', ru: 'он' },
  { en: 'she', ru: 'она' },
  { en: 'it', ru: 'это' },
]


const subject = ref([
  { task: 'I', pass: 'я', input: '', compare: 'wait' },
  { task: 'you', pass: 'ты', input: '', compare: 'wait' },
  { task: 'we', pass: 'мы', input: '', compare: 'wait' },
  { task: 'they', pass: 'они', input: '', compare: 'wait' },
  { task: 'he', pass: 'он', input: '', compare: 'wait' },
  { task: 'she', pass: 'она', input: '', compare: 'wait' },
  { task: 'it', pass: 'это', input: '', compare: 'wait' },
])

const done = ref(0)

function check1(value: string, k: number) {
  subject.value[k].input = value
  const { pass, input } = subject.value[k]
  subject.value[k].compare = compareStr(pass, input)

  done.value = subject.value.reduce((res, el) => {
    return res = res + (el.compare === 'done' ? 1 : 0)
  }, 0)
}

</script>

<template>
  <p>
    Тренажер для запоминания субъектов. Нужно пройти 30 уровней, чтобы легко двигаться дальше.
  </p>

  <div class="flex">
    <table class="col1 tbl1">
      <thead>
        <td>Субъект</td>
        <td>Перевод</td>
        <td>Проверка</td>
      </thead>
      <tr>
        <td></td>
      </tr>
      <tbody>
        <template v-for="({ task, compare }, k) in subject" :key="task">
          <tr>
            <td>{{ task }}</td>
            <td><input type="text" class="subject" maxlength="4"
                @input="e => check1((e.target as HTMLInputElement).value, k)" /></td>
            <td class="check">
              <div>
                <span v-if="compare === 'wait'">...</span>
                <span v-else-if="compare === 'type'">..</span>
                <IconStar v-else-if="compare === 'done'" :size="24" />
                <IconWarning v-else-if="compare === 'err'" :size="24" />
              </div>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
    <div class="done">
      <IconCheckCircle :size="200" v-if="subject.length === done" />
    </div>
  </div>
</template>

<style scoped>
td.check > div {
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

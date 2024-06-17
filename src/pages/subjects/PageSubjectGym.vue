<script setup lang="ts">
import { ref } from 'vue';
import { compareStr, startUp } from '@/stores/store.sentence';
import IconCheckCircle from '@/components/icon/IconCheckCircle.vue';
import IconStar from '@/components/icon/IconStar.vue';
import IconWarning from '@/components/icon/IconWarning.vue';

const round = ref(0) // текущий уровень
const target = ref(0) // всего уровней

// текущее задание
type TSubject = { task: string; pass: string; input: string; compare: string }

const subject = ref<TSubject[]>([
  { task: 'I', pass: 'я', input: '', compare: 'wait' },
  { task: 'you', pass: 'ты', input: '', compare: 'wait' },
  { task: 'we', pass: 'мы', input: '', compare: 'wait' },
  { task: 'they', pass: 'они', input: '', compare: 'wait' },
  { task: 'he', pass: 'он', input: '', compare: 'wait' },
  { task: 'she', pass: 'она', input: '', compare: 'wait' },
  { task: 'it', pass: 'это', input: '', compare: 'wait' },
])


//генерация задания
function genSbject() {
  round.value++;

  const shuffle = <T>(array: T[]) => array.sort(() => Math.random() - 0.5);

  // список строк, перемешанный
  const list = shuffle([
    ['I', 'я'],
    ['you', 'ты'],
    ['we', 'мы'],
    ['they', 'они'],
    ['he', 'он'],
    ['she', 'она'],
    ['it', 'это'],
  ])

  // рандомное число строк, зависит от раунда
  // ограниченное число строк, зависит от раунда
  const offset = round.value < 20 ? 4 : 5;
  const slice = list.slice(0, offset)

  const subj1 = slice.map(el => {
    let task = 1
    let pass = 0
    if (round.value < 20) {
      task = 0
      pass = 1
    } else {
      el = shuffle(el)
    }

    return {
      task: startUp(el[task]),
      pass: el[pass],
      input: '',
      compare: 'wait',
    }
  })


  subject.value = subj1
}
genSbject()





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
    <button @click="genSbject">genSbject</button>
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
      <div>{{ round }} / {{ target }}</div>
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
  min-height: 300px;
  align-items: flex-start;
}
.flex > .done {
  margin-top: 5em;
}
</style>

<script setup lang="ts">
import { ref } from 'vue';
import { compareStr, startUp } from '@/stores/store.sentence';
import IconCheckCircle from '@/components/icon/IconCheckCircle.vue';
import IconStar from '@/components/icon/IconStar.vue';
import IconWarning from '@/components/icon/IconWarning.vue';

type TSubject = { task: string; pass: string; input: string; compare: string }


// текущий уровень
// текущее задание
const round = ref(0)
const subject = ref<TSubject[]>([])
const done = ref(false)

//генерация задания
setRound();



function setRound() {
  const shuffle = <T>(array: T[]) => array.sort(() => Math.random() - 0.5);

  round.value++;  // добавить раунд
  const list = shuffle([  // список строк, перемешанный
    ['I', 'я'],
    ['you', 'вы'],
    ['we', 'мы'],
    ['they', 'они'],
    ['he', 'он'],
    ['she', 'она'],
    ['it', 'это'],
  ])

  const offset = round.value < 20 ? 4 : 6;  // рандомное число строк, зависит от раунда
  const slice = list.slice(0, offset);  // ограниченное число строк, зависит от раунда


  // установить новое задание
  subject.value = slice.map(el => {
    let task = 1, pass = 0;
    if (round.value < 10) task = 0, pass = 1;
    if (round.value > 20) el = shuffle(el);

    return {
      task: startUp(el[task]),
      pass: el[pass],
      input: '',
      compare: 'wait',
    }
  })

  setTimeout(() => {
    document.getElementById('table')?.getElementsByTagName('input')[0].focus()
  }, 3)
}



// проверка ввода

function handleType(value: string, k: number) {
  subject.value[k].input = value
  const { pass, input } = subject.value[k]
  subject.value[k].compare = compareStr(pass, input)

  const score = subject.value.reduce((res, el) => {
    return res = res + (el.compare === 'done' ? 1 : 0)
  }, 0)

  // console.log(subject.value[k].compare)

  if (score === subject.value.length) {
    setTimeout(setRound, 600)
    setTimeout(() => { done.value = true }, 200)
    setTimeout(() => { done.value = false }, 1500)
  }
  else if (subject.value[k].compare === 'done') {
    console.log(k + 1)
    setTimeout(() => {
      // console.log(document.getElementById('table')?.getElementsByTagName('input'))
      document.getElementById('table')?.getElementsByTagName('input')[k + 1].focus()
    }, 3)
  }
}

</script>

<template>
  <p>
    Тренажер для запоминания субъектов. Нужно пройти больше 30 уровней, чтобы легко двигаться дальше.
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
      <tbody id="table">
        <template v-for="({ task, compare }, k) in subject" :key="task + round">
          <tr>
            <td>{{ task }}</td>
            <td>
              <input type="text" class="subject" maxlength="4"
                @input="e => handleType((e.target as HTMLInputElement).value, k)" />
            </td>
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
    <div class="score">
      <div class="round" v-if="!done">{{ round }}</div>
      <IconCheckCircle :size="200" v-else />
    </div>
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  gap: 8%;
  min-height: 300px;
  align-items: flex-start;
}
.score {
  margin-top: 3em;
}

.check > div {
  display: flex;
  align-items: center;
}

.round {
  width: 160px;
  height: 160px;
  color: #f19e39;
  border: solid 13px #be9f79;
  border-radius: 100%;
  line-height: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: monospace;
  font-size: 76px;
  margin: 20px;
}
</style>

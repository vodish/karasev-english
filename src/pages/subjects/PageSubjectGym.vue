<script setup lang="ts">
import { ref } from 'vue';
import { compareStr, startUp } from '@/stores/store.sentence';
import IconCheckCircle from '@/components/icon/IconCheckCircle.vue';
import IconStar from '@/components/icon/IconStar.vue';
import IconWarning from '@/components/icon/IconWarning.vue';


type TTaskList = {
  task: string
  pass: string
  input: string
  compare: string
}
const subject = ref<TTaskList[]>([
  { task: 'I', pass: 'я', input: '', compare: 'wait' },
  { task: 'you', pass: 'ты', input: '', compare: 'wait' },
  { task: 'we', pass: 'мы', input: '', compare: 'wait' },
  { task: 'they', pass: 'они', input: '', compare: 'wait' },
  { task: 'he', pass: 'он', input: '', compare: 'wait' },
  { task: 'she', pass: 'она', input: '', compare: 'wait' },
  { task: 'it', pass: 'это', input: '', compare: 'wait' },
])

const level = ref(1)
const min = ref(1)

function genSbject() {
  const rand = (max: number) => Math.floor(Math.random() * max);
  const shuffle = (array: number[]) => array.sort(() => Math.random() - 0.5);
  
  const list = [
    { en: 'I', ru: 'я' },
    { en: 'you', ru: 'ты' },
    { en: 'we', ru: 'мы' },
    { en: 'they', ru: 'они' },
    { en: 'he', ru: 'он' },
    { en: 'she', ru: 'она' },
    { en: 'it', ru: 'это' },
  ]

  const listRand = min.value + rand(list.length - 1 - min.value)
  let listShuffle = shuffle(Array.from(list.keys()))
  listShuffle = listShuffle.slice(0, listRand)
  // console.log(listShuffle)

  let newSubject: TTaskList[] = []
  listShuffle.forEach(i => {
    // десятка = с английского на русский
    // двадцатка = с русского на английский
    // далее = и так и сяк
    newSubject.push({
      task: startUp(list[i].ru),
      pass: list[i].en,
      input: '',
      compare: 'wait',
    })
  })

  // console.log(newSubject)

  subject.value = newSubject

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

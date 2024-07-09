<script setup lang="ts">
import { computed, ref } from 'vue'
import { compareStr, useSentenceStore } from '@/stores/store.sentence'
import IconStar from '@/components/icon/IconStar.vue';
import IconWarning from '@/components/icon/IconWarning.vue';


const sentence = useSentenceStore()
sentence.setVerbList(['expect'])
// sentence.setVerbList(['do'])



const question = ref('')
const answer = ref('')
const type = ref('')
const type1 = computed(() => type.value.charAt(0).toUpperCase() + type.value.slice(1))
const compare = ref('wait')
refresh();


function refresh() {
  type.value = ''
  compare.value = 'wait'
  const form = sentence.getTask()
  question.value = form.ruForm
  answer.value = form.enForm
}



function handleType(e: KeyboardEvent) {
  type.value = (e.target as HTMLInputElement).value
  compare.value = compareStr(answer.value, type.value)

  if ( e.code == 'Enter' ) refresh()
}



</script>

<template>
  <div class="task">{{ question }}</div>
  <div class="res sel">{{ type1 }}</div>

  <div class="type">
    <input @keyup="handleType" placeholder="Пиши здесь" v-model="type" />
    <div class="check">
      <IconWarning v-if="compare === 'err'" :size="24" />
      <IconStar v-if="compare === 'done'" :size="24" />
    </div>

  </div>



  <p class="descr">
    Тренажер для запоминания порядка слов в предложении вместе со смысловыми глаголами.
    <a href="" @click.prevent="refresh">Enter</a>
  </p>
  <div class="answer">{{ answer }} </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merienda:wght@300..900&display=swap');

* {
  text-align: center;
}

p {
  width: 100%;
}

.task {
  font-size: 1.4em;
  margin: 2em 0 1em 0;
}

div.res {
  min-height: 2em;
  font-size: 3em;
  font-family: "Merienda", "Times New Roman", cursive;
  font-optical-sizing: auto;
  line-height: 1.2em;

}

@media (max-width: 768px) {
  div.res {
    min-height: 1.3em;
    margin-bottom: 0.8em;
  }
}

.type {
  display: flex;
  justify-content: center;
  align-items: baseline;
  gap: 1ch;
}
.type .input {
  flex-basis: 300px;
  text-align: center;
  display: block;
  margin: 1em auto;
}
.type .check svg {
  position: absolute;
  margin-top: -18px;
}

.descr {
  margin-top: 4em;
}

.answer {
  opacity: 0.2;
  margin: 1em 0;
}
</style>
<script setup lang="ts">
import { ref } from 'vue'
import { compareStr, useSentenceStore } from '@/stores/store.sentence'
import IconStar from '@/components/icon/IconStar.vue';


const sentence = useSentenceStore()
sentence.setVerbList(['expect'])
// sentence.setVerbList(['do'])
sentence.genTask()


const type = ref('')
const compare = ref('wait')

function handleType(e: Event) {
  type.value = (e.target as HTMLInputElement).value
  compare.value = compareStr(sentence.en, type.value)
  // win.value = type.value.length ? 1: 0
}

</script>

<template>
  <div class="task">{{ sentence.ru }}</div>
  <div class="res sel">{{ type }}</div>

  <div>
    <input class="type" :value="type" @input="handleType" placeholder="Пиши здесь" />
  </div>

  <div class="win">
    {{ compare }}
    <!-- <IconStar :size="24" />
    <IconStar :size="24" />
    <IconStar :size="24" /> -->
  </div>


  <p class="descr">
    Тренажер для запоминания порядка слов в предложении вместе со смысловыми глаголами.
    <a href="" @click.prevent="sentence.genTask()">Refresh</a>
  </p>
  <div class="answer">{{ sentence.en }} </div>
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
}

.win {
  display: flex;
  justify-content: center;
  gap: 1ch;
  height: 3em;
  /* border: solid 1px red; */
}


.type {
  width: 100%;
  max-width: 300px;
  text-align: center;
  display: block;
  margin: 1em auto;
}

.descr {
  margin-top: 4em;
}

.answer {
  opacity: 0.2;
  margin: 1em 0;
}
</style>
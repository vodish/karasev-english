<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import { compareStr, useSentenceStore } from '@/stores/store.sentence'
import IconStar from '@/components/icon/IconStar.vue';
import IconWarning from '@/components/icon/IconWarning.vue';


const route = useRoute()


// настройки
const verbsRegular = ['expect'];
const verbsIrregular = ['do'];
const tagInput = ref()
const options = ref(true)


// тренажёр
const sentence = useSentenceStore()
const question = ref('')
const answer = ref('')
const type = ref('')
const type1 = computed(() => type.value.charAt(0).toUpperCase() + type.value.slice(1))
const compare = ref('wait')



// обработчики
// установить курсор в поле ввода
onMounted(() => {
  refresh()
  nextTick(() => tagInput.value.focus())
})



function refresh() {
  type.value = ''
  compare.value = 'wait'
  const form = sentence.getTask('expect')
  question.value = form.ruForm
  answer.value = form.enForm

  console.log(sentence.param.verb)
}

function handleType(e: KeyboardEvent) {
  type.value = (e.target as HTMLInputElement).value
  compare.value = compareStr(answer.value, type.value)

  if (e.key == 'Enter') refresh()
}






</script>

<template>
  <div class="center">
    <div class="task">{{ question }}</div>
    <div class="res sel">{{ type1 }}</div>

    <div class="type">
      <input @keyup="handleType" placeholder="Пиши перевод" v-model="type" ref="tagInput" />
      <div class="check">
        <IconWarning v-if="compare === 'err'" :size="24" />
        <IconStar v-if="compare === 'done'" :size="24" />
      </div>
    </div>


    <p class="descr">
      Тренажер для запоминания порядка слов в предложении вместе со смысловыми глаголами.
      <a href="" @click.prevent="refresh">Enter</a>
    </p>
    <div class="answer">(expected), (expect, expects) | {{ answer }} </div>




    <a href="" @click.prevent="options = !options">Настройки</a>
    <div class="options" v-if="options">
      <div>
        {{ route.query.verb }}
      </div>

      <ul class="verbs">
        <li>Правильные</li>
        <li v-for="v in verbsRegular">
          <RouterLink :to="{ path: '/sentence/gym', query: { verb: v } }" :class="{ active: route.query.verb == v }">
            {{ v }}
          </RouterLink>
        </li>
      </ul>
      <ul class="verbs">
        <li>Неправильные</li>
        <li v-for="v in verbsIrregular">
          <RouterLink :to="{ path: '/sentence/gym', query: { verb: v } }" :class="{ active: route.query.verb == v }">
            {{ v }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merienda:wght@300..900&display=swap');

.center {
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
}
.type input {
  /* flex-basis: 200px; */
  text-align: center;
}
.type .check svg {
  position: absolute;
  margin: -18px 0 0 1ch;
}

.descr {
  margin-top: 4em;
}

.answer {
  opacity: 0.2;
  margin: 1em 0;
}


.options {
  text-align: left;
}

.verbs {
  list-style: none;
  margin: 2em 0 0 0;
  padding: 0;
  text-align: left;
  columns: 90px auto;
  column-gap: 1ch;
}
.verbs > *:first-child {
  font-size: 0.8em;
  margin: 0.3em 0 0.2em 0;
}
.verbs a.active {
  color: inherit;
}
</style>
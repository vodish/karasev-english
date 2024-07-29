<script setup lang="ts">
import { ref, computed, nextTick, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { compareStr, useSentenceStore } from '@/stores/store.sentence'
import IconStar from '@/components/icon/IconStar.vue';
import IconWarning from '@/components/icon/IconWarning.vue';
import { verbs } from '@/db/db.verbs'
import { verbsRegular } from '@/db/db.verbsRegular'
import { verbsIrregular } from '@/db/db.verbsIrregular'
import type { Tverb, TverbObj } from '@/db/db.verbs.type';


// вспомогательны объекты

const route = useRoute()
const router = useRouter()
const tagInput = ref()

function queryVerbDefault() {
  if (Object.keys(route.query).length == 0) {
    router.push({ query: { verb: 'expect' }, replace: true })
  }
}

// слежка за гет-параметром verb (изменяется настройками тренажера)
watch(
  () => route.query.verb,
  () => {
    queryVerbDefault()
    refresh()
  }
)

// установить курсор в поле ввода
onMounted(() => {
  queryVerbDefault()
  refresh()
  nextTick(() => tagInput.value.focus())
})




// тренажёр
const count = ref(0)
const sentence = useSentenceStore()
const question = ref('')
const answer = ref('')
const type = ref('')
const type1 = computed(() => type.value.charAt(0).toUpperCase() + type.value.slice(1))
const compare = ref('wait')
const verbObj = ref<TverbObj>()




function refresh() {
  if (!route.query.verb) return;

  let verbList = optionsVerb.value.filter(el => !['', 'all'].includes(el))
  if (optionsMod.value === 'all') {
    verbList = [...verbsRegular, ...verbsIrregular.filter(el => el !== 'be')]
  }

  count.value = count.value + 1
  type.value = ''
  compare.value = 'wait'
  const form = sentence.getTask(verbList.join('|'))
  question.value = form.ruForm
  answer.value = form.enForm

  verbObj.value = verbs[sentence.param.verb as Tverb]
}

function handleType(e: KeyboardEvent) {
  type.value = (e.target as HTMLInputElement).value
  compare.value = compareStr(answer.value, type.value)

  if (e.key == 'Enter') {
    if (compare.value !== 'done') return
    refresh()
  }
}


// настройки тренажера

const options = ref(false)
const optionsVerb = computed(() => {
  if (!route.query.verb) return [];
  return (route.query.verb as string).split('|')
})
const optionsMod = computed(() => {
  if (!route.query.verb) return ''
  if (optionsVerb.value.length === 1) return 'one'
  if (optionsVerb.value.includes('all')) return 'all'
  return 'many'
})

function setMod(mod: string) {
  const newVerb = optionsVerb.value.filter(e => !['', 'all'].includes(e))

  if (mod == 'one') return { query: { verb: newVerb[0] || 'expect' } };
  if (mod == 'many') return { query: { verb: newVerb.join('|') + '|' } };
  newVerb.push('all')
  return { query: { verb: newVerb.join('|') } }
}

function setVerb(newVerb: string) {
  let newList = optionsVerb.value.filter(el => !['', 'all'].includes(el))

  if (optionsMod.value === 'many') {
    if (newList.includes(newVerb)) newList = newList.filter(el => el != newVerb)
    else { newList.push(newVerb) };

    return { query: { verb: newList.join('|') + '|' } }
  }

  return { query: { verb: newVerb } }
}

</script>



<template>
  <div class="center">
    <div class="task">{{ question }}</div>
    <div class="res sel">{{ type1 }}</div>

    <div class="type">
      <div class="count">{{ count }}</div>
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
    <div class="answer">
      ({{ verbObj?.pastSimple.join(', ') }}),
      ({{ verbObj?.presentSimple.join(', ') }}).
      {{ answer }}
    </div>




    <p><a href="" @click.prevent="options = !options">Настройки</a></p>

    <div class="options" v-if="options">
      <div class="mod">
        Глаголы:
        <RouterLink :to="setMod('one')" :class="{ active: optionsMod == 'one' }">
          Один
        </RouterLink>
        <RouterLink :to="setMod('many')" :class="{ active: optionsMod == 'many' }">
          Выбранные
        </RouterLink>
        <RouterLink :to="setMod('all')" :class="{ active: optionsMod == 'all' }">
          Все
        </RouterLink>
      </div>

      <ul class="verbs">
        <li>Правильные</li>
        <li v-for="v in verbsRegular" :key="v">
          <a href=""></a>
          <RouterLink :to="setVerb(v)" :class="{ active: optionsVerb.includes(v) }">
            {{ v }}
          </RouterLink>
        </li>
      </ul>
      <ul class="verbs">
        <li>Неправильные</li>
        <li v-for="v in verbsIrregular" :key="v">
          <RouterLink v-if="v != 'be'" :to="setVerb(v)" :class="{ active: optionsVerb.includes(v) }">
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
  justify-content: space-between;
  align-items: baseline;
  width: 280px;
  margin: 0 auto;
}

.type input {
  /* flex-basis: 200px; */
  text-align: center;
}
.type .check svg {
  position: absolute;
  margin: -16px 0 0 -1ch;
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
.options .mod {
  display: flex;
  gap: 2ch;
}

.options .verbs {
  list-style: none;
  margin: 2em 0 0 0;
  padding: 0;
  text-align: left;
  columns: 90px auto;
  column-gap: 1ch;
}
.options .verbs > *:first-child {
  font-size: 0.8em;
  margin: 0.3em 0 0.2em 0;
}
.options a.active {
  color: inherit;
}
</style>
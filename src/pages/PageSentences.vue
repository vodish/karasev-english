<script setup lang="ts">
import { ref, computed } from 'vue';
import type { TpatternKey } from '@/db/db.pattern';
import { listSentence, listTime, listSubject, patterns, transForm } from '@/stores/store.sentence';

const sentenсeRu : {[k: string]: string} = {'affirmative': 'Утверждение', 'negative': 'Отрицание', 'question': 'Вопрос'}
const verb = ref('expect');

const form = computed(() => {
  let table: { [k: string]: string } = {}

  listSentence.forEach(sentence => {
    listTime.forEach(time => {
      listSubject.forEach(subject => {
        const form = transForm({
          pattern: patterns[`${sentence} ${time}` as TpatternKey],
          sentence,
          time,
          subject,
          verb: verb.value,
        })
        table[`${sentence} ${time} ${subject} ruForm`] = form.ruForm;
        table[`${sentence} ${time} ${subject} enForm`] = form.enForm;
      })
    })
  })

  return table
})
</script>

<template>
  <p>Проверка тренажёра предложений.</p>
  <div>Глаголы: [ выбрать ]</div>


  <div class="tbl2">
    <div class="top">
      <div class="time"></div>
      <div class="sel">Прошeдшее</div>
      <div class="sel">Настоящее</div>
      <div class="sel">Будушее</div>
    </div>
    <div class="row" v-for="sentence in listSentence" :key="sentence">
      <div class="sel sentence">{{ sentenсeRu[sentence] }}</div>
      <div class="time" v-for="time in listTime" :key="time">
        <div class="subject" v-for="subject in listSubject" :key="subject">
          <div>
            <div>{{ form[`${sentence} ${time} ${subject} ruForm`] }}</div>
            <div>{{ form[`${sentence} ${time} ${subject} enForm`] }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>


<style scoped>

.row {
  margin-top: 30px;
}
.sentence {
  display: flex !important;
  align-items: flex-start !important;
}
.time {
  color: inherit !important;
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>
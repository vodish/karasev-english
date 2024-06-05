<script setup lang="ts">
// import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute()

// const verb = ref(route.params.verb);
const subject = ['I', 'you', 'we', 'they', 'hi', 'shi', 'it']
const enPastSimple = ['expected', 'expected', 'expected', 'expected', 'expected', 'expected', 'expected']
const enPresentSimple = ['expect', 'expect', 'expect', 'expect', 'expects', 'expects', 'expects']


function change(e?: any) {
  console.log('change')
  console.log((e.target as HTMLTableCellElement).textContent)
}



// console.log(route.params);

</script>

<template>
  <h2>
    <RouterLink to="/verb/admin">back</RouterLink>
    .
    <RouterLink to="/verb/admin/expect">expect</RouterLink>
  </h2>

  <table>
    <thead>
      <td colspan="2">Past simple</td>
      <td class="subj">Subject</td>
      <td colspan="2">Present simple</td>
    </thead>
    <tbody>
      <tr v-for="(subj, i) in subject" :key="subj + route.params.verb">
        <td><div contenteditable="plaintext-only" :tabindex="10 + i">{{ enPastSimple[i] }}</div></td>
        <td><div contenteditable="plaintext-only" :tabindex="20 + i">ожидал</div></td>
        <td class="subj">{{ subj }}</td>
        <td><div contenteditable="plaintext-only" :tabindex="30 + i">{{ enPresentSimple[i] }}</div></td>
        <td><div contenteditable="plaintext-only" :tabindex="40 + i">ожидаю</div></td>
      </tr>
    </tbody>
  </table>
</template>


<style scoped>
thead > td {
  font-weight: bold;
}
td {
  vertical-align: baseline;
  padding: 10px 10px 0 10px;
}
[contenteditable] {
  /* border-bottom: solid 1px var(--color-border); */
  border-bottom: solid 1px transparent;
  padding: 2px;
}
[contenteditable]:focus {
  outline: none;
  border-bottom-color: #ccc;
}

.subj {
  padding: 3px 5ch;
}
</style>
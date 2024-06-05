<script setup lang="ts">

const verb = 'expect'
const subject = ['I', 'you', 'we', 'they', 'hi', 'shi', 'it']
const enPastSimple = ['expected', 'expected', 'expected', 'expected', 'expected', 'expected', 'expected']
const enPresentSimple = ['expect', 'expect', 'expect', 'expect', 'expects', 'expects', 'expects']


// const emit = defineEmits(['inFocus', 'submit', 'change'])

function change(e?: any) {
  console.log('change')
  console.log((e.target as HTMLTableCellElement).textContent)
}
</script>

<template>
  <h2><RouterLink to="/verb/admin">back</RouterLink> <RouterLink to="/verb/admin/expect">expect</RouterLink></h2>

  <p>$route {{ $route }}</p>
  <p>$route.params {{ $route.params }}</p>

  <table>
    <thead>
      <td colspan="2">Past simple</td>
      <td class="subj">Subject</td>
      <td colspan="2">Present simple</td>
    </thead>
    <tbody>
      <tr v-for="(subj, i) in  subject " :key="subj + verb">
        <td contenteditable="plaintext-only" :tabindex="10 + i" @keyup="change">{{ enPastSimple[i] }}</td>
        <td contenteditable="plaintext-only" :tabindex="20 + i">ожидал</td>
        <td class="subj">{{ subj }}</td>
        <td contenteditable="plaintext-only" :tabindex="30 + i">{{ enPresentSimple[i] }}</td>
        <td contenteditable="plaintext-only" :tabindex="40 + i">ожидаю</td>
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
  padding: 6px 10px;
}
td:focus {
  outline: solid 1px #ccc;
}

.subj {
  padding: 3px 5ch;
}
</style>
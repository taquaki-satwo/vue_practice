import Vue from 'vue'

const data = { a: 1 }
const vm = new Vue({ // eslint-disable-line no-unuserd-vars
  el: '#app',
  data: data
})

vm.$watch('a', function (newVal, oldVal) {
  console.log(newVal)
  console.log(oldVal)
})

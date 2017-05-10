import Vue from 'vue'

const vm = new Vue({ // eslint-disable-line no-unuserd-vars
  el: '#app',
  data: {
    msg: 'hello'
  },
  computed: {
    reversedMsg: function () {
      return this.msg.split('').reverse().join('')
    }
  }
})

vm.$watch('a', function (newVal, oldVal) {
  console.log(newVal)
  console.log(oldVal)
})

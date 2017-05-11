import Vue from 'vue'

const app = new Vue({ // eslint-disable-line no-unuserd-vars
  el: '#app',
  data: {
    numbers: [1, 2, 3, 4, 5]
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  },
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
})

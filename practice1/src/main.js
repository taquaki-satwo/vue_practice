import Vue from 'vue'

const app = new Vue({ // eslint-disable-line no-unuserd-vars
  el: '#app',
  data: {
    counter: 10,
    name: 'vue.js'
  },
  methods: {
    greet: function (e) {
      alert('Hello' + this.name)
      if (e) {
        alert(e.target.tagName)
      }
    },
    addCounter: function () {
      this.counter += 1
    },
    say: function(msg) {
      alert(msg)
    },
    warm: function(msg, e) {
      if (e) e.preventDefault()
      alert(msg + ' ' + e.currentTarget)
    }
  }
})

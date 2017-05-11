import Vue from 'vue'
import axios from 'axios'
import _ from 'lodash'

const app = new Vue({ // eslint-disable-line no-unuserd-vars
  el: '#app',
  data: {
    q: '',
    a: '入力してください'
  },
  watch: {
    q: function(newQ) {
      this.a = '入力中'
      this.get()
    }
  },
  methods: {
    get: _.debounce(
      function () {
        if (this.q.indexOf('?') === -1) {
          this.a = '?を入力してください'
          return
        }
        this.a = '考え中'
        const vm = this
        axios.get('https://yesno.wtf/api')
          .then(function (res) {
            vm.a = _.capitalize(res.data.answer)
          })
          .catch(function (error) {
            vm.a = `Error ${error}`
          })
      },
      500
    )
  }
})

console.log(vm.fullName)
console.log(vm.fullName = 'aaa bbb')

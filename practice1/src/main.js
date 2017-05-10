import Vue from 'vue'

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{todo.text}}</li>'
})

const app = new Vue({ // eslint-disable-line no-new
  el: '#app',
  data: {
    list: [
      {text: '1'},
      {text: '2'},
      {text: '3'},
    ]
  }
})

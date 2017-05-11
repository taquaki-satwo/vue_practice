import Vue from 'vue'

Vue.component('todo-item', {
  template: `
    <li>
      {{title}}
      <button @click="$emit('remove')">X</button>
    </li>
  `,
  props: ['title']
})

const app = new Vue({ // eslint-disable-line no-unuserd-vars
  el: '#app',
  data: {
    newTodoText: '',
    todos: [
      'todo1',
      'todo2',
      'todo3'
    ]
  },
  methods: {
    addNewTodo: function () {
      this.todos.push(this.newTodoText)
      this.newTodoText = ''
    }
  }
})

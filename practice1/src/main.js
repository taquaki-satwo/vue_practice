import Vue from 'vue'
const app = new Vue({ // eslint-disable-line no-unuserd-vars
  el: '#app',
  data: {
    parentMsg: 'vue',
    items: [
      { msg: 'hello' },
      { msg: 'world' }
    ],
    object: {
      first: 'john',
      last: 'Doe',
      age: 30
    }
  }
})

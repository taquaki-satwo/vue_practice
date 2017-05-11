import Vue from 'vue'

const app = new Vue({ // eslint-disable-line no-unuserd-vars
  el: '#app',
  data: {
    message: 'text',
    checked: true,
    toggle: true,
    a: 'aaaa',
    b: 'bbbb',
    checkedNames: [1, 2],
    picked: '',
    selected: 2,
    selects: [2],
    dynamicSelect: 1,
    options: [
      {text: 1, value: 1},
      {text: 2, value: 2},
      {text: 3, value: 3},
    ]
  }
})

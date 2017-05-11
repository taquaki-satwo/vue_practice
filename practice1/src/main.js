import Vue from 'vue'

Vue.component('global-component', {
  template: '<div>Global component</div>'
})

const LocalComponent = {
  props: ['myMessage'],
  template: '<div>Local component {{myMessage}}</div>',
}

Vue.component('data-function', {
  template: '<button @click="counter += 1">{{counter}}</button>',
  data: function () {
    return {
      counter: 0
    }
  }
})

Vue.component('local-property', {
  props: ['localMsg'],
  template: '<div>{{localMsg}} & {{msg}} & {{lowerCase}}</div>',
  data: function () {
    return {
      msg: this.localMsg
    }
  },
  computed: {
    lowerCase: function () {
      return this.msg.trim().toLowerCase()
    }
  }
})

const vm = new Vue({ // eslint-disable-line no-unuserd-vars
  el: '#app',
  components: {
    'local-component': LocalComponent
  },
  data: {
    myMessage: '文字テンプレート',
    parentMsg: 'Parent message'
  }
})

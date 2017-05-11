import Vue from 'vue'
import axios from 'axios'
import _ from 'lodash'

const app = new Vue({ // eslint-disable-line no-unuserd-vars
  el: '#app',
  data: {
    isActive: true,
    error: null,
    classObject: {
      active: true,
      'text-danger': null
    }
  },
  computed: {
    classObj: function () {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error && this.error.type === 'fatal',
      }
    }
  }
})

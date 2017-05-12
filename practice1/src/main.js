import Vue from 'vue'

Vue.component('currency-input', {
  template: `
    <span>
      $
      <input
        ref="input"
        :value="value"
        @input="updateValue($event.target.value)">
    </span>
  `,
  props: ['value'],
  methods: {
    updateValue: function (value) {
      var formattedValue = value
        .trim()
        .slice(
          0,
          value.indexOf('.') === -1
            ? value.length
            : value.index('.') + 3
        )

      if (formattedValue !== value) {
        this.$refs.input.value = formattedValue
      }

      this.$emit('input', Number(formattedValue))
    }
  }
})

const vm = new Vue({ // eslint-disable-line no-unuserd-vars
  el: '#app',
  data: {
    price: ''
  }
})

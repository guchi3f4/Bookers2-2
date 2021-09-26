import Vue from 'vue'
import B from '../Child.vue'
import A from '../Parent.vue'

document.addEventListener('turbolinks:load', () => {
// document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    data() {
      return {
        number: 'aa'
      }
    },
    watch: {
     number: function() {
        vm.num = this.number
      }
    },
    render: h => h(B)
  }).$mount("#child")

  var vm = new Vue({
    data() {
      return {
        num: ''
      }
    },
    render: h => h(A)
  }).$mount("#parent")
})
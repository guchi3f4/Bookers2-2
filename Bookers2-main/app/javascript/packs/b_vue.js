import Vue from 'vue'
import B from '../Child.vue'

document.addEventListener('turbolinks:load', () => {
// document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    render: h => h(B)
  }).$mount("#child")
})
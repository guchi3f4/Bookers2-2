import Vue from 'vue'
import Search from '../search.vue'

document.addEventListener('turbolinks:load', () => {
// document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    render: h => h(Search)
  }).$mount("#search")
})
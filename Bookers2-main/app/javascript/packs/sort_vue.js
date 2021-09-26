import Vue from 'vue'
import Sort from '../sort_bar.vue'
import Search from '../search.vue'

document.addEventListener('turbolinks:load', () => {
// document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    render: h => h(Sort)
  }).$mount("#sort_bar")

  new Vue({
    render: h => h(Search)
  }).$mount("#search")
})
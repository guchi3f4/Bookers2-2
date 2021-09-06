/* eslint no-console: 0 */
// Run this example by adding <%= javascript_pack_tag 'hello_vue' %> (and
// <%= stylesheet_pack_tag 'hello_vue' %> if you have styles in your component)
// to the head of your layout file,
// like app/views/layouts/application.html.erb.
// All it does is render <div>Hello Vue</div> at the bottom of the page.

import Vue from 'vue'
import App from '../tag.vue'

document.addEventListener('turbolinks:load', () => {
// document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    render: h => h(App)
  }).$mount("#tag")
})

// var component = {
//   data: function() {
//       return {
//         tags:  JSON.parse(document.getElementById('tag_list').dataset.json),
//         newTag: null,
//       }
//   },
//   methods: {
//     setTag: function (event) {
//       if (event.keyCode !== 13) return
//       var tag = this.newTag;
//       this.tags.push(tag);
//       this.newTag = '';
//     },
//     delTag: function(tag) {
//       this.tags.splice(this.tags.indexOf(tag), 1);
//     },
//   }
// };
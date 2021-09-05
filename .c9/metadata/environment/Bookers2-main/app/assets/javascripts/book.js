{"filter":false,"title":"book.js","tooltip":"/Bookers2-main/app/assets/javascripts/book.js","undoManager":{"mark":27,"position":27,"stack":[[{"start":{"row":0,"column":0},"end":{"row":21,"column":15},"action":"insert","lines":["<script>","        new Vue ({","          el: '#tag-app',","          data () {","              return {","                tags:  JSON.parse(document.getElementById('tag_list').dataset.json),","                newTag: null,","              }","          },","          methods: {","            setTag: function (event) {","              if (event.keyCode !== 13) return","              var tag = this.newTag;","              this.tags.push(tag);","              this.newTag = '';","            },","            delTag: function(tag) {","              this.tags.splice(this.tags.indexOf(tag), 1);","            },","          }","        })","      </script>"],"id":1}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":2},"action":"remove","lines":["  "],"id":2},{"start":{"row":2,"column":0},"end":{"row":2,"column":2},"action":"remove","lines":["  "]},{"start":{"row":3,"column":0},"end":{"row":3,"column":2},"action":"remove","lines":["  "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":2},"action":"remove","lines":["  "]},{"start":{"row":5,"column":0},"end":{"row":5,"column":2},"action":"remove","lines":["  "]},{"start":{"row":6,"column":0},"end":{"row":6,"column":2},"action":"remove","lines":["  "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":2},"action":"remove","lines":["  "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":2},"action":"remove","lines":["  "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":2},"action":"remove","lines":["  "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":2},"action":"remove","lines":["  "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":2},"action":"remove","lines":["  "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":2},"action":"remove","lines":["  "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":2},"action":"remove","lines":["  "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":2},"action":"remove","lines":["  "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":2},"action":"remove","lines":["  "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":2},"action":"remove","lines":["  "]},{"start":{"row":17,"column":0},"end":{"row":17,"column":2},"action":"remove","lines":["  "]},{"start":{"row":18,"column":0},"end":{"row":18,"column":2},"action":"remove","lines":["  "]},{"start":{"row":19,"column":0},"end":{"row":19,"column":2},"action":"remove","lines":["  "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":2},"action":"remove","lines":["  "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":2},"action":"remove","lines":["  "]}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":2},"action":"remove","lines":["  "],"id":3},{"start":{"row":2,"column":0},"end":{"row":2,"column":2},"action":"remove","lines":["  "]},{"start":{"row":3,"column":0},"end":{"row":3,"column":2},"action":"remove","lines":["  "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":2},"action":"remove","lines":["  "]},{"start":{"row":5,"column":0},"end":{"row":5,"column":2},"action":"remove","lines":["  "]},{"start":{"row":6,"column":0},"end":{"row":6,"column":2},"action":"remove","lines":["  "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":2},"action":"remove","lines":["  "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":2},"action":"remove","lines":["  "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":2},"action":"remove","lines":["  "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":2},"action":"remove","lines":["  "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":2},"action":"remove","lines":["  "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":2},"action":"remove","lines":["  "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":2},"action":"remove","lines":["  "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":2},"action":"remove","lines":["  "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":2},"action":"remove","lines":["  "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":2},"action":"remove","lines":["  "]},{"start":{"row":17,"column":0},"end":{"row":17,"column":2},"action":"remove","lines":["  "]},{"start":{"row":18,"column":0},"end":{"row":18,"column":2},"action":"remove","lines":["  "]},{"start":{"row":19,"column":0},"end":{"row":19,"column":2},"action":"remove","lines":["  "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":2},"action":"remove","lines":["  "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":2},"action":"remove","lines":["  "]}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":2},"action":"remove","lines":["  "],"id":4},{"start":{"row":2,"column":0},"end":{"row":2,"column":2},"action":"remove","lines":["  "]},{"start":{"row":3,"column":0},"end":{"row":3,"column":2},"action":"remove","lines":["  "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":2},"action":"remove","lines":["  "]},{"start":{"row":5,"column":0},"end":{"row":5,"column":2},"action":"remove","lines":["  "]},{"start":{"row":6,"column":0},"end":{"row":6,"column":2},"action":"remove","lines":["  "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":2},"action":"remove","lines":["  "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":2},"action":"remove","lines":["  "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":2},"action":"remove","lines":["  "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":2},"action":"remove","lines":["  "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":2},"action":"remove","lines":["  "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":2},"action":"remove","lines":["  "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":2},"action":"remove","lines":["  "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":2},"action":"remove","lines":["  "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":2},"action":"remove","lines":["  "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":2},"action":"remove","lines":["  "]},{"start":{"row":17,"column":0},"end":{"row":17,"column":2},"action":"remove","lines":["  "]},{"start":{"row":18,"column":0},"end":{"row":18,"column":2},"action":"remove","lines":["  "]},{"start":{"row":19,"column":0},"end":{"row":19,"column":2},"action":"remove","lines":["  "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":2},"action":"remove","lines":["  "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":2},"action":"remove","lines":["  "]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":8},"action":"remove","lines":["<script>"],"id":5}],[{"start":{"row":21,"column":0},"end":{"row":21,"column":9},"action":"remove","lines":["</script>"],"id":6}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":2},"action":"remove","lines":["  "],"id":8},{"start":{"row":2,"column":0},"end":{"row":2,"column":2},"action":"remove","lines":["  "]},{"start":{"row":3,"column":0},"end":{"row":3,"column":2},"action":"remove","lines":["  "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":2},"action":"remove","lines":["  "]},{"start":{"row":5,"column":0},"end":{"row":5,"column":2},"action":"remove","lines":["  "]},{"start":{"row":6,"column":0},"end":{"row":6,"column":2},"action":"remove","lines":["  "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":2},"action":"remove","lines":["  "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":2},"action":"remove","lines":["  "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":2},"action":"remove","lines":["  "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":2},"action":"remove","lines":["  "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":2},"action":"remove","lines":["  "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":2},"action":"remove","lines":["  "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":2},"action":"remove","lines":["  "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":2},"action":"remove","lines":["  "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":2},"action":"remove","lines":["  "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":2},"action":"remove","lines":["  "]},{"start":{"row":17,"column":0},"end":{"row":17,"column":2},"action":"remove","lines":["  "]},{"start":{"row":18,"column":0},"end":{"row":18,"column":2},"action":"remove","lines":["  "]},{"start":{"row":19,"column":0},"end":{"row":19,"column":2},"action":"remove","lines":["  "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":2},"action":"remove","lines":["  "]}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":9},{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["a"]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"remove","lines":["a"],"id":10}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"insert","lines":["$"],"id":11}],[{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"insert","lines":[" "],"id":12}],[{"start":{"row":0,"column":1},"end":{"row":0,"column":2},"action":"remove","lines":[" "],"id":13},{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"remove","lines":["$"]}],[{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":19}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":31},"action":"insert","lines":["$(document).ready(function () {"],"id":20}],[{"start":{"row":20,"column":2},"end":{"row":21,"column":0},"action":"insert","lines":["",""],"id":21}],[{"start":{"row":21,"column":0},"end":{"row":21,"column":2},"action":"insert","lines":["})"],"id":22}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":2},"action":"insert","lines":["  "],"id":24},{"start":{"row":3,"column":0},"end":{"row":3,"column":2},"action":"insert","lines":["  "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":2},"action":"insert","lines":["  "]},{"start":{"row":5,"column":0},"end":{"row":5,"column":2},"action":"insert","lines":["  "]},{"start":{"row":6,"column":0},"end":{"row":6,"column":2},"action":"insert","lines":["  "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":2},"action":"insert","lines":["  "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":2},"action":"insert","lines":["  "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":2},"action":"insert","lines":["  "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":2},"action":"insert","lines":["  "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":2},"action":"insert","lines":["  "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":2},"action":"insert","lines":["  "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":2},"action":"insert","lines":["  "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":2},"action":"insert","lines":["  "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":2},"action":"insert","lines":["  "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":2},"action":"insert","lines":["  "]},{"start":{"row":17,"column":0},"end":{"row":17,"column":2},"action":"insert","lines":["  "]},{"start":{"row":18,"column":0},"end":{"row":18,"column":2},"action":"insert","lines":["  "]},{"start":{"row":19,"column":0},"end":{"row":19,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":1},"action":"insert","lines":[" "],"id":25},{"start":{"row":1,"column":1},"end":{"row":1,"column":2},"action":"insert","lines":[" "]}],[{"start":{"row":20,"column":0},"end":{"row":20,"column":1},"action":"insert","lines":[" "],"id":26},{"start":{"row":20,"column":1},"end":{"row":20,"column":2},"action":"insert","lines":[" "]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":1},"action":"remove","lines":["$"],"id":27}],[{"start":{"row":1,"column":8},"end":{"row":1,"column":9},"action":"remove","lines":["e"],"id":28},{"start":{"row":1,"column":7},"end":{"row":1,"column":8},"action":"remove","lines":["u"]},{"start":{"row":1,"column":6},"end":{"row":1,"column":7},"action":"remove","lines":["V"]},{"start":{"row":1,"column":5},"end":{"row":1,"column":6},"action":"remove","lines":[" "]}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":2},"action":"remove","lines":["  "],"id":29}],[{"start":{"row":0,"column":30},"end":{"row":1,"column":0},"action":"remove","lines":["",""],"id":30}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":30},"action":"remove","lines":["(document).ready(function () {"],"id":31}],[{"start":{"row":20,"column":0},"end":{"row":20,"column":2},"action":"remove","lines":["})"],"id":32}],[{"start":{"row":19,"column":4},"end":{"row":20,"column":0},"action":"remove","lines":["",""],"id":33}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":2},"action":"remove","lines":["  "],"id":34},{"start":{"row":2,"column":0},"end":{"row":2,"column":2},"action":"remove","lines":["  "]},{"start":{"row":3,"column":0},"end":{"row":3,"column":2},"action":"remove","lines":["  "]},{"start":{"row":4,"column":0},"end":{"row":4,"column":2},"action":"remove","lines":["  "]},{"start":{"row":5,"column":0},"end":{"row":5,"column":2},"action":"remove","lines":["  "]},{"start":{"row":6,"column":0},"end":{"row":6,"column":2},"action":"remove","lines":["  "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":2},"action":"remove","lines":["  "]},{"start":{"row":8,"column":0},"end":{"row":8,"column":2},"action":"remove","lines":["  "]},{"start":{"row":9,"column":0},"end":{"row":9,"column":2},"action":"remove","lines":["  "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":2},"action":"remove","lines":["  "]},{"start":{"row":11,"column":0},"end":{"row":11,"column":2},"action":"remove","lines":["  "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":2},"action":"remove","lines":["  "]},{"start":{"row":13,"column":0},"end":{"row":13,"column":2},"action":"remove","lines":["  "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":2},"action":"remove","lines":["  "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":2},"action":"remove","lines":["  "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":2},"action":"remove","lines":["  "]},{"start":{"row":17,"column":0},"end":{"row":17,"column":2},"action":"remove","lines":["  "]},{"start":{"row":18,"column":0},"end":{"row":18,"column":2},"action":"remove","lines":["  "]},{"start":{"row":19,"column":0},"end":{"row":19,"column":2},"action":"remove","lines":["  "]}],[{"start":{"row":0,"column":0},"end":{"row":19,"column":2},"action":"remove","lines":["new ({","  el: '#tag-app',","  data () {","      return {","        tags:  JSON.parse(document.getElementById('tag_list').dataset.json),","        newTag: null,","      }","  },","  methods: {","    setTag: function (event) {","      if (event.keyCode !== 13) return","      var tag = this.newTag;","      this.tags.push(tag);","      this.newTag = '';","    },","    delTag: function(tag) {","      this.tags.splice(this.tags.indexOf(tag), 1);","    },","  }","})"],"id":35}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":0,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":98,"mode":"ace/mode/javascript"}},"timestamp":1630807770013,"hash":"adc83b19e793491b1c6ea0fd8b46cd9f32e592fc"}
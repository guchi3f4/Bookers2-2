<template>
  <div>
    <input type="hidden" id="tag-name" class="form-control" v-model="tags" name="content">
    <div class="d-flex flex-wrap align-items-center border rounded py-2 px-1">
      <div class="badge badge-primary badge-pill mr-1" style="font-size: 100%;" v-for="tag in tags">
        {{tag}}<span class="pl-1" type="button"v-on:click="delTag(tag)">×</span>
      </div>
      <vue-simple-suggest
        v-model="newTag"
        :list="getSuggestionList"
        :filter-by-query="true">
        <input class="border-0" style="outline: 0" type="text" placeholder="複数選択できます" v-model="newTag" v-on:keydown.enter="setTag"
        @input='onInput' autocomplete="off">
      </vue-simple-suggest>
    </div>
  </div>
</template>

<script>
 import VueSimpleSuggest from "vue-simple-suggest";
 import 'vue-simple-suggest/dist/styles.css';

  export default {
    components: {
      VueSimpleSuggest
    },
    data () {
        return {
          newTag: null,
          tags: [],
          allTags: JSON.parse(document.getElementById('all-tags').dataset.json),
          List: '',
        }
    },

    methods: {
      setTag: function (event) {
        if (event.keyCode !== 13) return
        let tag = this.newTag;
        this.tags.push(tag);
        this.newTag = '';
      },
      delTag: function(tag) {
        this.tags.splice(this.tags.indexOf(tag), 1);
      },
      onInput({target}) {
        this.newTag = target.value
      },
      getSuggestionList (){
        return this.allTags
      },
    },

    // computed: {
    //   filteredTags: function () {
    //     let filterTags = [];
    //     for (let i in this.allTags) {
    //       let tag = this.allTags[i];
    //       if (tag.indexOf(this.newTag) !== -1) {
    //         filterTags.push(tag);
    //       }
    //     }
  　　// 　return filterTags;
    //   }
    // },

    watch: {
      tags: function() {
        setTimeout(function() {
          document.getElementById("search-btn").click();
        }, 1)
      }
    }
  }
</script>
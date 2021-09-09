<template>
  <div>
    <input type="hidden" id="tag-name" class="form-control" v-model="tags" name="content">
    <div class="d-flex flex-wrap align-items-center border rounded py-2 px-1">
      <div class="badge badge-primary badge-pill mr-1" style="font-size: 100%;" v-for="tag in tags">
        {{tag}}<span class="pl-1" type="button"v-on:click="delTag(tag)">×</span>
      </div>
      <input class="border-0" style="outline: 0" type="text" placeholder="複数選択できます" v-model="newTag" v-on:keydown.enter="setTag"
      @input='onInput'>
    </div>
    <div v-if="filterTags.length">
      <div v-for="(tag, index) in filterTags">
        <div @click='selectTag(index)' v-bind:key="tag.index" v-text="tag"></div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
        return {
          newTag: null,
          tags: [],
          allTags: JSON.parse(document.getElementById('all-tags').dataset.json),
          filterTags: [],
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
        if (this.newTag.length >= 1) {
          for (let i in this.allTags) {
            let tag = this.allTags[i];
            if (tag.indexOf(this.newTag) !== -1) {
              this.filterTags.push(tag);
            }
          }
        }
        return this.filterTags
      },
      selectTag(index) {
        this.newTag = this.filterTags[index]
      }
    },

    // computed: {
    //   filteredTags: function () {
    //     let filterTags = [];
    //     for (let i in this.allTags) {
    //       let tag = this.allTags[i];
    //       if (tag.indexOf(this.newTag) !== -1) {
    //         filterTags.push(tag);
    //         this.open = true
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
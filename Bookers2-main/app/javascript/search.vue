<template>
  <div>
    <input type="hidden" id="tag-name" class="form-control" v-model="tags" name="content">
    <div class="d-flex flex-wrap align-items-center border rounded py-2 px-1">
      <div class="badge badge-primary badge-pill mr-1" style="font-size: 100%;" v-for="tag in tags">
        {{tag}}<span class="pl-1" type="button"v-on:click="delTag(tag)">×</span>
      </div>
      <input id="field1" class="border-0" style="outline: 0" type="text" placeholder="複数選択できます" v-model="newTag" v-on:keydown.enter="setTag"
      @input='onInput' autocomplete="off">
    </div>
    <div v-if="allTags.length && open">
      <div class='d-flex mt-2 p-2 border '>
        <div v-for="(tag2, index) in allTags" id='select-tags' class ="btn btn-primary rounded-pill mr-1 py-0"
          @click='selectTag(index)' v-bind:key="tag2.index" style="cursor: pointer">
          {{tag2}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
        return {
          newTag: '',
          tags: [],
          allTags: [],
          open: false,
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
        if (this.newTag != '') {
          axios.get("/api/books", {
            params: { keyword: this.newTag }
          })
          .then(response => {
            this.allTags = response.data;
            if (this.allTags) {
              this.open = true;
            }
          })
        }
        if (this.newTag == '') {
          setTimeout(() => {
            this.open = false;
          }, 200)
        }
      },

      selectTag(index) {
        this.tags.push(this.allTags[index]);
        this.newTag = '';
        setTimeout(() => {
          this.open = false;
        }, 300)
        document.getElementById("field1").focus()
      }
    },

    watch: {
      tags: function() {
        setTimeout(function() {
          document.getElementById("search-btn").click();
        }, 1)
        document.getElementById("field1").focus()
      }
    }
  }
</script>
<template>
  <div id="tag">
    <input type="hidden" id="tag-name" class="form-control" v-model="tags" name="book[tag_name]">
    <div id="tag" class="d-flex flex-wrap align-items-center border rounded py-2 px-1">
      <div class="badge badge-primary badge-pill mr-1" style="font-size: 100%;" v-for="tag in tags">
        {{tag}}<span class="pl-1" type="button"v-on:click="delTag(tag)">×</span>
      </div>
      <input class="border-0" style="outline: 0" type="text" placeholder="ここに追加" v-model="newTag" v-on:keydown.enter="setTag">
    </div>
  </div>
</template>

<script>
  export default ({
    data: function() {
        return {
          tags:  JSON.parse(document.getElementById('tag_list').dataset.json),
          newTag: null,
        }
    },
    methods: {
      setTag: function (event) {
        if (event.keyCode !== 13) return
        var tag = this.newTag;
        this.tags.push(tag);
        this.newTag = '';
      },
      delTag: function(tag) {
        this.tags.splice(this.tags.indexOf(tag), 1);
      },
    }
  })
</script>
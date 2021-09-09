<template>
  <div class="form-group">
    <vue-simple-suggest
      v-model="selected"
      :list="getSuggestionList"
      :filter-by-query="true">
      <input type="text" name="tag" id="tag" placeholder="タグを入力してください" autocomplete="off">
    </vue-simple-suggest>
  </div>
</template>

<script>
import VueSimpleSuggest from "vue-simple-suggest";
import 'vue-simple-suggest/dist/styles.css';

export default {
  components: {
      VueSimpleSuggest
  },
  data() {
    return {
      selected: '',
      List: '',
    };
  },
  methods: {
    getSuggestionList (){
      return [
          'Vue.js',
          'React.js',
          'Angular.js'
      ]
    }
  }
}
</script>

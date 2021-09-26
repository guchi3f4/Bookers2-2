<template>
  <div>
    <a data-remote="true" v-bind:href="'/books?sort=evaluation+DESC&content=' + link">評価が高い順</a>
    <Search title='aaaa'/>
  </div>
</template>

<script>
  import Search from '../search.vue'

  export default {
    name: 'SortBar',
    data () {
      return {
        link: '',
      }
    },
    components: {
      Search,
    },
  }
</script>
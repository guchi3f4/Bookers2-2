<template>
  <div>
    <input id="field" type="text" v-model="number" @input='onInput'>
    <p>{{number}}</p>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        number: '',
        oo: ''
      }
    },
    methods: {
      onInput() {
        this.$root.number = this.number
      }
    }
  };
</script>
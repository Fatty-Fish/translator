<template>
  <div id="translateContent">
      <h2>
          {{text}}
      </h2>
    </div>
      
</template>

<script>
export default {
  name: 'translateContent',
  computed: {
      text () {
          return this.$store.state.text;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
    width:80%;
    margin:0 auto;
}
</style>

<template>
  <div id="synonymsTemp">
      <ul>
        <li v-for = "item in syn" :key = "item.index">{{item.text}}</li>       
      </ul>
    </div>
</template>

<script>
export default {
  name: 'synonymsTemp',
  data () {
    return {
      
    }
  },
  computed: {
    syn() {
      var stateSyn = this.$store.state.Synonyms,
          synUnder,
          len = stateSyn.length;
      if (len > 6) {
        synUnder = stateSyn.slice(0,7)
      }else {
        synUnder = stateSyn
      }
      return synUnder
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li {
  padding:10px;
  margin:0 100px;
}
li:hover {
  background:#eee;
}
</style>

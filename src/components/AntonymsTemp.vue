<template>
  <div id="antonymsTemp">
      <ul>
        <li v-for = "item in ant" :key = "item.index">{{item.tr[0].text}}</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'antonymsTemp',
  data () {
    return {
      
    }
  },
  computed:{
    ant() {
      return this.$store.state.Antonyms;
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

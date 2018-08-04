<template>
  <div id="translateForm">
      <form @submit = "translate">
        <input type="text" v-model = "translateText" placeholder="Enter your words" class = "col-sm-6 col-md-8">
        <select name="lang" id="lang" v-model = "language">
          <option value="en">English</option>
          <option value="it">Italian</option>
          <option value="la">Latin</option>
          <option value="ko">Korean</option>
          <option value="fr">French</option>
        </select>
        <input type="submit" value = "Translate" class="btn btn-info">
      </form>
  </div>
</template>

<script>
export default {
  name: 'translateForm',
  data () {
    return {
      translateText: "",
      language:"en"
    }
  },
  methods:{
    translate: function (e) {
      this.$store.commit("relatedClear")
      this.$emit("submitTranslate", this.translateText,this.language)
      e.preventDefault();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
  <div id="app">
    <span class = "google_img"></span>
    <h1>翻译</h1>
    <h5 class = "text-muted">
      你看不见我是伪装的</h5>
    <translateForm @submitTranslate = "submitTranslate"></translateForm>
    <translateContent></translateContent>
    <p>If the TEXT TO TRANSLATE is simple English phrase, then you can also check out its</p>
    <router-link to = "/Synonyms" tag = "button" class = "btn">Synonyms</router-link>
    <router-link to = "/Antonyms" tag = "button" class = "btn">Antonyms</router-link>
    <transition :name = "direction">
      <router-view class = "router"></router-view>
    </transition>
  </div>
</template>

<script>
import translateForm from "./components/translateForm"
import translateContent from "./components/translateContent"
export default {
  name: 'App',
  components: {
    translateForm,translateContent
  },
  data () {
    return {
      direction:"left"
    }
  },
  methods: {
    submitTranslate: function (translateText,language) {
      this.$store.dispatch("findActions",{
        translateText,
        language
      })
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.meta.index;
      const fromDepth = from.meta.index;
      this.direction = toDepth < fromDepth ? 'right' : 'left'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.google_img {
  display:block;
  height: 33px;
  width: 92px;
  background:url(./assets/google.png);
  background-position: 0 -2145px;
  background-size: 92px 2973px;
}
button {
  background-image: linear-gradient(white, #fff 6%, #f7f7f7);
  background-repeat: no-repeat;
  filter: none;
  border: 1px solid #eeeeee;
  color: #212529;
  background-color: #fff;
  margin-bottom:10px;
}
.router{
  position:absolute;
}
.left-enter {
      opacity: 0;
      transform: translateX(-100%)
    }
    .left-enter-active {
      transition:1000ms;
    }
    .left-enter-to{
      opacity: 1;
      transform: translateX(0)
    }
    .left-leave {
      opacity: 1;
      transform: translateX(0)
    }
    .left-leave-active {
      transition:1000ms;
    }
    .left-leave-to{
      opacity: 0;
      transform: translateX(100%)
    }
    .right-enter {
      opacity: 0;
      transform: translateX(100%)
    }
    .right-enter-active {
      transition:1000ms;
    }
    .right-enter-to{
      opacity: 1;
      transform: translateX(0)
    }
    .right-leave {
      opacity: 1;
      transform: translateX(0)
    }
    .right-leave-active {
      transition:1000ms;
    }
    .right-leave-to{
      opacity: 0;
      transform: translateX(-100%)
    }
</style>

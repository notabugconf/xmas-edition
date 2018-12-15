<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/am-pino.jpg">
    <list/>
    <startAnimationBtn/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import startAnimationBtn from './components/startAnimationBtn'
import list from './components/list'

export default {
  name: 'app',
  components: {
//    HelloWorld,
    startAnimationBtn,
    list
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
</style>

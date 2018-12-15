<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/am-pino.jpg">
    <colorPicker v-model="color"/>
    <tempoPicker v-model="tempo"/>
    <startAnimationBtn :color="color" :tempo="tempo"/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import startAnimationBtn from './components/startAnimationBtn'
import tempoPicker from './components/tempoPicker'
import colorPicker from './components/colorPicker'

export default {
  name: 'app',
  components: {
//    HelloWorld,
    startAnimationBtn,
    tempoPicker,
    colorPicker
  },
  data: () => {
    return {
      color: 'red',
      tempo: '0'
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
</style>

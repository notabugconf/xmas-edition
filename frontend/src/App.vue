<template>
  <div id="app">
    {{ response }}
    <img alt="Vue logo" src="./assets/am-pino.jpg">
    <list/>
    <startAnimationBtn/>
    <colorPicker v-model="color"/>
    <tempoPicker v-model="tempo"/>
    <startAnimationBtn :color="color" :tempo="tempo"/>
    <Animation title="Scegli la tua animazione"/>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import startAnimationBtn from './components/startAnimationBtn'
import list from './components/list'
import tempoPicker from './components/tempoPicker'
import colorPicker from './components/colorPicker'
import colorPicker from './components/Animation'

export default {
  name: 'app',
  components: {
//    HelloWorld,
    startAnimationBtn,
    list,
    tempoPicker,
    colorPicker,
    Animation
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

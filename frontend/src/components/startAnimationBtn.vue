<template>
  <div>
    <a class="button" @click="launchAnimation">Invia animazione</a>
    color: {{color}}
    tempo: {{tempo}}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'startAnimationBtn',
  props: ['color', 'tempo'],
  methods: {
    launchAnimation: function () {
      console.log('superwow, sto per mandare la richiesta api!')
      axios
        .post('http://localhost:3000/api/animations/load', {
          code: 1,
          repeat: 5,
          color: [255,50,10], //ci può essere solo 1 colore, codificato in [r,g,b]
          frequency: this.color, 
          line: 1
        })
        .then((res) => console.log(res))
        .catch((err) => console.error(err))
    }
  }
}
</script>

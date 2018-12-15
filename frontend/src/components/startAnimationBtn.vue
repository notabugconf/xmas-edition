<template>
  <a class="button" @click="launchAnimation">Invia animazione</a>
</template>

<script>
import axios from 'axios'

export default {
  name: 'startAnimationBtn',
  props: {
  },
  methods: {
    launchAnimation: () => {
      console.log('superwow, sto per mandare la richiesta api!')
      axios
        .post('http://localhost:3000/api/animations/load', {
          code: 1,
          repeat: 5,
          color: [255,50,10],
          frequency: 100,
          line: 1
        })
        .then((res) => console.log(res))
        .catch((err) => console.error(err))
    }
  }
}
</script>

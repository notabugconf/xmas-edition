<template>
  <div class="animation">
    <h1>{{ title }}</h1>
    <ul>
      <li>
        <div v-for="get in response">
          <btnAnimation /> 
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import btnAnimation from './components/btnAnimation.vue'

const axios = require('axios');

axios.get('')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    console.log("always excecuted!");
  });

export default {
  name: 'Animation',
  props: {
    title: String
  },
  data:() =>  {
    return {
      response: response
    }    
  }
}
</script>

<template>
  <div class="animation">
    <h1>{{ title }}</h1>
    <div class="columns is-multiline is-tablet">
      <div v-for="get in response" :key="get.id">
        <btnAnimation :name="get.name"/>
      </div>
    </div>
  </div>
</template>

<script>
import btnAnimation from "./btnAnimation.vue";

const axios = require("axios");

export default {
  name: "Animation",
  props: {
    title: String
  },
  components: {
    btnAnimation
  },
  data() {
    return {
      response: {}
    };
  },
  created: function() {
    console.log(this);
    let that = this;
    axios
      .get("http://localhost:3000/api/animations")
      .then(function(response) {
        console.log(response);
        that.response = response.data;
      })
      .catch(function(error) {
        console.log(error);
      })
      .then(function() {
        console.log("always excecuted!");
      });
  }
};
</script>

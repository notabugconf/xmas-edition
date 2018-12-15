<template>
  <div class="columns is-multiline is-tablet">
    <div v-for="item in list" :key="item.id">
      <div class="column is-flex is-horizontal-center">
        <div class="box">
          <figure class="image is-128x128">
            <img src="https://bulma.io/images/placeholders/128x128.png">
          </figure>
          <div class="content">
            <p>{{item.name}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import json from "../mocks/api_mock.json";
export default {
  data() {
    return {
      list: json
    };
  }
  // created: function(){
  //     axios.get('../mocks/api_mock.js').then(response => this.symbols = response.data);
  // }
};
</script>

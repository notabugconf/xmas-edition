<template>
  <div class="hello">
    <div class="columns is-multiline is-tablet">
      <div class="column is-one-quarter is-flex is-horizontal-center">
        <div class="box">
          <figure class="image is-128x128">
            <img src="https://bulma.io/images/placeholders/128x128.png">
          </figure>
          <div class="content">
            <p>Animation 1</p>
          </div>
        </div>
      </div>
      <div class="column is-one-quarter is-flex is-horizontal-center">
        <div class="box">
          <figure class="image is-128x128">
            <img src="https://bulma.io/images/placeholders/128x128.png">
          </figure>
          <div class="content">
            <p>Animation 1</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AnimationList",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.is-horizontal-center {
  justify-content: center;
}
</style>

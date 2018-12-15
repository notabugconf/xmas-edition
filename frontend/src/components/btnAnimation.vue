<template>
  <div>
    <div class="column is-flex is-horizontal-center">
      <div class="box">
        <figure class="image is-128x128">
          <img src="https://bulma.io/images/placeholders/128x128.png">
        </figure>
        <div class="content">
          <p>{{name}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "btnAnimation",
  props: ["name"]
};
</script>

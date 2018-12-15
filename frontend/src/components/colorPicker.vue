<template>
  <div>
    Colore: <input type="string" :value="value" @input="triggerEvent"/>
  </div>
</template>

<script>
export default {
  name: 'tempoPicker',
  props: {
    value: String
  },
    methods: {
      triggerEvent(event) {
        this.$emit('input', event.target.value);
      }
    }  
}
</script>

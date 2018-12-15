<template>
<div>
    <div v-for="item in list" :key="item.id">
        {{item.name}}
    </div>
</div>
</template>

<script>
import axios from 'axios';
import json from '../mocks/api_mock.json';
export default {
    data() {
        return{
            list: json
        }
    },
    // created: function(){
    //     axios.get('../mocks/api_mock.js').then(response => this.symbols = response.data);
    // }
}
</script>

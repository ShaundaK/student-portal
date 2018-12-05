<template>
  <div>
    <p> Student ID: {{ capstone.student_id }} </p>
    <p> Name: {{ capstone.name }} </p>
    <p> Description: {{ capstone.description }} </p>
    <p> URL: {{ capstone.url }} </p>
    
   </div>
</template>

<script>
var axios = require('axios');
export default {
  data: function() {
    return {
      message: "Education",
      capstone: {}
    };
  },
  created: function() {
    console.log(this);
    axios.get('http://localhost:3000/api/capstones/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.capstone = response.data;
    })
  },
  methods: {},
  computed: {}
};
</script>
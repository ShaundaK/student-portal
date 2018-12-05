<template>
  <div>
    <p> Student ID: {{ skill.student_id }} </p>
    <p> Start Date: {{ skill.skill_name }} </p>
    
   </div>
</template>

<script>
var axios = require('axios');
export default {
  data: function() {
    return {
      message: "Skills",
      skill: {}
    };
  },
  created: function() {
    console.log(this);
    axios.get('http://localhost:3000/api/skills/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.skill = response.data;
    })
  },
  methods: {},
  computed: {}
};
</script>
<template>
  <div>
    <p> Student ID: {{ experience.student_id }} </p>
    <p> Start Date: {{ experience.start_date }} </p>
    <p> End Date: {{ experience.end_date }} </p>
    <p> Job Title: {{ experience.job_title }} </p>
    <p> Company Name: {{ experience.company_name }} </p>
    <p> Details: {{ experience.details }} </p>
    
   </div>
</template>

<script>
var axios = require('axios');
export default {
  data: function() {
    return {
      message: "Experience",
      experience: {}
    };
  },
  created: function() {
    console.log(this);
    axios.get('http://localhost:3000/api/experiences/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.experience = response.data;
    })
  },
  methods: {},
  computed: {}
};
</script>
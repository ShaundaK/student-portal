<template>
  <div>
    <p> Student ID: {{ education.student_id }} </p>
    <p> Start Date: {{ education.start_date }} </p>
    <p> End Date: {{ education.end_date }} </p>
    <p> Degree: {{ education.degree }} </p>
    <p> University Name: {{ education.university_name }} </p>
    <p> Details: {{ education.details }} </p>
    
   </div>
</template>

<script>
var axios = require('axios');
export default {
  data: function() {
    return {
      message: "Education",
      education: {}
    };
  },
  created: function() {
    console.log(this);
    axios.get('http://localhost:3000/api/educations/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.education = response.data;
    })
  },
  methods: {},
  computed: {}
};
</script>
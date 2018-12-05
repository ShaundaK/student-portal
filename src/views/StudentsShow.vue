<template>
  <div>
    <p> First Name: {{ student.first_name }} </p>
    <p> Last Name: {{ student.last_name }} </p>
    <p> Email: {{ student.email }} </p>
    <p> Phone Number: {{ student.phone_number }} </p>
    <p> Bio: {{ student.short_bio }} </p>
    <p> LinkedIn URL: {{ student.linkedin_url }} </p>
    <p> Blog: {{ student.personal_blog_url }} </p>
    <p> Resume URL: {{ student.online_resume_url }} </p>
    <p> Github URL: {{ student.github_url }} </p>
    <p> Photo: {{ student.photo_url }} </p>
   </div>
</template>

<script>
var axios = require('axios');
export default {
  data: function() {
    return {
      message: "Welcome to your Student Portal!",
      student: {}
    };
  },
  created: function() {
    console.log(this);
    axios.get('http://localhost:3000/api/students/' + this.$route.params.id).then(response => {
      console.log(response.data);
      this.student = response.data;
    })
  },
  methods: {},
  computed: {}
};
</script>
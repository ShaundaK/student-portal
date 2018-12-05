<template>
  <p> {{ student.first_name }} </p>
  <p> {{ student.last_name }} </p>
  <p> {{ student.email }} </p>
  <p> {{ student.phone_number }} </p>
  <p> {{ student.short_bio }} </p>
  <p> {{ student.linkedin_url }} </p>
  <p> {{ student.personal_blog_url }}</p>
  <p> {{ student.online_resume_url }}</p>
  <p> {{ student.github_url }}</p>
  <p> {{ student.photo_url }}</p>
</template>

<script>
var axios = require('axios');
export default {
  data: function() {
    return {
      message: "Welcome to the show componenentt",
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
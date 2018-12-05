<template>
  <div class="update">
    <div class="container">
      <h1>{{ message }}</h1>
      <div v-for="student in students">
        <p>First Name: <input type="text" v-model="student.first_name"></p>
        <p>Last Name: <input type="text" v-model="student.last_name"></p>
        <p>Email: <input type="text" v-model="student.email"></p>
        <p>phone_number: <input type="text" v-model="student.phone_number"></p>
        <p>short_bio: <input type="text" v-model="student.short_bio"></p>
        <p>linkedin_url: <input type="text" v-model="student.linkedin_url"></p>
        <p>personal_blog_url: <input type="text" v-model="student.personal_blog_url"></p>
        <p>online_resume_url: <input type="text" v-model="student.online_resume_url"></p>
        <p>github_url: <input type="text" v-model="student.github_url"></p>
        <p>photo_url: <input type="text" v-model="student.photo_url"></p>
      </div>
      <p><button v-on:click="submitStudentInfoChanges()">click to save changes</button></p>
    </div>
  </div>
</template>

<style>
</style>

<script>
  import axios from "axios";
  export default {
    data: function() {
      return {
        message: "Edit your personal information below.",
        students: [
          {
            first_name: "chris",
            last_name: "adamo",
            email: "adamomeister@gmail.com",
            phone_number: 5555555555,
            short_bio: "",
            linkedin_url: "",
            personal_blog_url: "",
            online_resume_url: "",
            github_url: "",
            photo_url: "",
          },
        ]
      };
    },
    created: function() {
      // axios.get('http://localhost:3000/api/students').then(function(response) {
      //     console.log(response.data);
      //     this.products = response.data;
      //   }.bind(this));
    },
    methods: {
      submitStudentInfoChanges: function() {
        console.log("saving changes...")
        var params = {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          phone_number: this.phone_number,
          short_bio: this.short_bio,
          linkedin_url: this.linkedin_url,
          personal_blog_url: this.personal_blog_url,
          online_resume_url: this.online_resume_url,
          github_url: this.github_url,
          photo_url: this.photo_url
        };
        // axios
        //   .post("http://localhost:3000/api/users", params)
        //   .then(response => {
        //     this.$router.push("/login");
        //   })
        //   .catch(error => {
        //     this.errors = error.response.data.errors;
        //   });
      }
    },
    computed: {}
  };
</script>
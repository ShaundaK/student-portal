<template>
  <div class="home">
    <h1>{{ message }}</h1>
  </div>
</template>

<style>
</style>

<script>
  import axios from "axios";
export default {
  data: function() {
    return {
      message: "Welcome to the update feature!",
      first_name: "chris",
      last_name: "adamo",
      email: "adamomeister@gmail.com"        
    };
  },
  created: function() {},
  methods: {},
  computed: {}
};
</script>
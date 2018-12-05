<template>
  <div class="home">
    <div class="jumbotron bg">
      <h1 class="display-4">Welcome, students!</h1>
      <p class="lead">Helping you keep track of your resume and capstone projects</p>
      <p>Showcase your work to prospective employers</p>
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button">Login</a>
      </p>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-sm">
          Keep track your web dev experiences
        </div>
        <div class="col-sm">
          Showcase your capstone
        </div>
        <div class="col-sm">
          Connect with other students
        </div>
      </div>
    </div>

  </div>
</template>

<style>
.bg {
  background: url('../assets/programmers-at-work.jpg') no-repeat center center;
  width: 100%;
  background-size: 35%;
  background-position: right;
}

.jumbotron {
  background-color: #e0e4ed;
}
</style>

<script>
export default {
  data: function() {
    return {};
  },
  created: function() {},
  methods: {},
  computed: {}
};
</script>

<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Resume App</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Capstone</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Resume</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Your Account</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#/login">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/#/logout">Logout</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>

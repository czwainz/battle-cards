<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
    </div> -->
    <router-view />
  </div>
</template>

<style>
  #app {
    font-family: 'Montserrat', sans-serif;
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

  a {
    color: #20c997;
    transition: .3s linear;
  }

  a:hover {
    color: #69f0ca;
    text-shadow: 1px 1px 15px #20c997;
    text-decoration: none;
    transform: scale(1.02);
  }


  /* #nav a.router-link-exact-active {
    color: #42b983;
  } */
</style>
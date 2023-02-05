<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/3103">3103</router-link>|
      <router-link to="/3104">3104</router-link>|
      <router-link to="/3403">3403</router-link>|
      <router-link to="/34ex">34ex</router-link>|
      <router-link to="/3701">3701</router-link>|
      <router-link to="/imageslider">imageslider</router-link>|
      <router-link to="/4301">4301</router-link>|
      <router-link to="/todo">todo</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

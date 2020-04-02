<template>
  <div id="app">
    <div id="nav">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  img{
    display: block;
    margin: 2rem auto;
  }
}
</style>

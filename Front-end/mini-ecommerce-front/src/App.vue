<template>
  <img alt="DesarrollaWeb logo" src="./assets/logo.png">
  <Login />
</template>

<script>
import Login from './components/Login'


export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style>
img{
  max-height: 200px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

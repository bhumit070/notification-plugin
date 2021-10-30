<template>
  <div id="app">
    <notifications />
    <img alt="Vue logo" src="./assets/logo.png" /> <br />
    <br />
    <button @click="on">on</button> <br />
    <br />
    <br />
    <button @click="off">off</button>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    on() {
      this.$notify.success("This is a success plugin");
      this.$notify.error("This is an error plugin");
      this.$notify.primary("This is a primary plugin");
    },
    off() {
      this.$notify.close();
    },
  },
};
</script>

<style>
#app {
  margin-top: 30px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

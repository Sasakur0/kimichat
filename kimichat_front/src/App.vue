<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
html, body {
  margin: 0;
  height: 100%;
  font-family: "Arial", sans-serif;
  background-color: #f4f4f4;
}
#app {
  height: 100%;
}
</style>

<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="thing">{{foo}}</div>
    <router-view/>
  </div>
</template>

<script lang="ts">
  import App from './AppController';
  export default App;
</script>
<style>
  @import './app.less';
</style>

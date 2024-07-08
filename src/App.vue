<template>
  <div id="app">
    <router-view class="app-main"></router-view>
  </div>
</template>

<style lang="less">
html,body{
  margin: 0;
  padding: 0;
}
#app{
  height: 100vh;
}
.app-main{
  height: 100%;
}
</style>

<script>
import router from './router';


export default {
    name: 'App',
    components: { router }
}
</script>

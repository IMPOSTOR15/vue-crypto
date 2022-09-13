<template>
  <div class="home">

    <h1>WELCOM TO LEADING CRYPTO PLATFORM</h1>
    <img alt="Vue logo" src="../assets/logo.png">
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
.home {
  background-color: #ededf2;
  background-image: url(../assets/homeBG.png);
  background-repeat: no-repeat;
  background-position: center center;
  /* background-attachment: fixed; */
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: auto;
  height: 1000px;
}
</style>

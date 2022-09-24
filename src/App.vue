<template>
  <navbar/>
  <router-view/>
  <footer-view/>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import FooterView from '@/components/FooterView.vue'

export default {
  components: {
    Navbar,
    FooterView
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}
</style>

<template>
  <navbar  v-if="$route.name!='account'"/>
  <router-view />
  <footer-view v-if="$route.name!='account'" />
</template>

<script>
import { onBeforeMount } from 'vue'
import { useStore } from 'vuex'

import Navbar from '@/components/Navbar.vue'
import FooterView from '@/components/FooterView.vue'

export default {
  setup() {
    const store = useStore()

    onBeforeMount(() => {
      store.dispatch('fetchUser')
    })

    return {
      user: store.state.user
    }
  },
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

<template>
  <div class="sidebar" @click="toggleSidebar" :style="{ width: sidebarWidth }">
    <h1>
      <span v-if="collapsed">
        <a class="logo" href="/"><img class="logoimg" src="@/assets/logo.png" alt="logo"></a>
      </span>
      <span v-else>
        <a class="large-logo" href="/"><img class="large-logo" src="@/assets/logo_copy.png" alt="logo"></a>
      </span>
    </h1>
    <ul>
      <li class="button" v-if="!collapsed"><a href="#"><SidebarLink to="/">Home</SidebarLink></a></li>
      <li class="button" v-if="!collapsed"><a href="#"><SidebarLink to="/Chart">Chart</SidebarLink></a></li>
      <li class="button" v-if="!collapsed"><a href="#"><SidebarLink to="/Build">Build</SidebarLink></a></li>
      <li class="button" v-if="!collapsed"><a href="#"><SidebarLink to="/Staking">Staking</SidebarLink></a></li>
      <li class="button" v-if="!collapsed"><a href="#"><SidebarLink to="/Learn">Learn</SidebarLink></a></li>
    </ul>
    <a href="#" class="logout">
      <router-link
        class="button"
        @click="$store.dispatch('logout')"
        v-if="$store.state.user && !collapsed"
        to="/">Logout
      </router-link>
    </a>
    
  </div>
</template>

<script>
import SidebarLink from './SidebarLink.vue'
import { collapsed, toggleSidebar, sidebarWidth } from './state.js'
export default {
  props: {},
  components: { SidebarLink },
  setup() {
    return { collapsed, toggleSidebar, sidebarWidth }
  }
}
</script>

<style scoped>

.sidebar {
  color: white;
  float: left;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 0;
  padding: 0.5em;
  transition: 0.2s ease;
  display: flex;
  flex-direction: column;
  background-color: #000000;
  cursor: pointer;
  border: 2px solid rgb(0, 166, 255);
  border-radius: 20px;
  box-shadow: 0 0 5px 2px rgb(0, 166, 255);
}
.sidebar h1 {
  height: 2.5em;
}
.rotate-180 {
  transform: rotate(180deg);
  transition: 0.2s linear;
}
.logoimg {
  width: 40px;
}
.large-logo {
  width: 100px;
}
li {
  list-style: none;
  display: flex;
  text-decoration: none;
  padding: 2px;
  
  
}
a {
  text-decoration: none;
  text-align: center;
  margin: auto
}
ul {
  padding: 0;
}
.logout {
  position: absolute;
  bottom: 0;
  margin-bottom: 40px;
  margin-left: 20px;
}
</style>
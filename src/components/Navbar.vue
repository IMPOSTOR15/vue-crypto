<template>
<div class="navbar">
  <div class="container-navigation">
    <nav role = "navigation" class="menu w-nav-menu">
      <div class="menu-legt">
        <a href="/">
          <img class="logo" src="../assets/logo.png" alt="logo">
        </a>
      </div>
      <div class="menu-center">
        <div class="navLink"><router-link to="/">Home</router-link></div>
        <div class="navLink"><router-link to="/about">About</router-link></div>
      </div>
      <div class="menu-right">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
    </nav>
  </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .navbar {
    position: relative;
    z-index: 3;
  }

  .container-navigation {
    position: relative;
    width: 100%;
    max-width: 1280px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 48px;
    padding-left: 48px;
  }

  .menu {
    display: flex;
    height: 90px;
    float: none;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -ms-flex-align: stretch;
    align-items: stretch;
    font-weight: 500;
  }

  .menu-center {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    align-items: center;
}

  .w-nav-menu {
    position: relative;
    /* float: right; */
  }

  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }
  .logo {
    height: 60px;
  }
  .navLink {
    
  }
</style>
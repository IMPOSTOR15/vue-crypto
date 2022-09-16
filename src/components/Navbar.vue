<template>
<header>
  <a class="logo" href="/"><img class="logoimg" src="../assets/logo.png" alt="logo"></a>
  <nav>
    <ul class="nav__links">
      <li :active="activeElem === elem"
          @activate="activeElem === elem"  
      >
        <a href="#"><router-link to ='/'>Home</router-link></a>
      </li>
      <li>
        <a href="#"><router-link to="/learn">Learn</router-link></a>
      </li>
      <li>
        <a href="#"><router-link to="/buildview">Build</router-link></a>
      </li>
      <li>
        <a href="#"><router-link to="/network">Network</router-link></a>
      </li>
      <li>
        <a href="#"><router-link to="/comunity">Comunity</router-link></a>
      </li>
      <li>
        <a href="#"><router-link to="/academy">Academy</router-link></a>
      </li>
    </ul>
  </nav>
  <a class="cta" href="#">Contact</a>
</header>
</template>

<script>

export default {
  data() {
    return {
      activeElem: null,

    }
  },
  methods: {

}
}
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10%;
  background-color: #131315;
  opacity: 70%;
  height: 70px;
}

.logo {
  cursor: pointer;
  width: 40px;
}

.logoimg {
  width: 50px;
}

.nav__links a,
.cta,
.overlay__content a {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  color: #ffffff;
  text-decoration: none;
}

.nav__links {
  list-style: none;
  display: flex;
}

.nav__links li {
  padding: 0px 20px;
}

.nav__links li a {
  transition: color 0.3s ease 0s;
}

.nav__links li a:hover {
  color: #008cff;
}

nav a.router-link-exact-active {
  border-bottom: 2.5px solid #008cff;
  padding-bottom: 3px;
}

.cta {
  padding: 9px 25px;
  background-color: rgb(0, 0, 0);
  border: 1px solid #008cff;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease 0s;
  color: #edf0f1
}

.cta:hover {
  background-image: linear-gradient(90deg,#228bbc,#002c81);
}

</style>
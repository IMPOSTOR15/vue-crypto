<template>
  <div class="home">
    <h1 class="main-header">WELCOME TO MOONLIGHT</h1>
    <p class="main-text">Fueled by a passionate community and deep developer talent pool, the Terra blockchain is fully community-owned and built to enable the next generation of Web3 products and services.</p>
    <div class="container">
      <a class="button" href="">
        <div class="text-30">Learn About Moonlight</div>
      </a>
    </div>
    <img class="moon-img" src="@/assets/bluemoon.png" alt="">
    <main-cards></main-cards>
    <join-part></join-part>
  </div>
</template>

<script>

import MainCards from '@/components/HomeComponents/MainCards.vue'
import JoinPart from '@/components/HomeComponents/joinPart.vue'

export default {
  components: {
    MainCards, JoinPart
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}
.home {
  display: block;
  align-content: center;
}
.main-header {
  padding-top: 30px;
  font-size: 50px;
  text-transform: uppercase;
  background: linear-gradient(45deg, #37a6dd 33%, #0057b4 66%, #002a68);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 50px;
}
.main-text {
  font-size: 16px;
  font-weight: bold;
  color: #a9e2ff;
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}

.moon-img {
  width: 80%;
  margin-bottom: 100px;
}

.container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.button {
  display: flex;
  width: 400px;
  justify-content: center;
  padding: 14px 36px;
  border-radius: 28px;
  margin-top: 30px;
  margin-bottom: 30px;
  background: #212121;
  font-size: 18px;
  line-height: 21px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  color: #a9e2ff;
  transition: background 0.5s ease-out;
}


.button:hover {
  background: #002c81;
  color: #fff
}
</style>

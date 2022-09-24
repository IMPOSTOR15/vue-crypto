<template>
  <div class="page">
    <h1 class="text50 header">WELCOME TO MOONLIGHT</h1>
    <p class="text30 text-blue">Fueled by a passionate community and deep developer talent pool, the Terra blockchain is fully community-owned and built to enable the next generation of Web3 products and services.</p>
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

.text-blue {
  font-weight: bold;
  color: #a9e2ff;
  width: 70%;
}

.moon-img {
  width: 80%;
  margin-bottom: 100px;
}

.container {
  display: flex;
  justify-content: center;
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

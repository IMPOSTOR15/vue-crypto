<template>
  <div class="Page">
    <h1 class="text50 header">Developers Handbook</h1>
    <p class="text30">It's easy to get lost in Web3. MoonLight makes things simple.</p>
    <img src="@/assets/moontool.jpg" alt="" >
    <div class="button-line" style="margin-top: 100px;">
      <div class="buttoncase">
        <a href="#" class="button">Start Here</a>
      </div>
      <div class="buttoncase">
        <a href="#" class="button">Read the Docs</a>
      </div>
    </div>
    <hr class="hr-shadow">
    <h1 class="text50">MoonLight Beginner's Guide</h1>
    <div class="text-place">
      <p class="text30">MoonLight is designed for builders. Check out the beginner's guide to learn how to set up your environment and start building in five minutes with MoonLight.</p>
    </div>
    <div class="button-line" style="margin-top: 100px;">
      <div class="buttoncase">
        <a href="#" class="button">Get Start</a>
      </div>
    </div>
    <hr class="hr-shadow">
    <h1 class="text50">DEVELOPER RESOURCES</h1>
    <div class="text-place">
      <p class="text30">Learn everything there is to know.</p>
    </div>
    <main-cards></main-cards>
    <hr class="hr-shadow">
    <h1 class="text50">Connect</h1>
    <div class="text-place">
      <p class="text30">Join chat groups with other TMoonLight developers and get your questions answered.</p>
    </div>
    <div class="button-line" style="margin-top: 100px;">
      <div class="buttoncase">
        <a href="#" class="button bigger">MoonLight Developers Room</a>
      </div>
      <div class="buttoncase">
        <a href="#" class="button bigger">Join the Discord</a>
      </div>
    </div>
  </div>
</template>

<script>
import MainCards from '@/components/HomeComponents/MainCards.vue'

export default {
  components: {
    MainCards
  }
}
</script>

<style scoped>
.page {
  width:60%; margin-left:20% !important;
  margin-right:20% !important;
}
.text30 {
  margin-bottom: 60px;
  margin-left: 100px;
  margin-right: 100px;
  margin-top: 16px;
}
.button-line {
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
}
.button {
  align-self: center;
  display: block;
  width: 200px
}
.bigger {
  width: 300px
}
.hr-shadow {
  width:60%; margin-left:20% !important;
  margin-right:20% !important;
	margin-top: 40px;
  margin-bottom: 70px;
	padding: 0;
	height: 1px;
	border: none;
	border-top: 1px solid #333;
	box-shadow: 0 10px 10px -10px #8c8b8b inset;
}
.text-place {
  width:60%; margin-left:20% !important; margin-right:20% !important;
}

.text30{
  margin-top: 40px;
}

</style>

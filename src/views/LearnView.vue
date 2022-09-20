<template>
  <div class="page">
    <h1 class="text50">About MoonLight</h1>
    <img class="wide-moon" src="@/assets/moonlogo.png" alt="">
    <p class="text30">MoonLight is an open-source, community-owned blockchain which hosts a vibrant ecosystem of applications. On MoonLight, you can build applications and organizations using the available suite of cutting-edge developer tools, or simply try out existing ones by connecting a wallet.</p>
    <p class="text30">The MoonLight ecosystem runs on its native cryptocurrency, MoonL. You can use MoonL to pay for transaction fees on the MoonLight blockchain as you interact with various applications. Additionally, you can also use MoonL to earn staking rewards, purchase your favorite digital art, have a say on community-led governance proposals, and much more.</p>
    <p class="text30">MoonLight is permissionless and borderless, which means that its next-generation financial products are accessible to anyone in the world with an Internet connection.</p>
    <p class="text30">To begin your journey on MoonLight, start by creating a Moon Station wallet.</p>
    <div class="button-line">
      <a href="#" class="button">Build on MoonLight</a>
      <a href="#" class="button">Create a Wallet</a>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.wide-moon {
  width: 30%;
}

.text30 {
  margin-bottom: 60px;
  margin-left: 400px;
  margin-right: 400px;
  margin-top: 16px;
}
.text50 {
  padding-top: 30px;
  font-size: 50px;
  text-transform: uppercase;
  background: linear-gradient(45deg, #37a6dd 33%, #0057b4 66%, #002a68);
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 50px;
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
</style>

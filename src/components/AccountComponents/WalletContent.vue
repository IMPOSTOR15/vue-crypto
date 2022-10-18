<template>
  <li v-if="coin.curencyContent.value > 0" class="wallet-wrapper">
    <div class="coins">
      <div class="cyrency">
        <img class="curencyLogo" :src=coin.curencyContent.logoLink alt="">
        <div class="coin-id">
          <h1 class="text50">
            {{ coin.curencyContent.name }}
          </h1>
        </div>
      </div>
      <div class="balance-wrap">
        <h2 class="balance text50">{{ coin.curencyContent.value }}</h2>
        <!-- <h2 class="balance text50">0.12312354512342344435</h2> -->
      </div>
      
    </div>
  </li>
</template>

<script>
export default {
  props: {
    coin: {
      type: Object,
      reqired: true
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.wallet-wrapper {
  border: 2px solid #2a4b9c;
  border-radius: 40px;
  box-shadow: 0 0 5px 2px #2a4b9c;
  margin: 30px;
  background: rgb(16,31,66);
  background: linear-gradient(90deg, rgba(16,31,66,1) 0%, rgba(38,56,102,1) 29%, rgba(38,56,102,1) 71%, rgba(12,22,46,1) 100%);
}
.coins {
  height: 50px;
  text-align: left;
  padding-left: 40px;
  display: flex;
  flex-direction: row;
  padding-top: 8px;
  padding-bottom: 10px;
  justify-content: space-between;
}
.coin-data {
  display: flex;
  flex-direction: row;
}
.coin-text {
  margin-right: 40px;
}
.cyrency {
  display: flex;
  flex-direction: row;
}
.curencyLogo {
  width: 50px;
  height: 50px;
  border-radius: 25px;
  margin-right: 30px;
}
.coin-id {
  padding-bottom:40px;
}
.balance-wrap {
  border: 2px #3259bd solid;
  border-radius: 15px;
  width: 300px;
  height: 50px;
  margin-right: 20px;
}
.balance {
  margin-top: 14px;
  margin-bottom: 14px;
  margin-right: 5px;
  text-align: right;
}
</style>
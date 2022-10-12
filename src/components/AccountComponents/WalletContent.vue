<template>
  <li class="wallet-wrapper">
    <div class="coins">
      <!-- <div class="coin-id">#{{ transaction.transactionContent.id }}</div> -->
      <!-- <div class="coin-id">type: {{ transaction.transactionContent.type }}</div> -->
      <div class="coin-content">
        <div class="coin-data">
          <!-- <div class="coin-text">Curency: {{ transaction.transactionContent.curency }}</div> -->
          <!-- <div class="coin-text">Transaction time: {{ transaction.transactionContent.date }}</div> -->
        </div>
        <div class="coin-value">
          <!-- <span>Amount: {{ transaction.transactionContent.value }}</span> -->
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    transaction: {
      type: Object,
      reqired: true
    }
  }
}
</script>

<style scoped>
.wallet-wrapper {
  border: 2px solid rgb(0, 166, 255);
  border-radius: 40px;
  box-shadow: 0 0 5px 2px rgb(0, 166, 255);
  margin: 30px;
}
.coins {
  text-align: left;
  padding-left: 40px;
}
.coin-data {
  display: flex;
  flex-direction: row;
}
.coin-text {
  margin-right: 40px;
}
</style>
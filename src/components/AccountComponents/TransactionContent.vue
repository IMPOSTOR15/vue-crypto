<template>
  <li class="transaction-wrapper">
    <div class="transaction">
      <!-- <div class="transcation-id">#{{ transaction.userId }}</div> -->
      <div class="transcation-id">#{{ transaction.transactionContent.id }}</div>
      <div class="transcation-id">type: {{ transaction.transactionContent.type }}</div>
      <div class="transaction-content">
        <div class="transaction-data">
          <div class="transaction-text">Curency: {{ transaction.transactionContent.curency }}</div>
          <div class="transaction-text">Transaction time: {{ transaction.transactionContent.date }}</div>
        </div>
        <div class="transaction-value">
          <span>Amount: {{ transaction.transactionContent.value }}</span>
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
.transaction-wrapper {
  border: 2px solid rgb(0, 166, 255);
  border-radius: 40px;
  box-shadow: 0 0 5px 2px rgb(0, 166, 255);
  margin: 30px;
}
.transaction {
  text-align: left;
  padding-left: 40px;
}
.transaction-data {
  display: flex;
  flex-direction: row;
}
.transaction-text {
  margin-right: 40px;
}
</style>
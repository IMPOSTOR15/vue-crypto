<template>
  <!-- <li class="transaction-wrapper">
    <div class="transaction">
      <div class="transcation-id">#{{ transaction.transactionContent.id }}</div>
      <div class="transcation-id">
        type: {{ transaction.transactionContent.type }}
        <img v-if="transaction.transactionContent.type === 'Output'" class="transaction-arrow" src="@\assets\arrows\arrow_bottom.svg" alt="">
        <img v-if="transaction.transactionContent.type === 'Input'" class="transaction-arrow" src="@\assets\arrows\arrow_top.svg" alt="">
      </div>
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
  </li> -->
  <li class="transaction-wrapper">
    <div class="transaction-container">
      <div class="transaction-half">
        <div class="transaction-info">
          <div class="arrow-sapce">
            <img v-if="transaction.transactionContent.type === 'Output'" class="transaction-arrow" src="@\assets\arrows\arrow_bottom.svg" alt="">
            <img v-if="transaction.transactionContent.type === 'Input'" class="transaction-arrow" src="@\assets\arrows\arrow_top.svg" alt="">
          </div>
          <div class="transaction-content">
            <div class="transaction-text">Curency: {{ transaction.transactionContent.curency }}</div>
            <div class="transaction-value">
              <p>Amount: {{ transaction.transactionContent.value }}</p>
            </div>
          </div>
        </div>
        <button class="button" @click="showMore = !showMore">Show more</button>
      </div>
      <div class="transaction-full" v-if="showMore">
        <p>Transaction time: {{ transaction.transactionContent.date }}</p>
        <p>Transaction id: {{ transaction.transactionContent.id }}</p>
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
  },
  data() {
    return {
      showMore: false,
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
  background: rgb(2,0,36);
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(15,15,89,1) 51%, rgba(0,0,0,1) 100%);
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
.transaction-arrow {
  width: 40px;
  rotate: 180deg;
}

.transaction-half {
  display: flex;
  flex-direction: row;
  padding: 20px 20px 0px 20px;
}

.button {
  margin-top: -5px;
  margin-bottom: 10px;
  /* align-self: flex-end; */
}
.transaction-half {
  justify-content: space-between;
}
.transaction-info {
  display: flex;
  flex-direction: column;
}
</style>
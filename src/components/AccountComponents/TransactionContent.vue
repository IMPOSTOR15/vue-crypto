<template>
  <li class="transaction-wrapper">
    <div class="transaction-container">
      <div class="transaction-half">
        <div class="transaction-info">
          <img v-if="transaction.transactionContent.type === 'Output'" class="transaction-arrow" src="@\assets\arrows\arrow_bottom.svg" alt="">
          <img v-if="transaction.transactionContent.type === 'Input'" class="transaction-arrow" src="@\assets\arrows\arrow_top.svg" alt="">
          <div class="transaction-content">
            <div class="transaction-text">
              <p>{{ transaction.transactionContent.curency }}</p>
            </div>
            <div class="transaction-value">
              <p>Amount: {{ transaction.transactionContent.value }}</p>
            </div>
          </div>
        </div>
        <button class="more-button" @click="showMore = !showMore">Show more</button>
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
p {
  margin: 0px;
  padding-top: 12px;
  text-align: left;
  font-size: 20px;
}
.transaction-wrapper {
  border: 2px solid #2a4b9c;
  border-radius: 40px;
  box-shadow: 0 0 5px 2px #2a4b9c;
  margin: 30px;
  background: rgb(16,31,66);
  background: linear-gradient(90deg, rgba(16,31,66,1) 0%, rgba(38,56,102,1) 29%, rgba(38,56,102,1) 71%, rgba(12,22,46,1) 100%);
}

.transaction {
  text-align: left;
  padding-left: 40px;
}
.transaction-data {
  display: flex;
  flex-direction: row;
}

.transaction-arrow {
  height: 50px;
  rotate: 180deg;
}
.transaction-text {
  margin-left: 40px;
  font-weight: bold;
}
.transaction-value {
  margin-left: 40px;
}
.transaction-half {
  display: flex;
  flex-direction: row;
}

.button {
  margin-bottom: 10px;
}
.transaction-half {
  justify-content: space-between;
}
.transaction-info {
  display: flex;
  flex-direction: row;
  padding-left: 20px;
  padding-top: 15px;
}
.transaction-content {
  display: flex;
  flex-direction: row;
}
.transaction-full {
  margin-left: 110px;
  margin-bottom: 10px;
}
.more-button {
    margin-right: 15px;
    margin-top: 18px;
    margin-bottom: 22px;
    padding: 8px 16px;
    border: 0px #2a4b9c solid;
    border-radius: 28px;
    background-color: rgba(0, 166, 255, 0);
    font-size: 18px;
    line-height: 21px;
    font-weight: 500;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    color: #a9e2ff;
    transition: background 0.5s ease-out;
    }

.more-button:hover {
    background-color: #2a4b9c;
    color: #fff
}
</style>
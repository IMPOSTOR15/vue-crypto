<template>
  <div class="wallet-space">
    <apexchart class="chart" width="460" type="donut" :options="options" :series="series"></apexchart>
    <div class="button-row">
      <button class="button">Show Wallet</button>
    <button class="button">Show TransactionsList</button>
    </div>
    <div class="transactions-list">
      <transaction-list></transaction-list>
    </div>
  </div>
</template>

<script>
import  TransactionList from '@/components/AccountComponents/TransactionsList.vue'
export default {
  components: {
    TransactionList,
  },
  data() {
    return {
      series: [44, 55, 41, 123],
      options: {
        labels: ['Bitcoin', 'Litecoin', 'Ethereum', 'MoonLight'],
        pie: {
          donut: {
            background: '#000000',
          }
        },
        fill: {
          colors: ['#f7931a', '#c4c8c8', '#8590f9', '#1e9eec']
        },
        colors:['#f7931a', '#c4c8c8', '#8590f9', '#1e9eec'],
        stroke:{
         colors:['#000'],
         width: '8'
        },

      },
      
      
    }
  }
}
</script>

<style scoped>
.wallet-space {
  position: relative;
  display: flex;
  justify-content: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
}
.chart {
  display: flex;
  position: relative;
  justify-content: center;
  color: black;
  position: relative;
  padding: 20px;
  padding-left: 50px;
  padding-right: 50px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  max-width: 1500px;
  margin-bottom: 30px;
}
.button-row {
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
}
.button {
  align-self: center;
  display: block;
  width: 300px
}
</style>
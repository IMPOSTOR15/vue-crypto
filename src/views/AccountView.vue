<template>
  <sidebar></sidebar>
  <div class="container">
    <h1 class="header">Welcome to you personal account</h1>
    <div class="wallet-space">
      <wallet-chart></wallet-chart>
      <div class="button-row">
        <button class="button" @click="showModal = true">Send Crypto</button>
        <button class="button" @click="walletShow">Show Wallet</button>
        <button class="button" @click="transactionShow">Show Transactions</button>
      </div>
      <div v-if="showTransactions" class="transactions-list">
        <transaction-list></transaction-list>
      </div>
      <div v-if="showWallet" class="wallet-list">
        <wallet-list></wallet-list>
      </div>
    </div>
    <send-window v-show="showModal" @close-modal="showModal = false"></send-window>
  </div>
  
  
</template>

<script>
import TransactionList from '@/components/AccountComponents/TransactionsList.vue'
import Sidebar from '@/components/AccountComponents/SidebarComponents/Sidebar.vue'
import WalletChart from '@/components/AccountComponents/WalletChart.vue'
import SendWindow from '@/components/AccountComponents/SendWindow.vue'
import WalletList from '@/components/AccountComponents/WalletList.vue'

export default {
  data() {
    return {
      showModal: false,
      showWallet: true,
      showTransactions: false,
    }
  },
  components: {
    Sidebar,
    WalletChart,
    TransactionList,
    SendWindow,
    WalletList
  },
  methods: {
    walletShow() {
      this.showWallet = true
      this.showTransactions = false
    },
    transactionShow() {
      this.showWallet = false
      this.showTransactions = true
    }
  }
}
</script>

<style scoped>
.container {
  margin-left: 40px;
  background: rgb(11,11,102);
  background: linear-gradient(90deg, rgba(11,11,102,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 70%, rgba(11,11,102,1) 100%);
  margin-top: -35px;
  min-height: 100vh;
}
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
</style>>

<template>
  <sidebar></sidebar>
  <div class="container">
    <h1 class="header">Welcome to you personal account</h1>
    <wallet-chart></wallet-chart>
  </div>
  
  
</template>

<script>

import Sidebar from '@/components/AccountComponents/SidebarComponents/Sidebar.vue'
import WalletChart from '@/components/AccountComponents/WalletChart.vue'

export default {
  data() {
    return {

    }
  },
  components: {
    Sidebar,
    WalletChart
  },
}
</script>

<style scoped>
.container {
  margin-left: 40px;
}
</style>>

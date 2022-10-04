<template>
  <div class="page">
    <h1 class="text50 header">Cryptocurrencies Chart</h1>
    <chart></chart>
  </div>
</template>


<script>
import Chart from '@/components/ChartFolder/Chart.vue'

export default {
  components: {
    Chart
  }
}
</script>

<style scoped>
  h1 {
    margin-bottom: 60px;
  }
</style>

<template>
    <apexchart class="chart" width="460" type="donut" :options="options" :series="series"></apexchart>
</template>

<script>

export default {
  
  data() {
    return {
      series: [44, 55, 41, 100],
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
         width: '7',
         opacity: '0'
        },

      },
    }
  },
  methods: {

  }
}
</script>

<style scoped>
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
</style>
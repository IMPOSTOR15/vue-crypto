<template>
  <apexchart class="chart" width="1400" height="500" type="line" :options="options" :series="series"></apexchart>
  <button class="button" @click="test">test</button>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      priceArr: [],
      dataArr: [],
      coin: 'btc',
      currency: 'usd',
      options: {
        chart: {
          id: 'vue-mooncrypto-chart'
        },
        xaxis: {
          // categories: ['1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999']
          categories: []
        }
      },
      series: [{
        name: 'usd',
        // data: [30, 40, 45, 50, 49, 60, 70, 91, 213]
        data: []
      }]
    }
  },

  beforeMount() {
    // console.log(this.series[0].data)
    // console.log(this.options.xaxis.categories)
    this.getMarketChart();

  },

  
  methods: {
    async getMarketChart() {
      this.res = []; //запускает ререндер графика
      await axios
        .get(
          `https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=10&interval=daily`
        )
        .then((response) => {
          response.data.prices.pop();
          response.data.prices.map((entry) => {
            entry[0] = new Date(entry[0]);
            entry[0] = `${entry[0].getDate()}.${
              entry[0].getMonth() > 10
                ? (Number(entry[0].getMonth()) + 1)
                : (Number("0" + entry[0].getMonth()) + 1)
            }.${entry[0].getFullYear().toString().substr(2)}`;
            this.series[0].data.push(entry[1])
            this.options.xaxis.categories.push(entry[0])
          });
          // console.log(this.series[0].data)
          // console.log(this.options.xaxis.categories)
        });
    },
    test() {
      // console.log(this.res)
      // console.log(this.priceArr);
      // console.log(this.dataArr);
      // this.options.xaxis.categories = this.dataArr
    },
  }
}
</script>

<style scoped>
.chart {
  display: flex;
  position: relative;
  justify-content: center;
  color: black
}
</style>
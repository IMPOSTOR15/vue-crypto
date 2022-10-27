<template>
  <loading-indicator v-if="loadingCheck"></loading-indicator>
  <h1 v-if="!loadingCheck && noCoins" >Recive coins to use wallet</h1>
  <apexchart 
    v-if="!loadingCheck && !noCoins"
    class="chart"
    width="460"
    type="donut"
    :options="chartOptions"
    :series="series">
  </apexchart>
  
  <div class="chart-bottom">
    <h2>Total portfoli price: {{totalPrice.toFixed(2)}} $</h2>
    <button class="reload-button" @click="LoadChart()">
      <img class="button-img" src="https://img.icons8.com/ios-glyphs/72/refresh--v1.png" alt="">
    </button>
  </div>
</template>

<script>
import LoadingIndicator from '@/components/LoadingIndicator.vue'
import axios from "axios";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db, auth,} from '@/firebase/'

export default {
  components: {
    LoadingIndicator,
  },
  data() {
    return {
      loadingCheck: true,
      noCoins: true,
      coins: [],
      newLabels: [],
      newSeries: [],
      newColors: [],
      coinPrice: 0,
      

      totalPrice: 0,

      series: [],
      chartOptions: {
        labels: [],
        background: '#ffffff',
        fill: {
          colors: ['#f7931a', '#c4c8c8', '#8590f9', '#1e9eec']
        },
        
        colors:['#f7931a', '#c4c8c8', '#8590f9', '#1e9eec'],
        stroke:{
         colors:['#0a0f26'],
         width: '7',
        },
        legend: {
          show: false,
        },
      },
    }
  },
  methods: {
    async getCoins() {
      const q = await query(collection(db, 'coins'), where('userId', '==', auth.currentUser.uid));
      const querySnap = await getDocs(q);
      this.coins = []
      querySnap.forEach((doc) => {
        this.coins.push(doc.data())
      })
    },
    async updateChart() {
      this.newSeries = []
      this.newColors = []
      this.newLabels = []
      this.coins.forEach(async (coin) => {
        if (coin.curencyContent.value > 0) {
          let coinName = coin.curencyContent.name
          await this.getPrice(coinName.toLowerCase())
          this.newSeries.push((coin.curencyContent.value * this.coinPrice))
          this.newColors.push(coin.curencyContent.color)
          this.newLabels.push(coin.curencyContent.name)
          this.totalPrice += coin.curencyContent.value * this.coinPrice
        }
      })
      this.series = this.newSeries
      this.chartOptions = {...this.chartOptions, ...{
          colors: this.newColors,
          fill: {
            colors: this.newColors
          },
          labels: this.newLabels
      }}
    },
    async getPrice(coinName) {
      let curCoinPrice = 0
      await axios
        .get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${coinName}&vs_currencies=usd`
        )
        .then((response) => {
          curCoinPrice = response.data[coinName]['usd']
        });
        this.coinPrice = curCoinPrice
    },
    delay(delayInms) {
      return new Promise(resolve => setTimeout(resolve, delayInms));
    },
    checkCoins() {
      for(let i = 0; i < this.coins.length; i++) {
        if (this.coins[i].curencyContent.value > 0) {
          this.noCoins = false
          return null
        } else {
          this.noCoins = true
        }
      }

    },
    async LoadChart() {
      this.loadingCheck = true
      await this.delay(100)
      await this.getCoins()
      await this.updateChart()
      this.checkCoins()
      this.loadingCheck = false
      
    }
  },
  async created() {
    
      await this.LoadChart()
    
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
  padding-left: 50px;
  padding-right: 50px;
  /* border: 2px solid rgba(255, 255, 255, 0.5); */
  border-radius: 20px;
  max-width: 1500px;
  /* margin-bottom: 30px; */
}
.chart-bottom {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  
}
.reload-button {
  width: 50px;
  margin-left: 30px;
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  background: #476dcb;
}

.button-img {
  width: 30px;
}

</style>
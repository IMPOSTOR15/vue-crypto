<template>
  <div class="chart-space">
    <LoadingIndicator class="loading" v-if="loading"></LoadingIndicator>
    <apexchart v-else class="chart" :width="width" :height="height" type="area" :options="options" :series="series"></apexchart>
  </div>

  <div class="form-section">
    <!-- <div class="section">
      <label>Enter days number</label>
      <input type="number" v-model="days">
    </div> -->
    <div class="section">
      <label>Chart currency</label>
      <select name="input" v-model="curencyChart">
        <option value="bitcoin">Bitcoin</option>
        <option value="ethereum">Ethereum</option>
        <option value="litecoin">Litecoin</option>
      </select>
    </div>
    <div class="section">
      <button class="button" @click="ShowChart">Show</button>
    </div>
  </div>
  <div class="about" v-if="curencyChartShow === 'bitcoin'">
    <h2>A brief history</h2>
    <p>Bitcoin was created in 2009 by Satoshi Nakamoto, a pseudonymous developer. Bitcoin is designed to be completely decentralized and not controlled by any single authority. With a total supply of 21 million, its scarcity and decentralized nature make it almost impossible to inflate or manipulate. For this reason, many consider bitcoin to be the ultimate store of value or ‘Digital Gold’. Bitcoin is fully open-source and operates on a proof-of-work blockchain, a shared public ledger and history of transactions organized into "blocks" that are "chained" together to prevent tampering. This technology creates a permanent record of each transaction. Users on the Bitcoin network verify transactions through a process known as mining, which is designed to confirm new transactions are consistent with older transactions that have been confirmed in the past, ensuring users can not spend a Bitcoin they don’t have or attempt to double-spend coins.</p>
    <h2>BTC in practice</h2>
    <p>New coins are created as part of the Bitcoin mining process. Bitcoins are rewarded to miners who operate computer systems that help to secure the network and validate incoming transactions. These Bitcoin miners run full nodes and use specialized hardware otherwise known as Application Specific Integrated Circuit Chips (ASICs) to find and generate new blocks. Once a series of computationally demanding problems have been solved a completed "block" is added to the ever-growing "chain", this mining process can fluctuate and become easier or harder depending on network demand and value, this is known as the network difficulty. Besides block rewards, miners also collect transaction fees which further incentivizes them to secure the network and verify transactions. This independent network of miners also decreases the chance for fraud or false information to be recorded, as the majority of miners need to confirm the authenticity of each block of data before it's added to the blockchain, in a process known as "proof of work."</p>
  </div>
  <div class="about" v-if="curencyChartShow === 'ethereum'">
    <h2>A brief history</h2>
    <p>The original Ethereum concept was introduced in 2013 by Vitalik Buterin with the release of the Ethereum whitepaper and in 2015 the Ethereum platform was launched by Buterin and Joseph Lubin along with several other co-founders. Ethereum is described as “the world’s programmable blockchain,” positioning itself as an electronic, programmable network that anyone can build on to launch cryptocurrencies and decentralized applications. Unlike Bitcoin which has a maximum circulation of 21 million coins, the amount of ETH that can be created is unlimited, although the time that it takes to process a block of ETH limits how much ether can be minted each year. Another difference between Ethereum and Bitcoin is how the networks treat transaction processing fees. These fees are known as “gas” on the Ethereum network and are paid by the participants in Ethereum transactions. The fees associated with Bitcoin transactions, however, are absorbed by the broader Bitcoin network. Additionally, although both Bitcoin and Ethereum currently use Proof-of-Work consensus mechanisms, Ethereum is in the process of gradually transitioning to a different consensus algorithm known as Proof-of-Stake, which uses significantly less energy.</p>
    <h2>ETH in practice</h2>
    <p>Because ETH acts more as a utility token than a token of value, its supply is technically infinite although this inflation curve slows dramatically over time. In theory, Ether will always be in demand, meaning inflation should never devalue the asset beyond use, thus Ether consistently enters circulation in the form of miner rewards. Miners get paid a transaction fee called “gas.” Gas is paid by the user initiating the transaction to the miner who validates the transaction- incentivizing future mining and network security. Because there is so much use of the Ethereum network, gas fees can run quite high. This is because a block can only hold so much gas which varies based on transaction types and amounts. As a result, miners will choose transactions with the highest gas fees, meaning users are competing to validate transactions first. When Ethereum transitions to a Proof-of-Stake model, instead of miners verifying transactions, the network will use the owners of significant stakes to validate transactions.</p>
  </div>
  <div class="about" v-if="curencyChartShow === 'litecoin'">
    <h2>A brief history</h2>
    <p>Litecoin was launched in 2011 by Charlie Lee, a former Google employee. It aims to be a "lite" version of Bitcoin in that it features many of the same properties as Bitcoin–albeit lighter weight. It's commonly often referred to as "digital silver" to Bitcoin's "digital gold" and is often used as a pseudo testnet for Bitcoin, adopting new protocol changes before they are deployed on Bitcoin. Like Bitcoin, Litecoin uses a form of proof-of-work mining to enable anyone who dedicates their computing resources to add new blocks to its blockchain and earn the new Litecoin it creates. Where Litecoin differs is in its mining algorithm called Scrypt PoW. Scrypt allows the platform to finalize transactions faster. On Litecoin, new blocks are added to the blockchain roughly every 2.5 minutes (as opposed to 10 minutes on Bitcoin).</p>
    <h2>LTC in practice</h2>
    <p>Litecoin (LTC) is a cryptocurrency that was designed to provide fast, secure and low-cost payments by leveraging the unique properties of blockchain technology. As of January 2021, Litecoin is one of the most widely accepted cryptocurrencies, and more than 2,000 merchants and stores now accept LTC across the globe. Like Bitcoin, the creation of Litecoin tokens involves a process called mining. For participating in the act of mining, miners are rewarded with Litecoin. Litecoin is programmed to produce only a finite supply (84 million) of its cryptocurrency and to periodically reduce the amount of new LTC it introduces into its economy through a process called halving. Halving refers to an instance of halving the amount of Litecoin rewards that miners are given for each block.</p>
  </div>
</template>

<script>
import axios from "axios";

import LoadingIndicator from '@/components/LoadingIndicator.vue'

export default {
  data() {
    return {
      price_arr: [],
      data_arr: [],
      days: 500,
      curencyChart: 'bitcoin',
      curencyChartShow: 'bitcoin',
      width: 1500,
      height: 500,
      loading: false,
      options: {
        chart: {
          id: 'vue-mooncrypto-chart',
          type: 'area',
          height: 350,
        },
        xaxis: {
          name: "data",
          categories: [''],
          type: 'datetime',
        },
        title: {
          text: `Chart Page`,
          align: 'left',
          style: {
            fontSize: '30px',
            color: '#fff',
          }
        },
        grid: {
          show: true,
          opacity: 1
        },
        yaxis: {
          opposite: true
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 2,
          // curve: 'smooth',
        },
      },
      series: [{
        name: 'usd',
        data: []
      }],
    }
  },

  beforeMount() {
    this.ShowChart()
  },

  
  methods: {
    async getChartData(coin, days) {
      this.loading = true
      await axios
        .get(
          `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=${String(days)}&interval=daily`
        )
        .then((response) => {
          response.data.prices.map((cell) => {
            this.price_arr.push(cell[1].toFixed(2))
            this.data_arr.push(cell[0])
          });

          this.options.xaxis.categories.push(...this.data_arr)
          this.series[0].data.push(...this.price_arr)
          this.loading = false
        });
    },
    ShowChart() {
      this.curencyChartShow = this.curencyChart;
      this.options.xaxis.categories = [];
      this.series[0].data = [];
      this.price_arr = [];
      this.data_arr = [];
      this.getChartData(this.curencyChart,this.days);
    },
  },
  components: {
    LoadingIndicator
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
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 20px;
  max-width: 1500px;
  margin-bottom: 30px;
}
.chart-space {
  display: flex;
  position: relative;
  justify-content: center;
  margin-top: 30px;
}

.form-section {
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: center;
}

input, select {
  margin: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 28px;
  background: #2f2f2f;
  font-size: 18px;
  line-height: 21px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  align-self: center;
  display: block;
  width: 300px;
  border: 2px solid #565656;
  appearance: none;
  outline: none;
}
h2, p {
  max-width: 70%;
  margin: auto;
  margin-top: 30px;
}

.loading {
  margin-top: 254px;
  margin-bottom: 255px;
}
</style>
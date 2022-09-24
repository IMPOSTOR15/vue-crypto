<template>
  <div class="page">
    <h1 class="text50 header">Staking calculator</h1>
    <p class="text30">On this page you can easy calculate your staking profit on MoonLight network</p>
    <div class="calculator">
      <div class="calculator-space">
        <div class="select">
          <div class="row">
            <div class="section">
              <input type="number" name="input" v-model="CountOfCoin" placeholder=" ">
              <label>Staking Amount</label>
            </div>
            <div class="section">
              <select name="input" v-model="currencyStaked">
                <option value="MoonLight">MoonLight</option>
                <option value="BTC">Bitcoin</option>
                <option value="ETH">Ethereum</option>
              </select>
              <label>Staking currency</label>
            </div>
            <div class="section">
              <select name="input" v-model="currencyRevard">
                <option value="MoonLight">MoonLight</option>
                <option value="BTC">Bitcoin</option>
                <option value="ETH">Ethereum</option>
              </select>
              <label>Revard currency</label>
            </div>
            <div class="section">
              <select name="input" v-model="stakingPeriod">
                <option value="Dayly">Dayly</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
              <label>Revard frequency</label>
            </div>
            <div class="section">
              <input type="number" name="input" placeholder=" " v-model="stakingPercent">
              <label>Revard rate (%)</label>
            </div>
            <div class="section">
              <input type="number" name="input" placeholder=" " v-model="yearsCount">
              <label>Years to calculate</label>
            </div>
          </div>
          <button class="button"
          @click="calculate"
          >Calculate</button>
        </div>
        <div class="result" v-if="calculateCheck">
          <div class="table">
            <div class="currency">Curency staked: {{currencyStaked}}</div>
            <div class="ammount">Amount of coins after staked: {{result}}</div>
            <div class="profit">Your profit: {{result - CountOfCoin}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="faq">
      <h1 class="text50">How the staking calculator works</h1>
      <p class="text30">By specifying how active a role you’re playing in that staking process, our staking calculator can then use the going reward rates for different kinds of staking and tell you what kind of profits you should expect to make.</p>
      <h1 class="text50">Why should I use it?</h1>
      <p class="text30">Cryptocurrency tokens typically come in finite numbers, making validating the blockchain transactions that create new tokens a vital and often lucrative part of the process. If you’re looking for a way to profit from the explosion in cryptocurrency prices, validating those blockchain transactions can be a great alternative to or addition to investing in crypto. </p>
      <p class="text30">Knowing how much you stand to make from that staking process can help you decide if it’s worth your time to participate, and that’s where our staking calculator comes in.</p>
      <h1 class="text50">What is staking? </h1>
      <p class="text30">Staking refers to the verification of transactions on a cryptocurrency’s blockchain. When staking a cryptocurrency, you usually have to have a minimum amount of that coin in order to be trusted to participate in the process. Similar to mining, users who engage in staking earn financial rewards (interest) for their work.</p>
      <p class="text30">Cryptocurrencies are digital currencies enabled by verified transactions on a decentralised blockchain, rather than by a centralised authority like a bank. Since the advent of Bitcoin in 2009, that cryptocurrency and several others have become massively profitable (albeit also volatile) investments.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      calculateCheck: false,
      CountOfCoin: 100,
      currencyStaked: 'MoonLight',
      currencyRevard: 'MoonLight',
      stakingPeriod: 'Yearly',
      stakingPercent: '5',
      yearsCount: '10',
      result: 0,
    }
  },
  methods: {
    calculate() {
      this.result = this.CountOfCoin
      if (this.currencyStaked === 'MoonLight') {
        if (this.currencyRevard === 'MoonLight') {
          if (this.stakingPeriod === 'Yearly') {
          this.calculateCheck = true
          this.result = this.result +  (this.CountOfCoin * (this.stakingPercent / 100))
          }
        }
      }
    }
  }
}
</script>

<style scoped>
.calculator {
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

.calculator-space {
  height: 1000px;
  width: 70%;
  background: rgb(19, 44, 89);
  border-radius: 40px;
}

.faq {
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}
</style>

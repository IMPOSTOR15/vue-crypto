<template>
  <div class="page">
    <h1 class="text50 header">Staking calculator</h1>
    <p class="text30">On this page you can easy calculate your staking profit on MoonLight network</p>
    <div class="calculator">
      <div class="calculator-space">
        <div class="content">
          <h1>Input data</h1>
        <div class="select">
          <div class="row">
            <div class="section">
              <label>Staking Amount</label>
              <input type="number" name="input" v-model="CountOfCoin" placeholder=" ">
            </div>
            <div class="section">
              <label>Staking currency</label>
              <select name="input" v-model="currencyStaked">
                <option value="MoonLight">MoonLight</option>
                <option value="BTC">Bitcoin</option>
                <option value="ETH">Ethereum</option>
              </select>
            </div>
            <div class="section">
              <label>Revard frequency</label>
              <select name="input" v-model="stakingPeriod">
                <option value="Dayly">Dayly</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Yearly">Yearly</option>
              </select>
            </div>
          </div>
          <div class="row">
            <div class="section">
              <label>Revard rate (%)</label>
              <input type="number" name="input" placeholder=" " v-model="stakingPercent">
            </div>
            <div class="section">
              <label v-if="stakingPeriod === 'Yearly'">Years to calculate</label>
              <label v-if="stakingPeriod === 'Weekly'">Weeks to calculate</label>
              <label v-if="stakingPeriod === 'Monthly'">Month to calculate</label>
              <label v-if="stakingPeriod === 'Dayly'">Days to calculate</label>
              <input type="number" name="input" placeholder=" " v-model="TimeSetCount">
            </div>
            <div class="section">
              <div class="switchSpace">
                <label>Reinvest</label>
                <div @click="switcher" class="switchbtn" :class="{switchon: switchOnCheck}"></div>
              </div>
            </div>
          </div>
            <button class="callc-btn"
              @click="calculate"
              >Calculate
            </button>
        </div>
        <div class="result">
          <div class="row">
            <div class="section">
              <label>Amount of {{currencyToCalculate}} after staked:</label>
              <input type="number" name="input" v-model="result" placeholder=" " readonly>
            </div>
            <div class="section" v-if="reinvest">
              <label>Your Average {{stakingPeriod}} profit:</label>
              <input type="number" name="input" v-model="periodProfit" placeholder=" " readonly>
            </div>
            <div class="section" v-else>
              <label>Your {{stakingPeriod}} profit:</label>
              <input type="number" name="input" v-model="periodProfit" placeholder=" " readonly>
            </div>
            <div class="section">
              <label>Your all time profit:</label>
              <input class="result-input" type="number" name="input" v-model="profit" placeholder=" " readonly>
            </div>
          </div>
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
      stakingPeriod: 'Yearly',
      stakingPercent: '5',
      TimeSetCount: '10',
      coinToCalculate: 0,
      currencyToCalculate: '',
      stakingPeriodToCalculate: '',
      stakingPercentToCalculate: 0,
      TimeSetCountToCalculate: '',
      periodProfit: 0,
      result: 0,
      profit: 0,
      switchOnCheck: false,
      reinvest: false,
      
    }
  },
  methods: {
    switcher() {
      this.switchOnCheck = !this.switchOnCheck
      this.reinvest = !this.reinvest
    },
    calculate() {
      this.coinToCalculate = this.CountOfCoin
      this.currencyToCalculate = this.currencyStaked
      this.stakingPeriodToCalculate = this.stakingPeriod
      this.stakingPercentToCalculate = this.stakingPercent
      this.TimeSetCountToCalculate = this.TimeSetCount
      this.result = this.coinToCalculate
      
      if (this.reinvest) {
        for (let i = 0; i < this.TimeSetCount; i++) {
        this.result = this.result + this.result * (this.stakingPercent / 100)
        }
        this.periodProfit = (this.result - this.coinToCalculate) / this.TimeSetCountToCalculate
      } else {
        this.result = this.result + this.result * (this.stakingPercent / 100) * this.TimeSetCount
        this.periodProfit = this.coinToCalculate * this.stakingPercent / 100
      }
      
      this.profit = this.result - this.coinToCalculate
      this.calculateCheck = true
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
  position: relative;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 30px;
}

.content {
  margin: 20px;
}

.row {
  display: flex;
  position: relative;
  margin-top: 50px;
}
.section {
  position: relative;
  display: flex;
  flex-direction: column;
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
select {
  padding-right: 40px;
  padding-left: 40px;
  outline: none;
  align-items: center;
}
select::-ms-expand {
  display: none;
}
.select:after {
  justify-self: end;
}
.switchSpace {
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  display: flex;
  flex-direction: column;
}

.faq {
  display: flex;
  flex-direction: column;
  width: 60%;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
}

.callc-btn {
  margin: 30px;
  padding: 16px 36px;
  border-radius: 28px;
  background: #212121;
  font-size: 18px;
  line-height: 21px;
  font-weight: 500;
  padding: 9px 25px;
  background-color: rgb(0, 0, 0);
  border: 2px solid #008cff;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.3s ease 0s;
  color: #edf0f1
}

.callc-btn:hover {
  background: #008cff;
}

.switchbtn {
  width: 72px;
  height: 38px;
  border-radius: 19px;
  background: #2f2f2f;
  z-index: 0;
  cursor: pointer;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  transition-duration: 300ms;
  border: 2px solid #008cff;
}
.result-input {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;    
}
.switchbtn::after {
  content: "";
  height: 32px;
  width: 32px;
  border-radius: 17px;
  background: #fff;
  top: 3px;
  left: 3px;
  transition-duration: 300ms;
  position: absolute;
  z-index: 1;
}
.switchon {
  background: #008cff;
}
.switchon::after {
  left: 37px;
}
</style>

<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <h6 class="text50">Send crypto to MoonLight user</h6>
      <form @submit.prevent="createTransaction">
        <div class="column">
          <div class="section">
            <label>Address to send</label>
            <input type="string" name="input" v-model="userAdress" placeholder="" min="0">
          </div>
          <div class="section">
            <label>Cyrency to send</label>
            <select name="input" v-model="currencyToSend">
              <option 
                v-if="checkCoins('MoonLight')"
                value="MoonLight"
              >MoonLight</option>
              <option 
                v-if="checkCoins('Bitcoin')"
                value="Bitcoin"
              >Bitcoin</option>
              <option
                v-if="checkCoins('Ethereum')"
                value="Ethereum"
              >Ethereum</option>
              <option
                v-if="checkCoins('Litecoin')"
                value="Litecoin"
              >Litecoin</option>
            </select>
          </div>
          <div class="section">
            <label>Amount of coins to send</label>
            <input type="number" name="input" v-model="CountOfCoinToSend" placeholder=" " min="0">
          </div>
          <button type="submit" class="button">Send</button>
        </div>
      </form>
      <button class="button" @click="$emit('close-modal')">Close</button>
    </div>
  </div>
</template>

<script>
import { collection, addDoc, getDocs, query, where } from "firebase/firestore"
import { db, auth,} from '@/firebase/'

export default {
  data() {
    return {

      userAdress: '',
      currencyToSend: '',
      CountOfCoinToSend: 0,
      CoinCheck: false,

      dateString: '',
      nowDate: 0,
      day: '',
      month: '',
      year: '',
      hour: '',
      minutes: '',

      coins: [],

      
    }
  },

  methods: {
    GetDateString() {
      this.nowDate = new Date();
      this.day = this.nowDate.getDate()
      if ((this.nowDate.getMonth()+1) >= 10){
        this.month = this.nowDate.getMonth() + 1
      } else {
        this.month = '0' + (this.nowDate.getMonth() + 1)
      }
      this.year = this.nowDate.getFullYear()
      this.hour = this.nowDate.getHours()
      if (this.nowDate.getMinutes() >= 10){
        this.minutes = this.nowDate.getMinutes()
      } else {
        this.minutes = '0' + this.nowDate.getMinutes()
      }
      this.dateString = this.day + '.' + this.month + '.' + this.year + ' ' + this.hour + ':' + this.minutes
    },
    createTransaction() {
      this.GetDateString()
      const transactionDate = this.dateString
      const transactionId = Math.round(1000000000 + Math.random() * (9999999999 - 1000000000))
      this.SendTransaction(transactionDate, transactionId)
      this.reciveTransaction(transactionDate, transactionId)
      this.userAdress = ''
      this.currencyToSend = ''
      this.CountOfCoinToSend = 0
      $emit('close-modal')

    },
    async SendTransaction(transactionDate, transactionId) {
      // 'users' collection reference
      const transactionsRef = collection(db, 'transactions')
      //data to push
      const dataObjSender = {
        userId: auth.currentUser.uid,
        transactionContent: {
          curency: this.currencyToSend,
          date: transactionDate,
          id: transactionId,
          type: 'Output',
          value: this.CountOfCoinToSend,
        }
      }
      await addDoc(transactionsRef, dataObjSender)
    },
    async reciveTransaction(transactionDate, transactionId) {
      const transactionsRef = collection(db, 'transactions')
      //data to push
      const dataObjRecipient = {
        userId: this.userAdress,
        transactionContent: {
          curency: this.currencyToSend,
          date: transactionDate,
          id: transactionId,
          type: 'Input',
          value: this.CountOfCoinToSend,
        }
      }
      await addDoc(transactionsRef, dataObjRecipient)
    },
    async getCoins() {
      this.loadingCheck = true
      console.log(auth.currentUser.uid)
      const q = await query(collection(db, 'coins'), where('userId', '==', auth.currentUser.uid));
      const querySnap = await getDocs(q);
      this.coins = []
      querySnap.forEach((doc) => {
        this.coins.push(doc.data())
      })
      this.loadingCheck = false
    },
    checkCoins(coinName) {
      for (let i = 0; i < this.coins.length; i++) {
        if (this.coins[i].curencyContent.name === coinName && this.coins[i].curencyContent.value > 0) {
          return true
        }
      }
      return false
    }
  },
  created() {
    this.getCoins()
    
  }
}
</script>

<style scoped>
.modal {
  display: flex;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  flex-direction: column;
  text-align: center;
  background-color: rgb(15, 31, 83);
  height: 400px;
  width: 700px;
  margin-top: 10%;
  padding: 100px 40px;
  border-radius: 20px;
}

.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}

.section {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

input, select {
  margin: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
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
  width: 500px;
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
</style>
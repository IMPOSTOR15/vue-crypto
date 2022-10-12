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
              <option value="MoonLight">MoonLight</option>
              <option value="BTC">Bitcoin</option>
              <option value="ETH">Ethereum</option>
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
import { collection, addDoc, getDoc, getDocs, query, where } from "firebase/firestore"
import { db, auth,} from '@/firebase/'

export default {
  data() {
    return {

      userAdress: '',
      currencyToSend: '',
      CountOfCoinToSend: 0,
      CoinCheck: false,

      dateStrung: '',
      nowDate: 0,
      day: '',
      month: '',
      year: '',
      hour: '',
      minutes: '',

      
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
      this.SendCoin(transactionDate, transactionId)
      this.reciveCoin(transactionDate, transactionId)
    },
    async SendCoin(transactionDate, transactionId) {
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
      console.log(dataObjSender);
      const docRef = await addDoc(transactionsRef, dataObjSender)
      console.log('Document was created with ID:', docRef.id)
    },
    async reciveCoin(transactionDate, transactionId) {
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
      console.log(dataObjRecipient);
      const docRef = await addDoc(transactionsRef, dataObjRecipient)
      console.log('Document was created with ID:', docRef.id)
    }
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

.close {
  margin: 10% 0 0 16px;
  cursor: pointer;
}

.close-img {
  width: 25px;
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
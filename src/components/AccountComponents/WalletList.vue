<template>
  <div class="wallet-elements">
    <button class="button" @click="getCoins">Refresh</button>
    <p>Your adress: {{walletAdress}}</p>
    <loading-indicator class="loadingIndicator" v-if="loadingCheck"></loading-indicator>
    <ul v-else class="wallet-wrapper">
      <wallet-content v-for="coin in coins" :key="coin.id" :coin="coin" />
    </ul>
  </div>
</template>

<script>
import { collection, getDocs, query, where, updateDoc, doc } from "firebase/firestore"
import { db, auth,} from '@/firebase/'
import WalletContent from '@/components/AccountComponents/WalletContent.vue'
import LoadingIndicator from '@/components/LoadingIndicator.vue'

export default {
  components: {
    WalletContent,
    LoadingIndicator
    },
  data() {
    return{
      currentUserID: '',
      coins: [],

      walletAdress: auth.currentUser.uid,

      loadingCheck: true,
    }
  },
  created() {
    this.getCoins()
  },
  methods: {
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
  }
}
</script>

<style>
.wallet-wrapper {
  list-style-type: none;
  padding: 0;
}
.wallet-elements {
  display: flex;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  flex-direction: column;
}
.loadingIndicator {
  margin-top: 10%;
  padding-bottom: 100px;
}
</style>
<template>
  <div class="wallet-elements">
    <button class="button" @click="getCoins">Refresh</button>
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

      loadingCheck: true,
    }
  },
  created() {
    this.getCoins()
  },
  methods: {
    async FirstOpenCheck() {

    },
    async getCoins() {
      this.loadingCheck = true
      console.log(auth.currentUser.uid)
      const q = await query(collection(db, 'coins'), where('userId', '==', auth.currentUser.uid));
      const querySnap = await getDocs(q);
      
      this.coins = []
      querySnap.forEach((doc) => {
        this.coins.push(doc.data())
        console.log(this.coins)
      })

      console.log(this.coins);

      this.loadingCheck = false

    },
  }
}
</script>

<style>

</style>
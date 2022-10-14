<template>
  <div class="wallet-elements">
    <div class="button-row">
      <button class="button" @click="showModalSend = true">Send Crypto</button>
      <button class="button" @click="showModalRecive = true">Recive Crypto</button>
      <button class="button" @click="getCoins">Refresh</button>
    </div>
    <loading-indicator class="loadingIndicator" v-if="loadingCheck"></loading-indicator>
    <ul v-else class="wallet-wrapper">
      <wallet-content v-for="coin in coins" :key="coin.id" :coin="coin" />
    </ul>
    <send-window v-show="showModalSend" @close-modal="showModalSend = false"></send-window>
    <recive-window v-show="showModalRecive" @close-modal="showModalRecive = false"></recive-window>
  </div>
</template>

<script>
import { collection, getDocs, query, where, updateDoc, doc } from "firebase/firestore"
import { db, auth,} from '@/firebase/'
import WalletContent from '@/components/AccountComponents/WalletContent.vue'
import LoadingIndicator from '@/components/LoadingIndicator.vue'
import SendWindow from '@/components/AccountComponents/SendWindow.vue'
import ReciveWindow from '@/components/AccountComponents/ReciveWindow.vue'

export default {
  components: {
    WalletContent,
    LoadingIndicator,
    SendWindow,
    ReciveWindow
    },
  data() {
    return{
      showModalSend: false,
      showModalRecive: false,

      currentUserID: '',
      coins: [],

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

<style scoped>
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
.button-row {
  display: flex;
  flex-direction: row;
  position: relative;
  justify-content: center;
}
.button {
  align-self: center;
  display: block;
  width: 200px
}
</style>
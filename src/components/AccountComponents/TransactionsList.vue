<template>
  <div class="transactions-elements">
    <button class="reload-button" @click="getTransactions">
      
      <img class="button-img" src="https://img.icons8.com/ios-glyphs/72/refresh--v1.png" alt="">
    </button>
    <loading-indicator class="loadingIndicator" v-if="loadingCheck"></loading-indicator>
    <ul v-else class="transactions-wrapper">
      <transaction-content v-for="transaction in transactions" :key="transaction.id" :transaction="transaction" />
    </ul>
  </div>
</template>

<script>
import { collection, getDocs, query, where } from "firebase/firestore"
import { db, auth,} from '@/firebase/'
import TransactionContent from '@/components/AccountComponents/TransactionContent.vue'
import LoadingIndicator from '@/components/LoadingIndicator.vue'
export default {
  components: {
    TransactionContent,
    LoadingIndicator
    },
  data() {
    return{
      currentUserID: '',
      transactions:  [],

      loadingCheck: true,
    }
  },
  created() {
    this.getTransactions()
  },
  methods: {
    async getTransactions() {
      this.loadingCheck = true
      // query to get all docs in 'transactions' collection
      const q = await query(collection(db, 'transactions'), where('userId', '==', auth.currentUser.uid));
      const querySnap = await getDocs(q);
      
      this.transactions = []
      querySnap.forEach((doc) => {
        this.transactions.push(doc.data())
      })

      this.loadingCheck = false

    }
  }
}
</script>

<style scoped>
.transactions-wrapper {
  margin-top: -20px;
  list-style-type: none;
  padding: 0;
}
.transactions-elements {
  display: flex;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  justify-content: center;
  flex-direction: column;
}
.loadingIndicator {
  margin-top: 10%;
  padding-bottom: 200px;
}
.wallet-button {
  margin: 0 auto 0 auto;
}
.reload-button {
  margin: 0 auto 0 auto;
  width: 100px;
  height: 50px;
  border-radius: 20px;
  margin-bottom: 10px;
  background: #476dcb;
}
.button-img {
  width: 30px;
  margin-top: 5px;
  margin: 0 auto 0 auto;
}
</style>
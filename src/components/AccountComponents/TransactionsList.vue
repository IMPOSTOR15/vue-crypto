<template>
  <div class="transactions-elements">
    <button class="button" @click="getTransactions">Refresh</button>
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
        console.log(this.transactions)
      })

      this.loadingCheck = false

    }
  }
}
</script>

<style scoped>
.transactions-wrapper {
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
</style>
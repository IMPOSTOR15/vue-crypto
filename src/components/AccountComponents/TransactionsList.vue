<template>
  <button class="button" @click="getTransactions">See</button>
  <ul class="transactions-wrapper">
    <transaction-content v-for="transaction in transactions" :key="transaction.id" :transaction="transaction" />
  </ul>
</template>

<script>
import { collection, addDoc, getDoc, getDocs, query, where } from "firebase/firestore"
import { db, auth,} from '@/firebase/'
import TransactionContent from '@/components/AccountComponents/TransactionContent.vue'
export default {
  components: {
    TransactionContent 
    },
  data() {
    return{
      currentUserID: '',
      transactions:  []
    }
  },
  created() {
    // this.addTransaction()
    // currentUserID = auth.currentUser.uid
  },
  methods: {
    async addTransaction() {
      // 'users' collection reference
      const transactionsRef = collection(db, 'transactions')
      //data to push
      const dataObj = {
        userId: auth.currentUser.uid,
        transactionContent: {
          id: '1',
          type: 'Input',
          curency: 'Bitcoin',
          date: '12.07.2022 9:16',
          value: '0.0002',
        }
      }

      // create document and return reference to it
      const docRef = await addDoc(transactionsRef, dataObj)

      // access auto-generated ID with '.id'
      console.log('Document was created with ID:', docRef.id)
    },
    async getTransactions() {

      // query to get all docs in 'transactions' collection
      console.log(auth.currentUser.uid);
      const q = await query(collection(db, 'transactions'), where('userId', '==', auth.currentUser.uid));
      const querySnap = await getDocs(q);
      

      // add each doc to 'transactions' array
      this.transactions = []
      querySnap.forEach((doc) => {
        this.transactions.push(doc.data())
        console.log(this.transactions)
      })

    }
  }
}
</script>

<style scoped>
.transactions-wrapper {
  list-style-type: none;
  padding: 0;
}
</style>
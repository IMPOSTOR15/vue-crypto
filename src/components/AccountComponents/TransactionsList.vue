<template>
  <!-- <select v-model="sortBy">
    <option value="date">Sort by date</option>
    <option value="value">Sort by value</option>
  </select> -->
  <ul class="transactions-wrapper">
    <transaction-content v-for="transaction in transactions" :key="transaction.id" :transaction="transaction" />
  </ul>
</template>

<script>
import { ref, computed } from 'vue'
import TransactionContent from '@/components/AccountComponents/TransactionContent.vue'
export default {
  components: {
    TransactionContent 
    },
  data() {
    return{
      transactions:  [
          {
            id: '1',
            curency: 'Bitcoin',
            date: '12.07.2022 9:16',
            value: '0.0002',
          },
          {
            id: '2',
            curency: 'Litecoin',
            date: '13.07.2022 12:34',
            value: '1.2',
          },
          {
            id: '3',
            curency: 'Bitcoin',
            date: '14.07.2022 13:31',
            value: '0.23',
          },
          {
            id: '4',
            curency: 'Ethereum',
            date: '15.07.2022 14:25',
            value: '0.23452',
          },
          {
            id: '5',
            curency: 'MoonLight',
            date: '16.07.2022 19:34',
            value: '1234.45',
          }
      ]
    }
  }

  // setup({ items }) {
  //   const sortBy = 'data'
  //   const sorteredTransactions = computed(() => {
  //     return transactions.sort((a, b) => {
  //       if (a[sortBy.value] > b[sortBy.value]) return -1
  //       if (a[sortBy.value] < b[sortBy.value]) return 1
  //     })
  //   })
  //   return { sortBy, sorteredItems }
  // }
}
</script>

<style scoped>
.transactions-wrapper {
  list-style-type: none;
  padding: 0;
}
</style>
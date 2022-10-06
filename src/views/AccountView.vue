<template>
  <sidebar></sidebar>
  <div class="container">
    <h1>Welcome to you personal account</h1>
  </div>
  
  
</template>

<script>

import sidebar from '@/components/AccountComponents/SidebarComponents/Sidebar.vue'

export default {
  data() {
    return {

    }
  },
  components: {
    sidebar
  },
}
</script>

<style scoped>
.container {
  margin-left: 40px;
}
</style>>

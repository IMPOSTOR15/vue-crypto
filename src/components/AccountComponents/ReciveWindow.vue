<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <div class="modal" @click.stop>
      <h6 class="text50">Recive crypto from MoonLight user</h6>
      <div class="qr-wrap">
        <qrcode-vue :value="qrValue" :size="qrSize" level="H" />
      </div>
      <h6 class="text50">{{qrValue}}</h6>
      <button class="button" @click="$emit('close-modal')">Close</button>
    </div>
  </div>
</template>

<script>
import { auth } from '@/firebase/'
import QrcodeVue from 'qrcode.vue'

export default {
  components: {
    QrcodeVue,
  },
  data() {
    return {
      qrValue: auth.currentUser.uid,
      qrSize: 300,
    }
  },

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
h6 {
  margin-top: 40px;
  margin-bottom: 30px;
}
</style>
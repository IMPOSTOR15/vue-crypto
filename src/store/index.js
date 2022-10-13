import { createStore } from 'vuex'
import router from '@/router'
import { auth, db } from '@/firebase'
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut 
  } from 'firebase/auth'
  import { collection, addDoc, getDoc, getDocs, query, where } from "firebase/firestore"

export default createStore({
  state: {
    user: null,

  },
  getters: {

  },
  mutations: {

    SET_USER (state, user) {
      state.user = user
    },

    CLEAR_USER (state) {
      state.user = null
    }

  },
  actions: {
    async login ({ commit }, details) {
      const { email, password } = details

      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error) {
        switch(error.code) {
          case 'auth/user-not-found':
            alert("User not Found")
            break
          case 'auth/wrong-password':
            alert("Wrong password")
            break
          default:
            alert("Something went wrong")
        }
        return
      }
      commit('SET_USER', auth.currentUser)
      router.push('/')
    },

    async register ({ commit }, details) {
      const { email, password } = details

      try {
        await createUserWithEmailAndPassword(auth, email, password)
      } catch (error) {
        switch(error.code) {
          case 'auth/email-already-in-use':
            alert("Email already in use")
            break
          case 'auth/invalid-email':
            alert("Invalid email adress")
            break
          case 'auth/operation-not-allowed':
            alert("Operation not allowed")
            break
          case 'auth/weak-password':
            alert("Weak password")
            break
          default:
            alert("Something went wrong")
        }

        return
      }

      commit('SET_USER', auth.currentUser)
      //Add walletDataset
      const coinsRef = collection(db, 'coins')
      //data to push
      const userCoinsВitcoin = {
        userId: auth.currentUser.uid,
        curencyContent: {
          logoLink: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=023',
          name: 'Bitcoin',
          value: 0
        }
      }
      const userCoinsEthereum = {
        userId: auth.currentUser.uid,
        curencyContent: {
          logoLink: 'https://cdn.worldvectorlogo.com/logos/ethereum-eth.svg',
          name: 'Ethereum',
          value: 0
        }
      }
      const userCoinsLitecoin = {
        userId: auth.currentUser.uid,
        curencyContent: {
          logoLink: 'https://logojinni.com/image/logos/litecoin-690.svg',
          name: 'Litecoin',
          value: 0
        }
      }
      const userCoinsMoonLight = {
        userId: auth.currentUser.uid,
        curencyContent: {
          logoLink: 'https://avatars.mds.yandex.net/i?id=9263e29ec040d3d133b84c8e314366b7-5420588-images-thumbs&n=13',
          name: 'MoonLight',
          value: 0
        }
      }
      await addDoc(coinsRef, userCoinsВitcoin)
      await addDoc(coinsRef, userCoinsEthereum)
      await addDoc(coinsRef, userCoinsLitecoin)
      await addDoc(coinsRef, userCoinsMoonLight)
      router.push('/')
    },

    async logout ({ commit }) {
      await signOut(auth)

      commit('CLEAR_USER')

      router.push('/login')

    },

    fetchUser ({ commit }) {
      auth.onAuthStateChanged(async user => {
        if (user === null) {
          commit('CLEAR_USER')
        } else {
          commit('SET_USER', user)

          if (router.isReady() && router.currentRoute.value.path === '/login') {
            router.push('/')
          }
        }
      })
    }
  },
  modules: {
    //Импортировать заготовку при необхрдимости
  }
})

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
      const userCoins = {
        userId: auth.currentUser.uid,
        coins: {
          bitcoin: {
            amount: "0",
            name: "Bitcoin",
          },
          ethereum: {
            amount: "0",
            name: "Ethereum",
          },
          litecoin: {
            amount: "0",
            name: "Litecoin",
          }
        }
      }
      const docRef = await addDoc(coinsRef, userCoins)
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

import { AuthApi } from "@/api/AuthAPI";

export const AuthModule = {
  namespaced: true,

  state() {
    return {
      credentials: {
        token: localStorage.getItem('token') || null,
        userRole: localStorage.getItem('userRole') || null
      }
    }
  },

  getters: {
    getUserRole: (state) => state.credentials.userRole,
  },

  mutations: {
    setToken(state, token) {
      state.credentials.token = token;
      localStorage.setItem('token', token)
    },
    setUserRole(state, userRole) {
      state.credentials.userRole = userRole
      localStorage.setItem('userRole', userRole)
    },
    deleteToken(state) {
      state.credentials.token = null;
      localStorage.removeItem('token')
    },
    deleteUserRole(state) {
      state.credentials.userRole = null;
      localStorage.removeItem('userRole')
    }
  },

  actions: {
    onLogin({ commit }, { login, password }) {
      AuthApi.login({login, password}).then((res) => {
        commit('setToken', res.token);
        commit('setUserRole', res.userRole);
      })
    },
    onLogout({ commit }) {
      commit('deleteToken');
      commit('deleteUserRole');
    }
  }
}
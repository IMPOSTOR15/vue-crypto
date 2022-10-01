<template>
  <div class="login">
    <form class="login" @submit.prevent = "login">
      <h1 class="text50">Login</h1>
      <input
        type="email"
        placeholder="Email adress"
        v-model="login_form.email" />
      <input type="password"
        placeholder="Password"
        v-model="login_form.password" />
      <input
        type="submit"
        value="Login" />
    </form>
    <router-link class="button" to="/registration">Go To Registration</router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const login_form = ref({});
    const store = useStore();

    const login = () => {
      store.dispatch('login', login_form.value);
    };

    return {
      login_form,
      login,
    }
  }
}
</script>

<style scoped>
  .forms {
    display: flex;
    min-height: 100vh;
  }

  form {
    flex: 1 1 0%;
    padding: 12rem 12rem 12rem;
  }

  input {
    appearance: none;
    border: none;
    outline: none;
    background: none;

    display: block;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    padding: 0.5rem 0rem;
  }

  input:not([type="submit"]) {
    opacity: 0.8;
    transform: 0.4s;
  }
  input:focus:not([type="submit"]) {
    opacity: 1;
  }
  input::placeholder {
    color: inherit;
  }
  form.login input:not([type="submit"]) {
    color: #fff;
    border-bottom: 2px solid #fff;
  }

  form.login input[type="submit"] {
    background-color: #37a6dd;
    background-image: linear-gradient(to bottom right, #37a6dd 33%, #0057b4 66%, #002a68);
    color: #fff;
    font-weight: 700;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    text-transform: UpperCase;
  }
</style>
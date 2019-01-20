<template>
  <div class="login">
    <div class="card">
      <h1 class="card-title">textbookify</h1>
      <form class="login-form" v-on:submit.prevent="login">
        <input class="login-input" type="text" v-model="email">
        <input class="login-input" type="password" v-model="password">
        <button class="login-button">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    login: function () {
      if (this.email.length != 0 && this.password.length != 0) {
        this.$router.push('/');
      } else {
        // TODO: display something
      }
    },
  },
};
</script>

<style scoped>
.login {
  height: 100vh;
  background-color: #1565c0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.card {
  height: 40vh;
  padding: 2em;
  background-color: white;
  border-radius: 1em;
  box-shadow: 0.3em 0.3em 0.9em 0.2em rgba(0, 0, 0, 0.2);

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

.card-title {
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-input {
  border: 1px solid #1565c0;
  border-radius: 7px;
  margin: 8px 0;
  font-size: 18px;
}
.login-button {
  border: 1px solid #1565c0;
  border-radius: 7px;
  margin: 8px 0;
  font-size: 18px;

  background-color: white;
}
</style>

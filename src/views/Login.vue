<template>
  <div class="login">
    <div class="card">
      <h1 class="card-title">textbookify</h1>
      <form class="login-form" v-on:submit.prevent="login">
        <div class="input-container">
          <input class="login-input" type="text" placeholder="student@uwaterloo.ca" v-model="email">
        </div>
        <div class="input-container">
          <input class="login-input" type="password" placeholder="goose123" v-model="password">
        </div>
        <button class="login-button"><i class="fas fa-book"></i></button>
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
        this.$store.commit('login', {
          value: true,
        });
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
.input-container {
  display: flex;
  align-items: center;
}
.right-margin {
  margin-right: 5px;
}
.login-input {
  border: 1px solid #1565c0;
  border-radius: 7px;
  margin: 8px 0;
  text-align: center;
  font-size: 16px;
}
.login-button {
  border: 1px solid #1565c0;
  border-radius: 7px;
  margin: 8px 0;
  padding: 5px 8px;
  font-size: 14px;

  background-color: white;
}
</style>

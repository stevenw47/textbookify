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
        <button class="login-button">LOGIN</button>
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
        localStorage.loggedIn = "true";
        this.$router.push('/');
      } else {
        // TODO: display something
      }
    },
  },
  created: function () {
    if (this.$store.state.loggedIn || localStorage.loggedIn == "true") {
      this.$store.commit('login', {
          value: true,
        });
      localStorage.loggedIn = "true";
      this.$router.push('/');
    }
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
  font-family: Montserrat;
}

.card {
  height: 35vh;
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
  color: #1565c0;
  padding-top: 20px;
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
  padding: 5px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  width: 15vw;
  min-width: 200px;
}
.login-button {
  border: 1px solid #1565c0;
  border-radius: 7px;
  margin: 8px 0;
  padding: 8px 10px;
  font-size: 16px;
  background-color: #1565c0;
  color: white;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
}

.login-button:hover {
  color: #1565c0;
  background-color: #e9edff;
  cursor: pointer;
}

::placeholder {
  color: rgba(128, 128, 128, 0.582);
}
</style>

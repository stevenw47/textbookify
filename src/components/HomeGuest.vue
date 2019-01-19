<template>
  <div class="home-guest">
    <div class="card">
      <h2>...</h2>
      <form>
        <input v-model="email">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      email: '',
    };
  },
};
</script>

<style scoped>
.home-guest {
  height: 100vh;
  background-color: pink;

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
</style>
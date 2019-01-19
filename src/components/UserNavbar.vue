<template>
  <div class="user-navbar">
    <img src='../assets/logo.png'/>
    <div class="navbar-right">
      <div class="button">Buy</div>
      <div class="button">Sell</div>
      <div>Hi, User</div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.user-navbar {
  display: flex;
  justify-content: space-between;
  height: 80px;
  padding: 20px;
  align-items: center;
}

.user-navbar > img {
  height: 60px;
}

.navbar-right {
  display: flex;
}

.button {
  border: 1px solid black;
  margin: 0 20px;
  padding: 5px;
}
</style>
<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <HomeUser/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeUser from '@/components/HomeUser.vue';

export default {
  name: 'home',
  components: {
    HomeUser,
  },
};
</script>

<template>
  <div class="home">
    <HomeUser/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeUser from '@/components/HomeUser.vue';

export default {
  name: 'home',
  components: { HomeUser },
  created: function () {
    if (!this.$store.state.loggedIn) {
      this.$router.push('/login');
    }
  },
};
</script>

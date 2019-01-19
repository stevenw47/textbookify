<template>
  <div class="home">
    <HomeUser/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeGuest from '@/components/HomeGuest.vue';
import HomeUser from '@/components/HomeUser.vue';

export default {
  name: 'home',
  components: {
    HomeUser,
    HomeGuest,
  },
};
</script>

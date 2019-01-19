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
};
</script>

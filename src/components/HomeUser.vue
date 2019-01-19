<template>
  <div class="home-user">
    <UserNavbar class="item"/>
    <UserAnalytics class="item block"/>
    <UserItems class="item block"/>
  </div>
</template>

<script>
import UserNavbar from '@/components/UserNavbar.vue';
import UserAnalytics from '@/components/UserAnalytics.vue';
import UserItems from '@/components/UserItems.vue';

export default {
  components: {
    UserNavbar,
    UserAnalytics,
    UserItems,
  },
};
</script>

<style scoped>
.home-user {
  height: 105vh;
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: -5vh 0;
}

.item {
  margin: 5vh 0;
}

.block {
  width: 80vw;
  border-radius: 0.2em;
}
</style>
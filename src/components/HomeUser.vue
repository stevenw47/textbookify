<template>
  <div class="home-user">
    <UserNavbar class="item"/>
    <MarketAnalytics class="item block"/>
    <UserItems class="item block"/>
  </div>
</template>

<script>
import UserNavbar from '@/components/UserNavbar.vue';
import MarketAnalytics from '@/components/MarketAnalytics.vue';
import UserItems from '@/components/UserItems.vue';

export default {
  components: {
    UserNavbar,
    MarketAnalytics,
    UserItems,
  },
};
</script>

<style scoped>
.home-user {
  /*height: 105vh;*/
  background-color: white;

  display: flex;
  flex-direction: column;
  align-items: center;

  /*margin: -5vh 0;*/
}

.item {
  /*margin: 5vh 0;*/
}

.block {
  width: 60vw;
  border: 1.5px solid #1565c0;
  border-radius: 2em;
  margin-top: 8vh;
}
</style>
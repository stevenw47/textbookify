<template>
  <div class="home-user">
    <UserNavbar class="item"/>
    <h2>Market Analytics</h2>
    <MarketAnalytics class="item block"/>
    <h2>Your Items</h2>
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
  margin-bottom: 30px;

  /*margin: -5vh 0;*/
}

h2 {
  width: 60vw;
  text-align: left;
  font-family: Montserrat;
  margin: 30px 10px 10px;
  padding-left: 10px;
}

.item {
  /*margin: 5vh 0;*/
}

.block {
  width: 60vw;
  border: 1.5px solid #1565c0;
  border-radius: 2em;
}
</style>
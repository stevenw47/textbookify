<template>
  <div class="user-items">
    <div class="box">
      <h4 class="title">Selling</h4>
      <ItemsItem/>
    </div>
    <div class="box">
      <h4 class="title">Buying</h4>
    </div>
  </div>
</template>

<script>
import ItemsItem from '@/components/ItemsItem.vue';
export default {
  components: {
    ItemsItem,
  },
};
</script>

<style scoped>
.user-items {
  display: flex;
  flex-direction: column;

  border: 1.5px solid #1565c0;
}

.box {
  margin: 10px 30px;
}
</style>

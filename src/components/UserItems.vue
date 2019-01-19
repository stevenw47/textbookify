<template>
  <div class="user-items">
    <div class="box">
      <h4 class="title">SELLING</h4>
      <ItemsItem/>
      <ItemsItem/>
    </div>
    <div class="box">
      <h4 class="title">BUYING</h4>
      <ItemsItem/>
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
}

.box {
  margin: 10px 30px;
}

.title {
  color: #1565c0;
}
</style>

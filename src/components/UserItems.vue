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
import axios from 'axios';
import ItemsItem from '@/components/ItemsItem.vue';

export default {
  components: {
    ItemsItem,
  },
  mounted: function () {
    axios.get('http://localhost:3000/books', {
      // params: {
      //   user: 1,
      // },
    })
    .then(response => (
      console.log(response)
    ))
    .catch(err => (console.log(err)));
    // axios
    //   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //   .then(response => (console.log(response)));
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

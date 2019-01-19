<template>
  <div class="user-items">
    <div class="box" v-if="booksSell.length != 0">
      <h4 class="title">SELLING</h4>
      <ItemsItem
        v-for="bookSell in booksSell"
        :key="bookSell._id"
        v-bind:book="bookSell"
      />
    </div>
    <div class="box" v-if="booksBuy.length != 0">
      <h4 class="title">BUYING</h4>
      <ItemsItem
        v-for="bookBuy in booksBuy"
        :key="bookBuy._id"
        v-bind:book="bookBuy"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
import ItemsItem from '@/components/ItemsItem.vue';

export default {
  components: {
    ItemsItem,
  },
  computed: mapState([
    'booksSell',
    'booksBuy',
  ]),
  mounted: function () {
    axios.get('http://localhost:3000/books', {
    })
    .then(response => {
      console.log(response);
      let data = response.data;
      console.log(data);
      for (let i = 0; i < data.length; ++i) {
        if (data[i].buy) {
          this.$store.commit('pushBooksBuy', {
            bookBuy: data[i],
          });
        } else {
          this.$store.commit('pushBooksSell', {
            bookSell: data[i],
          });
        }
      }
    })
    .catch(err => {console.log(err)});
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

<template>
  <div class="user-items">
    <div class="box" v-if="booksSell.length != 0">
      <h3 class="title">SELLING</h3>
      <ItemsItem
        class="itemsitem"
        v-for="bookSell in booksSell"
        :key="bookSell._id"
        v-bind:book="bookSell"
        type="sell"
      />
    </div>
    <div class="box" v-if="booksBuy.length != 0">
      <h3 class="title">BUYING</h3>
      <ItemsItem
        class="itemsitem"
        v-for="bookBuy in booksBuy"
        :key="bookBuy._id"
        v-bind:book="bookBuy"
        type="buy"
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
    if (this.$store.state.loggedIn) {
      axios.get('http://localhost:3000/books', {
      })
      .then(response => {
        let data = response.data;
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
    }
  },
};
</script>

<style scoped>
.user-items {
  display: flex;
  flex-direction: column;
  justify-content: right;
  padding-bottom: 15px;
}

.box {
  margin: 15px 30px;
}

.title {
  color: #1565c0;
}

h3 {
  padding-top: 20px;
}

.itemsitem {
  margin: 6px 0px;
}
</style>
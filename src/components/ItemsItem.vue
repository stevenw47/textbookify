<template>
  <div class="items-item">
    <div class="item-header">
      <table class="item-table">
        <tr>
          <td class="item-name">{{ book.title }}, {{ book.course_code }}</td>
          <td class="item-price">${{ book.price }}</td>
          <td class="item-options">...</td>
        </tr>
      </table>
    </div>
    <div class="item-contents">
      <div class="item-content" v-for="match in matches" :key=match._id>
        <table class="content-table">
          <tr>
            <td class="content-edition">{{ match.edition }} ed</td>
            <td class="content-user">{{ match.user.user_name }}</td>
            <td class="content-contact">{{ match.user.contact }}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';

export default {
  props: ['book'],
  data: function () {
    return {
      matches: [],
    };
  },
  mounted: function () {
    axios.get('http://localhost:3000/match', {
      params: {
        course_code: this.book.course_code,
        title: this.book.title,
        edition: this.book.edition,
        buy: this.book.buy,
      },
    })
    .then(response => {
      this.matches = response.data;
    })
    .catch(err => {console.log(err)});
  },
};
</script>

<style scoped>
.items-item {
  margin: 5px;
  display: flex;
  flex-direction: column;
}
.item-header {
  width: 100%;
}
.item-table {
  width: 100%;
}
.item-name {
  width: 80%;
}
.item-price {
  width: 10%;
}
.item-options {
  width: 10%;
}

.item-contents {
  width: 100%;
}
.item-content {
  display: flex;
  justify-content: space-around;
}
.content-table {
  width: 95%;
}
.content-edition {
  width: 10%;
}
.content-user {
  width: 40%;
}
.content-contact {
  width: 50%;
}
</style>
<template>
  <div class="items-item">
    <div class="item-header">
      <table class="item-table">
        <tr>
          <td class="item-name">{{ book.title }}<span class="grey">, {{ book.course_code }}</span></td>
          <td class="item-price"><span v-show="type!='buy'">${{ book.price }}</span></td>
          <td class="item-options">
            <button
              class="options-btn"
              v-on:click="cancelBook"
            >
              <i class="fas fa-ban"></i>
            </button>
          </td>
        </tr>
      </table>
    </div>
    <div class="item-contents">
      <template v-if="matches.length!=0">
        <div class="item-content" v-for="(match, index) in matches" :key=match._id>
          <table class="content-table">
            <template v-if="index==0">
              <tr class="content-table-header">
                <td>Edition</td>
                <td>User</td>
                <td>Email</td>
                <td><span v-show="type=='buy'">Price</span></td>
                <td></td>
              </tr>
            </template>
            <tr
              v-on:mouseover="rowHoverIndex = index"
              v-on:mouseleave="rowHoverIndex = -1"
            >
              <td class="content-edition">{{ match.edition }}</td>
              <td class="content-user">{{ match.user.user_name }}</td>
              <td class="content-contact">{{ match.user.contact }}</td>
              <td class="content-price"><span v-show="type=='buy'">${{ match.price }}</span></td>
              <td class="content-button">
                <i
                  class="far fa-check-circle"
                  v-if="isRowHovered(index)"
                  v-on:click="completeMatch"
                ></i>
              </td>
            </tr>
          </table>
        </div>
      </template>
      <template v-else>
        <div class="item-content">
          <span class="no-matches">You have no matches <i class="far fa-frown"></i>.</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';

export default {
  props: ['type', 'book'],
  data: function () {
    return {
      matches: [],
      rowHoverIndex: -1,
    };
  },
  methods: {
    cancelBook: function () {
      // TODO:
      console.log(this.book);
      axios.delete('http://localhost:3000/remove', {
        params: {
          id: 1,
        },
      })
    },
    completeMatch: function () { 
      // TODO:
    },
    isRowHovered: function (index) {
      return index == this.rowHoverIndex;
    },
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
      console.log(this.matches);
    })
    .catch(err => {console.log(err)});
  },
};
</script>

<style scoped>
.grey {
  color: grey;
}

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
  font-weight: bold;
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
  text-align: left;
}
.content-table-header {
  color: grey;
  font-size: 12px;
}
.content-edition {
  width: 10%;
}
.content-user {
  width: 35%;
}
.content-contact {
  width: 35%;
}
.content-price {
  width: 10%;
}
.content-button {
  width: 10%;
}
.content-button:hover {
  color: lightgreen;
}

.options-btn {
  background-color: white;
  color: grey;
  border: 0;
  cursor: pointer;
  font-size: 18px;
}
.options-btn:hover {
  color: red;
}

.no-matches {
  font-size: 12px;
  color: grey;
}
</style>
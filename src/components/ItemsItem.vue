<template>
  <div class="items-item">
    <div class="item-header">
      <hr>
      <table class="item-table">
        <tr>
          <td class="item-name">{{ book.title }}<span class="grey">, {{ book.course_code }}</span></td>
          <td class="item-price"><span v-if="type!='buy'">${{ parseInt(book.price).toFixed(2) }}</span></td>
          <td class="item-options">
            <div class="options-btn">
              <i class="fas fa-ban" v-on:click="cancelBook(book._id)"></i>
            </div>
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
              class="match-row"
              v-on:mouseover="rowHoverIndex = index"
              v-on:mouseleave="rowHoverIndex = -1"
            >
              <td class="content-edition" v-on:click="openMatchModal(match)">{{ match.edition }}</td>
              <td class="content-user" v-on:click="openMatchModal(match)">{{ match.user.user_name }}</td>
              <td class="content-contact" v-on:click="openMatchModal(match)">{{ match.user.contact }}</td>
              <td class="content-price" v-on:click="openMatchModal(match)"><span v-if="type=='buy'">${{ parseInt(match.price).toFixed(2) }}</span></td>
              <td class="content-button">
                <i
                  class="far fa-check-circle"
                  v-if="isRowHovered(index)"
                  v-on:click="completeMatch(book._id, match._id)"
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
    <div class="modal-backdrop" v-if="showMatchModal">
      <div class="item-modal">
        <div class="modal-header">
          <h4>Details</h4>
          <button
            type="button"
            class="btn-close"
            @click="showMatchModal = false"
          >
            x
          </button>
        </div>
        <div class="modal-body">
          <p><span class="gray">Textbook: </span>{{matchModalData.title}}, {{matchModalData.course_code}}</p>
          <p><span class="gray">Description: </span>{{matchModalData.description}}</p>
          <p v-if="!matchModalData.buy">
            <span class="gray">Price: </span>
            ${{parseInt(matchModalData.price).toFixed(2)}}
          </p>
          <p v-if="!matchModalData.buy" class="gray">Photo:</p>
          <p class="gray" style="padding-bottom: 3px">Contact info:</p>
          <p class="contact"><i class="far fa-user"></i>{{matchModalData.user.user_name}}</p>
          <p class="contact">
            <i class="far fa-envelope"></i>
            <a v-bind:href="'mailto:' + matchModalData.user.contact">{{matchModalData.user.contact}}</a>
          </p>
        </div>
      </div>
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
      showMatchModal: false,
      matchModalData: null,
    };
  },
  methods: {
    cancelBook: function (_id) {
      axios.post('http://localhost:3000/delete', {
        id: _id,
      })
      // copied from completeMatch
      .then(response => {
        let books;
        if (this.type == 'buy') {
          books = this.$store.state.booksBuy;
        } else {
          books = this.$store.state.booksSell;
        }
        for (let i = 0; i < books.length; ++i) {
          if (books[i]._id == _id) {
            this.$store.commit('removeBook', {
              type: this.type,
              index: i,
            });
            break;
          }
        }
      })
      .catch(err => {console.log(err)});
    },
    completeMatch: function (bookId, matchId) {
      axios.post('http://localhost:3000/sold', {
          id_1: bookId,
          id_2: matchId,
      })
      .then(response => {
        let books;
        if (this.type == 'buy') {
          books = this.$store.state.booksBuy;
        } else {
          books = this.$store.state.booksSell;
        }
        for (let i = 0; i < books.length; ++i) {
          if (books[i]._id == bookId) {
            this.$store.commit('removeBook', {
              type: this.type,
              index: i,
            });
            break;
          }
        }
      })
      .catch(err => {console.log(err)});
    },
    isRowHovered: function (index) {
      return index == this.rowHoverIndex;
    },
    openMatchModal: function (modal) {
      this.matchModalData = modal;
      this.showMatchModal = true;
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
  margin: 10px;
  display: flex;
  flex-direction: column;
}
.item-header {
  width: 100%;
}
.item-table {
  width: 100%;
  border-spacing: 0;
  padding-top: 10px;
}
.item-name {
  font-weight: bold;
  width: 80%;
}
.item-price {
  width: 10%;
}
.item-options {
  text-align: center;
  width: 10%;
}

.item-contents {
  width: 100%;
}
.item-content {
  /*display: flex;
  justify-content: space-around;*/
}
td {
  padding: 2px;
}
.content-table {
  width: 100%;
  text-align: left;
  border-spacing: 0;
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
.content-edition:hover,
.content-user:hover,
.content-contact:hover,
.content-price:hover {
  cursor: pointer;
}
.content-button {
  text-align: center;
  width: 10%;
}
.content-button i:hover {
  color: #1565c0;
  cursor: pointer;
}

.options-btn {
  color: lightgrey;
  font-size: 18px;
}
.options-btn i:hover {
  color: rgba(255, 0, 0, 0.637);
  cursor: pointer;
}

.no-matches {
  font-size: 12px;
  color: grey;
}

.match-row:hover {
  background-color: rgba(220, 220, 220, 0.658);
}


.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
.item-modal {
  background-color: white;
  box-shadow: 2px 2px 20px 1px rgba(0, 0, 0, 0.3);
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  min-width: 35vw;
}
.btn-close {
  border: none;
  padding: 0px;
  cursor: pointer;
  font-weight: bold;
  color: #1565c0;
  background: transparent;
}
.modal-header,
.modal-footer {
  padding: 20px;
  display: flex;
}
.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #1565c0;
  justify-content: space-between;
  font-size: 20px;
  font-weight: bold;
  padding-left: 30px;
}
.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: center;
}
.modal-body {
  position: relative;
  padding: 30px;
}
p {
  padding: 10px;
}
.contact {	
  padding: 3px 10px;	
}
p > i {
  padding-right: 5px;
}

.gray {
  color: grey;
  font-size: 14px;
}

hr {
  color: grey;
  margin: 10px 0px;
  border: 0.3px solid lightgrey;
}
</style>

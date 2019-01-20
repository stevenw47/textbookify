<template>
  <div class="items-item">
    
    <div class="item-header">
      <hr>
      <table class="item-table">
        
        <tr>
          <td class="item-name">{{ book.title }}<span class="grey">, {{ book.course_code }}</span></td>
          <td class="item-price"><span v-if="type!='buy'">${{ book.price.toFixed(2) }}</span></td>
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
      <template v-if="matches.length">
        <div class="item-content" v-for="(match, index) in matches" :key="match._id">
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
              v-on:click="openModal(match)"
            >
              <td class="content-edition">{{ match.edition }}</td>
              <td class="content-user" v-on:click="openModal">{{ match.user.user_name }}</td>
              <td class="content-contact">{{ match.user.contact }}</td>
              <td class="content-price"><span v-if="type=='buy'">${{ match.price.toFixed(2) }}</span></td>
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
      <div class="modal-backdrop" v-if="modal">
        <div class="item-modal">
          <div class="modal-header">
            <h4>Details</h4>
            <button
              type="button"
              class="btn-close"
              @click="closeModal"
            >
              x
            </button>
          </div>
          <div class="modal-body">
            <p><span class="gray">Textbook: </span>{{modal_data.title}}, {{modal_data.course_code}}</p>
            <p><span class="gray">Description: </span>{{modal_data.description}}</p>
            <p v-if="!modal_data.buy">
              <span class="gray">Price: </span>
              ${{modal_data.price.toFixed(2)}}
            </p>
            <p v-if="!modal_data.buy" class="gray">Photo:</p>
            <p class="gray" style="padding-bottom: 3px">Contact info:</p>
            <p class="contact"><i class="far fa-user"></i>{{modal_data.user.user_name}}</p>
            <p class="contact">
              <i class="far fa-envelope"></i>
              <a v-bind:href="'mailto:' + modal_data.user.contact">{{modal_data.user.contact}}</a>
            </p>

          </div>
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
      modal: false,
      modal_data: {
        user: {}
      },
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
    openModal(match) {
      console.log(match)
      this.modal_data = match;
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    }
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
  margin: 10px;
  display: flex;
  flex-direction: column;
}

.item-header {
  width: 100%;
}
.item-table {
  width: 100%;
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
  text-align: right;
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

.content-table {
  width: 100%;
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
  text-align: center;
  width: 10%;
  text-align: right;
}
.content-button:hover {
  color: #1565c0;
  cursor: pointer;
}

.options-btn {
  background-color: white;
  color: lightgrey;
  border: 0;
  cursor: pointer;
  font-size: 18px;
}
.options-btn:hover {
  color: rgba(255, 0, 0, 0.719);
}

.no-matches {
  font-size: 12px;
  color: grey;
}

.gray {
  color: grey;
  font-size: 14px;
}

.contact {
  padding: 3px 10px;
}

.contact i {
  padding-right: 8px;
}

hr {
  color: grey;
  margin: 15px 5px;
  border: 0.3px solid lightgrey;
}
</style>
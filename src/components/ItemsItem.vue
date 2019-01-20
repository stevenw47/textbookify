<template>
  <div class="items-item">
    <div class="item-header">
      <table class="item-table">
        <tr>
          <td class="item-name">{{ book.title }}<span class="grey">, {{ book.course_code }}</span></td>
          <td class="item-price"><span v-show="type!='buy'">${{ book.price }}</span></td>
          <td class="item-options">
            <button class="options-btn" v-on:click="openModal">
              <i class="fas fa-bars"></i>
            </button>
          </td>
        </tr>
      </table>
    </div>
    <div class="item-contents">
      <template v-if="matches.length">
        <div class="item-content" v-for="match in matches" :key="match._id" v-on:click="openModal(match)">
          <table class="content-table">
            <tr class="content-table-header">
              <td>Edition</td>
              <td>User</td>
              <td>Email</td>
              <td><span v-show="type=='buy'">Price</span></td>
            </tr>
            <tr>
              <td class="content-edition">{{ match.edition }}</td>
              <td class="content-user" v-on:click="openModal">{{ match.user.user_name }}</td>
              <td class="content-contact">{{ match.user.contact }}</td>
              <td class="content-price"><span v-show="type=='buy'">${{ match.price }}</span></td>
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
              ${{modal_data.price}}
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
      modal_data: {},
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
      console.log(this.matches);
    })
    .catch(err => {console.log(err)});
  },
  methods: {
    openModal(match) {
      console.log(match)
      this.modal_data = match;
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    }
  }
  
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
  cursor: pointer;
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
  width: 40%;
}
.content-contact {
  width: 40%;
}
.content-price {
  width: 10%;
}

.options-btn {
  background-color: white;
  border: 0;
  color: #1565c0;
  cursor: pointer;
  font-size: 18px;
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

i {
  padding-right: 8px;
}
</style>
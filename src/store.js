import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userId: 1,
    userName: 'Sherry',
    booksBuy: [],
    booksSell: [],
    loggedIn: false,
  },
  mutations: {
    pushBooksBuy (state, payload) {
      // console.log(payload);
      state.booksBuy.push(payload.bookBuy);
    },
    pushBooksSell (state, payload) {
      // console.log(payload.bookSell);
      state.booksSell.push(payload.bookSell);
      // console.log(state);
    },
    removeBook (state, payload) {
      if (payload.type == 'buy') {
        state.booksBuy.splice(payload.index, 1);
      } else {
        state.booksSell.splice(payload.index, 1);
      }
    },
    login (state, payload) {
      state.loggedIn = payload.value;
    },
  },
  actions: {
    /*
      USE WITH:
        this.$store.dispatch('refreshAllBooks');
      to refresh the data in vuex
    */
    refreshAllBooks (context) {
      if (context.state.loggedIn) {
        axios.get('http://localhost:3000/books', {
        })
        .then(response => {
          let data = response.data;
          context.state.booksBuy = [];
          context.state.booksSell = [];
          for (let i = 0; i < data.length; ++i) {
            if (data[i].buy) {
              context.commit('pushBooksBuy', {
                bookBuy: data[i],
              });
            } else {
              context.commit('pushBooksSell', {
                bookSell: data[i],
              });
            }
          }
        })
        .catch(err => {console.log(err)});
      }
    },
  },
});

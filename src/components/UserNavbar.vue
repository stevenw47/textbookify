<template>
  <div class="user-navbar">  
    <div class="title">
      textbookify
    </div>
    <div>
      <ActionModal
        v-show="isBuyingItem"
        v-on:close="closeBuyModal"
      >
        <template slot="header">
          Buy something!
        </template>
        <template slot="body">
          insert buy form
        </template>
        <template slot="footer">
          submit
        </template>
      </ActionModal>
      <ActionModal
        v-show="isSellingItem"
        v-on:close="closeSellModal"
      >
        <template slot="header">
          Sell something!
        </template>
        <template slot="body">
          insert sell form
        </template>
        <template slot="footer">
          submit
        </template>
      </ActionModal>
      <div class="buttons">
        <button class="action-btn" v-on:click="showBuyModal">BUY</button>
        <button class="action-btn" v-on:click="showSellModal">SELL</button>
      </div>
    </div>
    <div class="profile">
      Hi, Sherry
    </div>
  </div>
</template>

<script>
import ActionModal from '@/components/ActionModal.vue';
export default {
  components: {
    ActionModal,
  },
  data: function () {
    return {
      isBuyingItem: false,
      isSellingItem: false,
    };
  },
  methods: {
    showBuyModal() {
      this.isBuyingItem = true;
    },
    closeBuyModal() {
      this.isBuyingItem = false;
    },
    showSellModal() {
      this.isSellingItem = true;
    },
    closeSellModal() {
      this.isSellingItem = false;
    },
  },
};
</script>

<style scoped>
.user-navbar {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #1565c0;
  height: 250px;
  font-family: Montserrat;
  color: white;
}

.title {
  font-size: 70px; 
  padding: 20px;
}

.buttons {
  min-width: 220px;
  display: flex;
  justify-content: space-between;
}

.action-btn {
  background-color: white;
  border: none;
  border-radius: 10px;
  padding: 0.5em 1em;
  cursor: pointer;
  text-align: center;
  color: #1565c0;
  font-weight: bold;
  width: 70px;
}

.profile {
  position: absolute;
  top: 20px;
  right: 40px;
  color: white;
}
</style>
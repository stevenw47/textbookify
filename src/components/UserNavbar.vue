<template>
  <div class="user-navbar">  
    <div class="nav-item">
      hi
    </div>
    <div class="nav-item">
      <p class="name">textbookify</p>
    </div>
    <div class="nav-item">
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
      <div class="buttons-row">
        <button class="action-btn" v-on:click="showBuyModal">Buy</button>
        <button class="action-btn" v-on:click="showSellModal">Sell</button>
      </div>
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
  justify-content: space-evenly;
  align-items: center;

  background-color: #1565c0;
  color: white;
}

.nav-item {
  margin: 1.1em 0;
}

.name {
  font-size: 60px;
}

.buttons-row {
  min-width: 12vw;
  display: flex;
  justify-content: space-between;
}

.action-btn {
  background-color: white;
  color: #1565c0;
  border: none;
  border-radius: 0.5em;
  padding: 0.5em 1em;
  cursor: pointer;
}
</style>
<template>
  <div class="user-navbar">  
    <div>
      logo
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
        <button class="action-btn" v-on:click="showBuyModal">Buy</button>
        <button class="action-btn" v-on:click="showSellModal">Sell</button>
      </div>
    </div>
    <div>
      hi, person!
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
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: #88CCF1;
  min-height: 8vh;
}

.buttons {
  min-width: 20vw;
  display: flex;
  justify-content: space-between;
}

.action-btn {
  background-color: #3F8EFC;
  border: none;
  padding: 0.5em 1em;
  cursor: pointer;
  text-align: center;
}
</style>
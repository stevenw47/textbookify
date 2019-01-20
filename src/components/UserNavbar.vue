<template>
  <div class="user-navbar">
    <div class="title">textbookify</div>
    <div class="nav-item">
      <ActionModal v-show="isBuyingItem" v-on:close="closeBuyModal">
          <template slot="header">Buy a textbook</template>
          <template slot="body">
            <p>Course Code:</p>
            <input id="course-code" v-model="courseCode" type="text" placeholder="ECON101">
            <p>Title:</p>
            <input id="title" v-model="title" type="text" placeholder="Introduction to Microeconomics">
            <p>Edition:</p>
            <input id="edition" v-model="edition" type="number" min="1" placeholder="1" value="1">
            <p>Description:</p>
            <input id="description" v-model="description" type="text" placeholder="Hardcovers preferred.">
            <i class="fas fa-info-circle"></i><p class="analytics">The average price for this item is <strong>$50.00</strong>.</p>
            <br>
            <i class="fas fa-info-circle" style="color: white;"></i><p class="analytics"><strong>10</strong> copies were sold in the past week.</p>
          </template>
          <template slot="footer">
           <button class="action-btn" v-on:click="handleSubmit">SUBMIT</button>
        </template>
      </ActionModal>
      <ActionModal v-show="isSellingItem" v-on:close="closeSellModal">
        <template slot="header">Sell a textbook</template>
        <template slot="body">
            <p>Course Code:</p>
            <input id="course-code" v-model="courseCode" type="text" placeholder="ECON101">
            <p>Title:</p>
            <input id="title" v-model="title" type="text" placeholder="Introduction to Microeconomics">
            <p>Edition:</p>
            <input id="edition" v-model="edition" type="number" min="1" placeholder="1" value="">
            <p>Description:</p>
            <input id="description" v-model="description" type="text" placeholder="Great condition!">
            <p>Link to Picture:</p>
            <input id="picture" type="text" v-model="picture" placeholder="https://drive.google.com/userid/my_book">
            <p>Price:</p>
            <input id="price" v-model="price" type="number" min="0" placeholder="50.00" step="0.01" value="50.00">
            <i class="fas fa-info-circle"></i><p class="analytics">The average price for this item is <strong>$50.00</strong>.</p>
            <br>
            <i class="fas fa-info-circle" style="color: white;"></i><p class="analytics"><strong>10</strong> copies were sold in the past week.</p>
         </template>
        <template slot="footer">
          <button class="action-btn" v-on:click="handleSubmit">Submit</button>
        </template>
      </ActionModal>
      <div class="buttons">
        <button class="action-btn" v-on:click="showBuyModal">BUY</button>
        <button class="action-btn" v-on:click="showSellModal">SELL</button>
      </div>
    </div>
    <div class="profile">Hi, {{ this.$store.state.userName }}</div>
  </div>
</template>

<script>
import ActionModal from "@/components/ActionModal.vue";
import axios from "axios";

export default {
  components: {
    ActionModal
  },
  data: function() {
    return {
      isBuyingItem: false,
      isSellingItem: false,
      courseCode: null,
      title: null,
      edition: null,
      description: null,
      picture: null,
      price: null
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
    handleSubmit() {
      axios.post('http://localhost:3000/addition', {
        course_code: this.courseCode,
        title: this.title,
        edition: this.edition,
        description: this.description,
        picture: this.picture,
        price: this.price,
        buy: this.isBuyingItem
      }).then(res => console.log(res));
      this.courseCode = null;
      this.title = null;
      this.edition = null;
      this.description = null;
      this.picture = null;
      this.price = null;
      if (this.isBuyingItem) this.closeBuyModal();
      else this.closeSellModal();
    }
  }
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
  box-shadow: 10px 5px 10px rgba(0,0,0,0.3);
}

.title {
  font-size: 70px;
  padding: 20px;
}

.buttons {
  min-width: 200px;
  display: flex;
  justify-content: space-between;
}

.action-btn {
  background-color: white;
  border-radius: 10px;
  border: none;
  padding: 0.5em 1em;
  cursor: pointer;
  text-align: center;
  color: #1565c0;
  font-size: 14px;
  font-weight: bold;
  width: 80px;
  box-shadow: 2px 2px 10px rgba(0,0,0,0.3);

  transition: background 100ms ease-in-out;
}

.action-btn:hover {
  background-color: #e9edff;
}

.profile {
  position: absolute;
  top: 20px;
  right: 40px;
  color: white;
}

.user-navbar p {
  color: black;
  font-weight: bold;
}

.user-navbar input {
  width: 100%;
  padding: 12px 20px;
  margin: 6px 0 18px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.user-navbar i {
  color: #1565c0;
}

p.analytics {
  display: inline;
  padding: 0 8px;
  font-weight: normal;
  font-family: 'Inter UI';
}

::placeholder {
  color: lightgrey;
}

strong {
  color: #1565c0;
}
</style>

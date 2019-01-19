<template>
  <div class="items-item">
    <div class="item-header">
      <div class="item-name">
        <!-- Microeconomics 5th ed, ECON101 -->
        {{ book.title }}, {{ book.course_code }}
      </div>
      <div class="item-price">
        <!-- $50 -->
        ${{ book.price }}
      </div>
      <div class="item-options">
        ...
      </div>
    </div>
    <div class="item-contents">
      <div class="item-content" v-for="match in matches" :key=match._id>
        <div class="content-edition">
          <!-- 5th ed -->
          {{ match.edition }} ed
        </div>
        <div class="content-user">
          <!-- Hannah Wang -->
          {{ match.user.user_name }}
        </div>
        <div class="content-contact">
          <!-- hannah@gmail.com -->
          {{ match.user.contact }}
        </div>
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
  display: flex;
  justify-content: space-around;
}

.item-name {
  flex: 6 1 auto;
}
.item-price {
  flex: 1 1 auto;
}
.item-options {
  flex: 1 1 auto;
}

.item-contents {
  margin: 5px 8px;
  display: flex;
  flex-direction: column;
}
.item-content {
  display: flex;
  justify-content: space-around;
}

.content-edition {
  flex: 1 1 auto;
}
.content-user {
  flex: 3 1 auto;
}
.content-contact {
  flex: 4 1 auto;
}

</style>
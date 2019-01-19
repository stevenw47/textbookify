<template>
  <div class="items-item">
    <div class="item-header">
      <div class="item-name">
        Microeconomics 5th ed, ECON101
      </div>
      <div class="item-price">
        $50
      </div>
      <div class="item-options">
        ...
      </div>
    </div>
    <div class="item-contents">
      <div class="item-content">
        <div class="content-edition">
          5th ed
        </div>
        <div class="content-user">
          Hannah Wang
        </div>
        <div class="content-contact">
          hannah@gmail.com
        </div>
      </div>
      <div class="item-content">
        <div class="content-edition">
          5th ed
        </div>
        <div class="content-user">
          Hannah Wang
        </div>
        <div class="content-contact">
          hannah@gmail.com
        </div>
      </div>
      <div class="item-content">
        <div class="content-edition">
          5th ed
        </div>
        <div class="content-user">
          Hannah Wang
        </div>
        <div class="content-contact">
          hannah@gmail.com
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
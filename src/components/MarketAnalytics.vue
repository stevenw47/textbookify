<template>
  <div class="market-analytics">
    <div class="demand analytics-box">
      <h3>High Demand Items</h3>
      <div class="header">
        <div class="item-number"></div>
        <div class="item-name">Name</div>
        <div class="item-quantity"># buyers</div>
      </div>
      <div class="item">
        <div class="item-number">1</div>
        <div class="item-name">Microeconomics, ECON101</div>
        <div class="item-quantity">20</div>
      </div>
    </div>
    <div class="supply analytics-box">
      <h3>High Supply Items</h3>
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.market-analytics {
  min-height: 20vh;
  border: 1.5px solid #1565c0;
  display: flex;
  justify-content: space-evenly;
}

.analytics-box {
  padding: 10px;
  min-width: 25vw;
}

h3 {
  color: #1565c0;
  padding: 5px 0;
}

.header {
  display: flex;
  color: grey;
  font-size: 12px;
}

.item {
  display: flex;
  padding: 5px 0;
}

.item-number {
  flex: 1;
}

.item-name {
  flex: 15;
}

.item-quantity {
  flex: 4;
  text-align: center;
}

</style>
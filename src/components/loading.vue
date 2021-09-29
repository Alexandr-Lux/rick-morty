<template>
  <div class="loading-container">
    <div class="dot"></div>
    <div class="dot"></div>
    <div class="dot"></div>
  </div>
</template>

<script>
export default {
  name: 'loading'
}
</script>

<style lang="scss" scoped>

.loading-container {
  width: 100px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.dot {
  display: inline-block;
  width: 15px;
  height: 15px;
  border-radius: 10px;
  background-color: #e4d59b;
  margin-right: 5px;
}

.dot:nth-child(1) {
  animation: loading 0.6s 0.1s linear infinite;
}
.dot:nth-child(2) {
  animation: loading 0.6s 0.2s linear infinite;
}
.dot:nth-child(3) {
  margin-right: 0;
  animation: loading 0.6s 0.3s linear infinite;
}

@keyframes loading {
  0% {
    transform: translate(0, 0);
  }
  33% {
    transform: translate(0, -10px);
  }
  66% {
    transform: translate(0, 10px);
  }
  100% {
    transform: translate(0, 0);
  }
}

</style>

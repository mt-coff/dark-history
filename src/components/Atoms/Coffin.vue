<template>
  <div class="coffin" @click="() => $emit('click')">
    <div class="coffin-cover">
      <div class="coffin-top"></div>
      <div class="coffin-bottom"></div>
    </div>
    <div class="coffin-body">
      <div class="coffin-top"></div>
      <div class="coffin-bottom"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.coffin {
  position: relative;
}
.coffin-cover {
  position: relative;
  display: inline-block;
  z-index: 100;
}
.coffin:hover > .coffin-cover {
  animation: coffin-animation 0.5s linear 1 normal forwards;
}

@keyframes coffin-animation {
  to {
    transform: rotate(15deg) translateX(20px);
  }
}

.coffin-body {
  position: absolute;
  display: inline-block;
  left: 40%;
}
.coffin-cover::before {
  content: "";
  background-color: white;
  height: 4px;
  width: 70%;
  display: inline-block;
  position: absolute;
  top: 30%;
  left: 15%;
}
.coffin-cover::after {
  content: "";
  background-color: white;
  height: 60px;
  width: 5px;
  display: inline-block;
  position: absolute;
  top: 15%;
  left: 47%;
}
.coffin-top {
  height: 0px;
  width: 40px;
  border-bottom: 20px solid black;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}
.coffin-bottom {
  height: 0px;
  width: 40px;
  border-top: 90px solid black;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
}

.coffin-body > .coffin-top {
  border-bottom-color: var(--main-color);
}
.coffin-body > .coffin-bottom {
  border-top-color: var(--main-color);
}
</style>

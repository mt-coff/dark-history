<template>
  <div class="coffin" @click="() => $emit('click')">
    <div class="coffin-top"></div>
    <div class="coffin-bottom"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.coffin {
  position: relative;
  display: inline-block;
}
.coffin::before {
  content: "";
  background-color: white;
  height: 4px;
  width: 70%;
  display: inline-block;
  position: absolute;
  top: 30%;
  left: 15%;
}
.coffin::after {
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
</style>

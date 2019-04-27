<template>
  <span :style="{ width: size, height: size }"></span>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: "32px"
    }
  }
};
</script>

<style scoped>
span {
  display: inline-block;
  box-sizing: border-box;
  background: transparent;
  border: 2.5px solid #888;
  border-left-color: transparent;
  border-radius: 50%;
  transform: rotate3d(0, 0, 0);
  animation: spin 1s linear 0s infinite normal;
}

@keyframes spin {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

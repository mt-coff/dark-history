<template>
  <span class="bubble">
    <slot />
  </span>
</template>

<script>
export default {};
</script>

<style scoped>
.bubble {
  position: relative;
  padding: 8px 32px;
  border-radius: 32px;
  background: var(--dark);
  color: var(--light);
  border: 1px solid var(--light);
  box-sizing: border-box;
  transform: translate3d(-50%, calc(-50% - 40px), 0);
}

.bubble::before {
  content: "";
  position: absolute;
  bottom: -17px;
  right: calc(50% - 8px);
  border: 8px solid transparent;
  border-top-color: var(--light);
}

.bubble::after {
  content: "";
  position: absolute;
  bottom: -15px;
  right: calc(50% - 8px);
  border: 8px solid transparent;
  border-top-color: var(--dark);
}
</style>

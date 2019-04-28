<template>
  <header>
    <slot />
  </header>
</template>

<script>
export default {
  name: "top"
};
</script>

<style scoped>
header {
  height: 64px;
  border-bottom: 1px solid var(--light);
}
</style>

<template>
  <span>
    <slot />
  </span>
</template>

<script>
export default {
  name: "form-label"
};
</script>

<style scoped>
span {
  color: var(--light);
}
</style>

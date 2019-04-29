<template>
  <label>
    <slot />
  </label>
</template>

<script>
export default {
  name: "form-label"
};
</script>

<style scoped>
label {
  padding-bottom: 0.5rem;
  color: var(--light);
  font-size: 24px;
}
</style>

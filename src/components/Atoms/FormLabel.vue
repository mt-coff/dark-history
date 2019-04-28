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
  padding-left: 8px;
  color: var(--light);
  font-size: 24px;
}
</style>

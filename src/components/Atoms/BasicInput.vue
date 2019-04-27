<template>
  <input
    :type="type"
    @input="e => $emit('input', e.target.value)"
    :value="value"
  />
</template>

<script>
export default {
  name: "basic-input",
  props: {
    type: {
      type: String,
      default: "text"
    },
    value: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
input {
  background: var(--light);
  border: none;
  padding: 8px;
  font-size: 24px;
  color: var(--dark);
}
</style>

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
  border: none;
  padding: 8px;
  box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.5);
  font-size: 16px;
}
</style>

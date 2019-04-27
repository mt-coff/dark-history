<template>
  <textarea @input="e => $emit('input', e.target.value)" :value="value" />
</template>

<script>
export default {
  name: "basic-textarea",
  props: {
    value: String
  }
};
</script>

<style scoped>
textarea {
  border: none;
  font-size: 16px;
  padding: 8px;
}
</style>

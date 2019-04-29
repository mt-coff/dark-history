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
  font-size: 24px;
  padding: 8px;
  resize: none;
  border-radius: 8px;
}
</style>

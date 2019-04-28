<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    text: String
  }
};
</script>

<style scoped>
div {
  padding: 0;
  white-space: pre;
}
</style>

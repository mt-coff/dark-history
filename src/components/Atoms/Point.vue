<template>
  <circle :cx="center.x" :cy="center.y" :r="radius" />
</template>

<script>
export default {
  props: {
    center: {
      type: Object,
      default: () => ({ x: 0, y: 0 })
    },
    radius: {
      type: Number,
      default: 16
    }
  }
};
</script>

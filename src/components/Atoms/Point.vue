<template>
  <circle
    :cx="center.x"
    :cy="center.y"
    :r="radius"
    @mouseover="e => $emit('mouseover', e)"
    @mouseleave="e => $emit('mouseleave', e)"
    @click="e => $emit('click')"
  />
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

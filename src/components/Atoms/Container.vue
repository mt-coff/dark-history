<template>
  <div :style="{ padding: `${space}px` }">
    <slot />
  </div>
</template>

<script>
export default {
  name: "container",
  props: {
    space: {
      type: Number,
      default: 32
    }
  }
};
</script>

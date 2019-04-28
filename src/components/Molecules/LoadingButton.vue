<template>
  <basic-button
    @click="() => $emit('click')"
    :style="{ height: `${size}px` }"
    :class="{ loading: isLoading }"
    :disabled="isLoading"
  >
    <loading v-if="isLoading" :size="`${size * 0.7}px`" />
    <slot v-else />
  </basic-button>
</template>

<script>
export default {
  components: {
    Loading: () => import("@/components/Atoms/Loading"),
    BasicButton: () => import("@/components/Atoms/BasicButton")
  },
  props: {
    isLoading: {
      type: Boolean,
      default: false
    },
    size: {
      type: Number,
      default: 48
    }
  }
};
</script>

<style scoped>
button {
  transition: box-shadow 1s ease;
}
button:hover:not(.loading) {
  box-shadow: 0 0 8px 8px var(--main-color);
}
</style>

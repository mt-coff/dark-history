<template>
  <div class="wrap">
    <basic-image class="image" :url="url" @load="() => (isLoading = false)" />
    <loading v-if="isLoading" class="loading" :size="size" />
  </div>
</template>

<script>
export default {
  components: {
    BasicImage: () => import("@/components/Atoms/BasicImage"),
    Loading: () => import("@/components/Atoms/Loading")
  },
  props: {
    url: {
      type: String,
      default: ""
    },
    size: {
      type: String,
      default: "64px"
    }
  },
  data() {
    return {
      isLoading: true
    };
  }
};
</script>

<style scoped>
.wrap {
  position: relative;
  height: auto;
  max-width: 100%;
  background: #aaa;
  border-radius: 16px;
}

.loading {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}
.image {
  height: auto;
  max-width: 100%;
}
</style>

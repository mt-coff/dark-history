<template>
  <div class="wrapper">
    <span class="coffin-name">{{ name }}</span>
    <coffin />
  </div>
</template>

<script>
export default {
  components: {
    Coffin: () => import("@/components/Atoms/Coffin")
  },
  props: {
    name: {
      required: true,
      type: String
    }
  }
};
</script>

<style scoped></style>

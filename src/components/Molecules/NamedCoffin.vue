<template>
  <div class="wrapper">
    <div class="coffin-name" @click="() => $emit('click')">{{ name }}</div>
    <coffin class="coffin" @click="() => $emit('click')" />
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

<style scoped>
.wrapper {
  text-align: center;
  display: block;
}
.coffin-name {
  font-size: 0.8rem;
  max-width: 300px;
  padding-bottom: 0.5rem;
  white-space: pre-line;
  word-break: keep-all;
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
}
.coffin {
  cursor: pointer;
}
</style>

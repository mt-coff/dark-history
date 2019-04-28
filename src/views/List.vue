<template>
  <div>
    <list-temp />
  </div>
</template>

<script>
export default {
  name: "list",
  components: {
    ListTemp: () => import("@/components/Templates/ListTemp")
  }
};
</script>

<style scoped></style>

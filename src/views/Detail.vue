<template>
  <div class="detail">
    <detail-temp></detail-temp>
  </div>
</template>

<script>
export default {
  name: "detail",
  components: {
    DetailTemp: () => import("@/components/Templates/DetailTemp")
  },
  methods: {
    getItem() {}
  }
};
</script>

<style scoped></style>

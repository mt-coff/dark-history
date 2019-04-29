<template>
  <div>
    <matrix>
      <point
        v-for="(p, i) in points"
        :key="'point' + i"
        :center="p"
        :radius="8"
        @mouseover="hoverPoint"
        @mouseleave="hoverPoint"
      ></point>
    </matrix>
  </div>
</template>

<script>
export default {
  components: {
    Matrix: () => import("@/components/Atoms/Matrix"),
    Point: () => import("@/components/Atoms/Point")
  },
  props: {
    points: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    hoverPoint(e) {
      console.log(e);
    }
  }
};
</script>

<style scoped></style>

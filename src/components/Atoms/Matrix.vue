<template>
  <svg :width="`${width}px`" :height="`${height}px`" class="matrix">
    <rect
      x="0"
      y="0"
      rx="8"
      ry="8"
      :width="width"
      :height="height"
      class="base"
      @click="clickMatrix"
    ></rect>
    <line
      :x1="width / 2"
      :y1="height * 0.05"
      :x2="width / 2"
      :y2="height * 0.95"
      stroke-width="1"
      class="axis"
    ></line>
    <line
      :x1="width * 0.05"
      :y1="height / 2"
      :x2="width * 0.95"
      :y2="height / 2"
      stroke-width="1"
      class="axis"
    ></line>
    <slot></slot>
  </svg>
</template>

<script>
import { posFunc } from "@/js/matrix";

export default {
  props: {
    width: {
      type: Number,
      default: 480
    },
    height: {
      type: Number,
      default: 320
    }
  },
  methods: {
    clickMatrix(e) {
      this.$emit(
        "click",
        posFunc({ x: e.offsetX, y: e.offsetY }, this.width, this.height)
      );
    }
  }
};
</script>

<style scoped>
.base {
  fill: var(--light);
}

.axis {
  stroke: var(--dark);
}
</style>

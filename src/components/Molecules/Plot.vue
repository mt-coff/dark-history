<template>
  <div>
    <form-label>{{ info }}</form-label>
    <div class="plot" :style="{ width: `${width}px`, height: `${height}px` }">
      <span class="top">{{ label.top }}</span>
      <span class="bottom">{{ label.bottom }}</span>
      <span class="left">{{ label.left }}</span>
      <span class="right">{{ label.right }}</span>
      <matrix :width="width" :height="height" @click="e => $emit('click', e)">
        <point
          v-for="{ x, y } in points"
          :key="x + y"
          :center="{
            x: (x * width) / 2 + width / 2,
            y: height / 2 - (y * height) / 2
          }"
          :radius="8"
          class="point"
        />
      </matrix>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Matrix: () => import("@/components/Atoms/Matrix"),
    Point: () => import("@/components/Atoms/Point"),
    FormLabel: () => import("@/components/Atoms/FormLabel")
  },
  props: {
    points: Array,
    width: {
      type: Number,
      default: 480
    },
    height: {
      type: Number,
      default: 320
    },
    info: String,
    label: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}

.plot {
  position: relative;
  padding: 32px;
  margin: 0 auto;
}

.plot > span {
  position: absolute;
  text-align: center;
  font-size: 24px;
  width: 128px;
  height: 32px;
  color: var(--light);
}

.top {
  top: -4px;
  left: calc(50% - 64px);
}

.bottom {
  bottom: -4px;
  left: calc(50% - 64px);
}

.left {
  top: calc(50% - 16px);
  left: -98px;
}

.right {
  top: calc(50% - 16px);
  right: -98px;
}

.point {
  fill: var(--main-color);
  animation: shown 1s ease;
  animation-fill-mode: forwards;
}

@keyframes shown {
  0% {
    r: 0;
  }
  50% {
    r: 12;
  }
  75% {
    r: 6;
  }
  100% {
    r: 8;
  }
}
</style>

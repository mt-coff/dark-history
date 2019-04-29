<template>
  <div class="wrap">
    <matrix ref="svg">
      <point
        v-for="(p, i) in points"
        :key="'point' + i"
        :center="calcPos(p)"
        :radius="8"
        class="point"
        @mouseover="e => overPoint(e, p)"
        @mouseleave="e => leavePoint(e)"
      ></point>
    </matrix>
    <speech-bubble v-if="selected" :style="bubblePos">
      {{ selected.title }}
    </speech-bubble>
  </div>
</template>

<script>
import { invPosFunc } from "@/js/matrix";

export default {
  components: {
    Matrix: () => import("@/components/Atoms/Matrix"),
    Point: () => import("@/components/Atoms/Point"),
    SpeechBubble: () => import("@/components/Atoms/SpeechBubble")
  },
  props: {
    points: {
      type: Array,
      default: () => []
    },
    width: {
      type: Number,
      default: 480
    },
    height: {
      type: Number,
      default: 320
    }
  },
  data() {
    return {
      selected: null
    };
  },
  computed: {
    bubblePos() {
      if (this.$refs.svg) {
        const [x, y] = invPosFunc(
          { x: this.selected.darkness, y: this.selected.strength },
          this.width,
          this.height
        );

        const rootPos = this.$el.getBoundingClientRect();
        const svgPos = this.$refs.svg.$el.getBoundingClientRect();
        const offset = {
          x: svgPos.x - rootPos.x,
          y: svgPos.y - rootPos.y
        };
        return {
          top: `${y + offset.y}px`,
          left: `${x + offset.x}px`
        };
      }
      return { top: "0px", left: "0px" };
    }
  },
  methods: {
    overPoint(e, p) {
      this.selected = p;
    },
    leavePoint() {
      this.selected = null;
    },
    calcPos(p) {
      const [x, y] = invPosFunc(
        { x: p.darkness, y: p.strength },
        this.width,
        this.height
      );
      return { x, y };
    }
  }
};
</script>

<style scoped>
.wrap {
  position: relative;
}

.bubble {
  position: absolute !important;
}

.point {
  fill: var(--main-color);
}

.point:hover {
  animation: shown 0.25s ease;
}

@keyframes shown {
  0% {
    r: 8;
  }

  50% {
    r: 12;
  }

  100% {
    r: 8;
  }
}
</style>
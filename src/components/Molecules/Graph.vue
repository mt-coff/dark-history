<template>
  <div class="wrap">
    <form-label>{{ info }}</form-label>
    <div class="plot" :style="{ width: `${width}px`, height: `${height}px` }">
      <span class="top">{{ label.top }}</span>
      <span class="bottom">{{ label.bottom }}</span>
      <span class="left">{{ label.left }}</span>
      <span class="right">{{ label.right }}</span>
      <matrix ref="svg">
        <point
          v-for="(p, i) in points"
          :key="'point' + i"
          :center="calcPos(p)"
          :radius="8"
          class="point"
          @mouseover="e => overPoint(e, p)"
          @mouseleave="e => leavePoint(e)"
          @click="() => $router.push(`/detail/${p.id}`)"
        ></point>
      </matrix>
    </div>
    <speech-bubble v-if="selected" :style="bubblePos">{{
      selected.title
    }}</speech-bubble>
  </div>
</template>

<script>
import { invPosFunc } from "@/js/matrix";

export default {
  components: {
    Matrix: () => import("@/components/Atoms/Matrix"),
    Point: () => import("@/components/Atoms/Point"),
    SpeechBubble: () => import("@/components/Atoms/SpeechBubble"),
    FormLabel: () => import("@/components/Atoms/FormLabel")
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
    },
    info: {
      type: String,
      default: ""
    },
    label: {
      type: Object,
      required: true
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
  display: flex;
  flex-direction: column;
}

.bubble {
  position: absolute !important;
}

.point {
  fill: var(--main-color);
  cursor: pointer;
}

.point:hover {
  animation: shown 0.25s ease;
}

.plot {
  position: relative;
  padding: 32px;
  margin: 16px auto 0;
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

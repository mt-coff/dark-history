<template>
  <div class="wrap">
    <matrix ref="svg">
      <point
        v-for="(p, i) in points"
        :key="'point' + i"
        :center="calcPos(p)"
        :radius="8"
        @mouseover="e => overPoint(e, p)"
        @mouseleave="e => leavePoint(e)"
      ></point>
    </matrix>
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
      selected: null,
      rootPos: null
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

        const svgPos = this.$refs.svg.$el.getBoundingClientRect();
        const offset = {
          x: svgPos.x - this.rootPos.x,
          y: svgPos.y - this.rootPos.y
        };
        return {
          top: `${x + offset.x}px`,
          left: `${y + offset.y}px`
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
      // this.selected = null;
    },
    calcPos(p) {
      const [x, y] = invPosFunc(
        { x: p.darkness, y: p.strength },
        this.width,
        this.height
      );
      return { x, y };
    }
  },
  mounted() {
    const { x, y } = this.$el.getBoundingClientRect();
    this.rootPos = { x, y };
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
</style>

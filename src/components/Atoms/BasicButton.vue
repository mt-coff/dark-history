<template>
  <button @click="onClick" :style="style" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
import { calcTextColor } from "../../js/color.js";

export default {
  name: "basic-button",
  methods: {
    onClick() {
      this.$emit("click");
    }
  },
  props: {
    color: {
      type: String,
      default: "light"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    style() {
      return {
        "--bg-color": `var(--${this.color})`,
        "--text-color": `var(--${calcTextColor(this.color)})`
      };
    }
  }
};
</script>

<style scoped>
button {
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  background: var(--bg-color);
  color: var(--text-color);
}

button:disabled {
  background: #c8c8c8;
}
</style>

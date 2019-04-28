<template>
  <router-link :to="to" :style="style">
    <slot />
  </router-link>
</template>

<script>
import { calcTextColor } from "@/js/color.js";

export default {
  props: {
    to: String,
    color: {
      type: String,
      default: "light"
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
a {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 16px;
  text-decoration: none;
  cursor: pointer;
  background: var(--bg-color);
  color: var(--text-color);
}
</style>

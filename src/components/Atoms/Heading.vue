<script>
export default {
  name: "heading",
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  render(createElement) {
    return createElement(`h${this.level}`, this.$slots.default);
  }
};
</script>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}
</style>

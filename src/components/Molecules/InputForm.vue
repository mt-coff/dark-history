<template>
  <div>
    <form-label>{{ label }}</form-label>
    <basic-input
      class="form"
      @input="e => $emit('input', e)"
      :value="value"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: "input-form",
  components: {
    BasicInput: () => import("@/components/Atoms/BasicInput"),
    FormLabel: () => import("@/components/Atoms/FormLabel")
  },
  props: {
    value: String,
    placeholder: String,
    label: String
  }
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}
</style>

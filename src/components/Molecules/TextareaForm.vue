<template>
  <div>
    <form-label>{{ label }}</form-label>
    <basic-textarea
      @input="e => $emit('input', e)"
      :value="value"
      :style="{ height }"
    />
  </div>
</template>

<script>
export default {
  name: "textarea-form",
  components: {
    FormLabel: () => import("@/components/Atoms/FormLabel"),
    BasicTextarea: () => import("@/components/Atoms/BasicTextarea")
  },
  props: {
    label: String,
    value: String,
    height: String
  }
};
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
}
</style>

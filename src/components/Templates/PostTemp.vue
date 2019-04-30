<template>
  <container class="container">
    <heading :level="1" style="text-align: center"
      >†黒歴史を打ち明ける†</heading
    >
    <container :space="16">
      <InputForm label="タイトル" @input="e => $emit('update:title', e)" />
    </container>
    <container :space="16">
      <textarea-form
        label="内容"
        height="128px"
        @input="e => $emit('update:detail', e)"
      />
    </container>
    <container :space="16">
      <plot
        info="タイプ"
        @click="addPoint"
        :points="point ? [point] : []"
        :label="label"
      />
    </container>
    <container :space="16">
      <loading-button
        @click="() => $emit('click')"
        style="width: 100%;"
        :is-loading="loading"
        >打ち明ける</loading-button
      >
    </container>
  </container>
</template>

<script>
export default {
  components: {
    TextareaForm: () => import("../Molecules/TextareaForm"),
    InputForm: () => import("../Molecules/InputForm"),
    Container: () => import("@/components/Atoms/Container"),
    Heading: () => import("@/components/Atoms/Heading"),
    LoadingButton: () => import("@/components/Molecules/LoadingButton"),
    Plot: () => import("@/components/Molecules/Plot")
  },
  props: {
    title: {
      type: String,
      required: true
    },
    detail: {
      type: String,
      required: true
    },
    darkness: {
      type: Number,
      required: true
    },
    strength: {
      type: Number,
      required: true
    },
    loading: Boolean
  },
  data() {
    return {
      point: null,
      label: {
        top: "痛い",
        bottom: "弱い",
        left: "DQN",
        right: "中二病"
      }
    };
  },
  methods: {
    addPoint([x, y]) {
      this.point = { x, y };
      this.$emit("update:darkness", x);
      this.$emit("update:strength", y);
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-content: center;
  width: 60%;
  margin: 0 auto;
  animation: shown 1s ease 0.1s;
  opacity: 0;
  animation-fill-mode: forwards;
}

@keyframes shown {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>

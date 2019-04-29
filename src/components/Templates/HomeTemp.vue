<template>
  <container>
    <container class="show" style="--delay-time: 200ms" :space="24">
      <heading :level="1">
        <slot name="header" />
      </heading>
    </container>
    <container class="show" style="--delay-time: 400ms" :space="24">
      <paragraph style="font-size: 24px;">
        <slot name="about" />
      </paragraph>
    </container>
    <container class="show" style="--delay-time: 600ms" :space="24">
      <graph :points="[{ x: 100, y: 100 }]"></graph>
    </container>
    <container class="show" style="--delay-time: 600ms">
      <link-button
        to="/post"
        style="min-width: 50%; font-size: 24px; padding: 16px;"
      >
        <slot name="buttonLabel" />
      </link-button>
    </container>
  </container>
</template>

<script>
export default {
  components: {
    Container: () => import("@/components/Atoms/Container"),
    Heading: () => import("@/components/Atoms/Heading"),
    Paragraph: () => import("@/components/Atoms/Paragraph"),
    LinkButton: () => import("@/components/Atoms/LinkButton"),
    Graph: () => import("@/components/Molecules/Graph")
  }
};
</script>

<style scoped>
.show {
  opacity: 0;
  margin-top: 32px;
  --delay-time: 0s;
  animation: shown 1s ease var(--delay-time);
  animation-fill-mode: forwards;
}

@keyframes shown {
  from {
    margin-top: 32px;
    opacity: 0;
  }
  to {
    margin-top: 0;
    opacity: 1;
  }
}
</style>

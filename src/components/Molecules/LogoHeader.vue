<template>
  <top>
    <logo class="logo" />
  </top>
</template>

<script>
import Top from "@/components/Atoms/Top";
import Logo from "@/components/Atoms/Logo";

export default {
  name: "logo-header",
  components: { Top, Logo }
};
</script>

<style scoped>
.logo {
  width: auto;
  height: 100%;
}
</style>

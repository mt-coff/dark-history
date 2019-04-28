<template>
  <top>
    <div>
      <logo @click="() => $router.push('/')" class="logo" />
    </div>
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
div {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
}
.logo {
  width: auto;
  height: 70%;
  cursor: pointer;
}
</style>

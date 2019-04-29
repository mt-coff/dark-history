<template>
  <top>
    <div>
      <logo @click="() => $router.push('/')" class="logo" />
      <dropdown-menu />
    </div>
  </top>
</template>

<script>
import Top from "@/components/Atoms/Top";
import Logo from "@/components/Atoms/Logo";
import DropdownMenu from "@/components/Molecules/DropdownMenu";

export default {
  name: "logo-header",
  components: { Top, Logo, DropdownMenu }
};
</script>

<style scoped>
div {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
}
.logo {
  width: auto;
  height: 70%;
  cursor: pointer;
}
</style>

<template>
  <div class="home">
    <HelloWorld msg="CA 平成最後のハッカソン" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

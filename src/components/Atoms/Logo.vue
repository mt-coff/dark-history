<template>
  <img @click="() => $emit('click')" src="@/assets/Logo.svg" />
</template>

<script>
export default {
  name: "logo"
};
</script>

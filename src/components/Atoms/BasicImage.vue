<template>
  <img :src="url" @load="e => $emit('load', e)" />
</template>

<script>
export default {
  props: {
    url: String
  }
};
</script>

<template>
  <container class="d-list" :space="48">
    <named-coffin
      v-for="(post, index) in posts"
      :key="index"
      class="coffin"
      :name="post.title"
      @click="() => $emit('click', post.id)"
    />
  </container>
</template>

<script>
export default {
  components: {
    container: () => import("@/components/Atoms/Container"),
    NamedCoffin: () => import("@/components/Molecules/NamedCoffin")
  },
  data() {
    return {};
  },
  props: {
    posts: {
      type: Array
    }
  }
};
</script>

<style scoped>
.d-list {
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
}
.coffin {
  min-width: 0;
  width: 300px;
  margin: 1rem;
}
</style>

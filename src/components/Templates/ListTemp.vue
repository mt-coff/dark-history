<template>
  <container class="d-list" :space="48">
    <named-coffin
      v-for="(post, index) in posts"
      :key="index"
      class="coffin"
      :name="post.title"
      @click="() => $emit('click', post.id)"
      :style="{ '--delay-time': `${50 * index}ms` }"
    />
    <div
      v-for="(post, index) in posts"
      :key="`dummy${index}`"
      class="dummy"
    ></div>
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
  justify-content: center;
}
.coffin {
  min-width: 0;
  width: 300px;
  margin: 1rem;
  opacity: 0;
  animation: fade 1s ease var(--delay-time) normal forwards;
}
.dummy {
  height: 0px;
  margin: 0 1rem;
  width: 300px;
}

@keyframes fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>

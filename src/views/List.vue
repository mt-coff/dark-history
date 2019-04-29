<template>
  <div>
    <list-temp :posts="posts" @click="id => $router.push(`/detail/${id}`)" />
  </div>
</template>

<script>
import { getAllItem } from "../js/api.js";

export default {
  name: "list",
  components: {
    ListTemp: () => import("@/components/Templates/ListTemp")
  },
  async mounted() {
    const res = await getAllItem();
    const data = await res.json();
    this.posts.push(...data);
  },
  data() {
    return {
      posts: []
    };
  }
};
</script>

<style scoped></style>

<template>
  <div class="detail">
    <detail-temp :url="image.imageURL"></detail-temp>
  </div>
</template>

<script>
import { getItem } from "../js/api";

export default {
  name: "detail",
  components: {
    DetailTemp: () => import("@/components/Templates/DetailTemp")
  },
  data() {
    return {
      image: {
        id: "",
        darkness: 0,
        title: "",
        detail: "",
        createAt: 0,
        imageURL: "",
        strength: 0
      }
    };
  },
  created() {
    getItem(this.$route.params.id)
      .then(response => response.json())
      .then(json => (this.image = json))
      .catch(error => console.error(error));
  }
};
</script>

<style scoped></style>

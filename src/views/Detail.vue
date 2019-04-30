<template>
  <div class="detail">
    <detail-temp
      :url="image.imageURL"
      :OGPUrl="OGPUrl"
      :title="image.title"
    ></detail-temp>
  </div>
</template>

<script>
import { getItem, genOGPUrl } from "../js/api";

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
      },
      OGPUrl: ""
    };
  },
  created() {
    getItem(this.$route.params.id)
      .then(response => response.json())
      .then(json => (this.image = json))
      .catch(error => console.error(error));
    this.OGPUrl = genOGPUrl(this.$route.params.id);
  }
};
</script>

<style scoped></style>

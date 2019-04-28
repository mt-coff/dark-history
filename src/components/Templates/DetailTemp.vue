<template>
  <container class="detail-page">
    <basic-image
      :url="url"
      style="width: 800px; height: 540px; margin-bottom: 32px;"
    ></basic-image>
    <tweet-button></tweet-button>
  </container>
</template>

<script>
export default {
  components: {
    BasicImage: () => import("@/components/Atoms/BasicImage"),
    Container: () => import("@/components/Atoms/Container"),
    TweetButton: () => import("@/components/Molecules/TweetButton")
  },
  props: {
    url: {
      type: String,
      default: "https://bulma.io/images/placeholders/256x256.png"
    }
  }
};
</script>

<style scoped>
.detail-page {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

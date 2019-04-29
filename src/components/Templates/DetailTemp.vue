<template>
  <container class="detail-page">
    <basic-image :url="url"></basic-image>
    <container class="under-container">
      <link-button to="/list" class="back-btn">一覧に戻る</link-button>
      <tweet-button :OGPUrl="OGPUrl"></tweet-button>
      <div class="dummy"></div>
    </container>
  </container>
</template>

<script>
export default {
  components: {
    LinkButton: () => import("@/components/Atoms/LinkButton"),
    BasicImage: () => import("@/components/Atoms/BasicImage"),
    Container: () => import("@/components/Atoms/Container"),
    TweetButton: () => import("@/components/Molecules/TweetButton")
  },
  props: {
    url: {
      type: String,
      default: "https://bulma.io/images/placeholders/256x256.png"
    },
    OGPUrl: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.back-btn {
  background-color: var(--dark);
  color: var(--main-color);
  border: 1px solid var(--main-color);
}

.detail-page {
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
}

.under-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.dummy {
  width: 128px;
  height: 0;
}
</style>

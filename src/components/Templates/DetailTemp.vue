<template>
  <container class="detail-page">
    <loading-image :url="url" size="98px" />
    <container class="under-container">
      <link-button to="/list" class="back-btn">一覧に戻る</link-button>
      <tweet-button :OGPUrl="OGPUrl" :title="title"></tweet-button>
      <div class="dummy"></div>
    </container>
  </container>
</template>

<script>
export default {
  components: {
    LinkButton: () => import("@/components/Atoms/LinkButton"),
    LoadingImage: () => import("@/components/Molecules/LoadingImage"),
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
    },
    title: {
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

.back-btn:hover {
  background: var(--main-color);
  color: var(--light);
}

.detail-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  animation: fade 1s ease;
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

@keyframes fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>

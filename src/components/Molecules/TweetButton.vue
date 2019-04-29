<template>
  <div class="twitter">
    <img src="@/assets/Twitter_Logo_WhiteOnBlue.svg" class="twitter-logo" />
    <a
      :href="
        `https://twitter.com/share?url=${OGPUrl}&hashtags=平成最後のハッカソン,dark_historys&lang=ja`
      "
      class="twitter-share-button"
      data-show-count="false"
      target="_blank"
      >Tweet</a
    >
  </div>
</template>

<script>
export default {
  props: {
    OGPUrl: String
  },
  data() {
    return {
      tags: "dark_historys"
    };
  }
};
</script>

<style>
.twitter {
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 4px 16px;
  background-color: var(--twitter);
  font-family: sans-serif;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  border-radius: 8px;
}

.twitter-logo {
  width: 32px;
}

.twitter-share-button {
  text-decoration: none;
  color: white;
  size: 16px;
}
</style>

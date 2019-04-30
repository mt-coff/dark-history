<template>
  <a
    :href="
      `https://twitter.com/share?url=${OGPUrl}&text=${encodeURI(
        title + '\n'
      )}&hashtags=平成最後のハッカソン,dark_historys&lang=ja`
    "
    class="twitter-share-button"
    data-show-count="false"
    target="_blank"
  >
    <img src="@/assets/Twitter_Logo_WhiteOnBlue.svg" class="twitter-logo" />
    <span>Tweet</span>
  </a>
</template>

<script>
export default {
  props: {
    OGPUrl: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      tags: "dark_historys"
    };
  }
};
</script>

<style>
.twitter-logo {
  width: 32px;
}

.twitter-share-button {
  display: inline-flex;
  align-items: center;
  justify-content: space-around;
  padding: 4px 16px 4px 8px;
  background-color: var(--twitter);
  font-family: sans-serif;
  text-decoration: none;
  color: white;
  font-size: 16px;
  border-radius: 8px;
}
</style>

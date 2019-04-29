<template>
  <div class="twitter">
    <img src="@/assets/Twitter_Logo_WhiteOnBlue.svg" class="twitter-logo" />
    <a
      href="https://twitter.com/share?ref_src=twsrc%5Etfw"
      class="twitter-share-button"
      data-show-count="false"
      >Tweet</a
    >
  </div>
</template>

<script>
export default {};
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

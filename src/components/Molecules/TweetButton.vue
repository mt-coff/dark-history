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
  width: 96px;
  padding: 0 5px;
  background-color: var(--twitter);
  font-family: sans-serif;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
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

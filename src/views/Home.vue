<template>
  <div class="home">
    <home>
      <span slot="header">{{ header }}</span>
      <span slot="about">{{ about }}</span>
      <span slot="buttonLabel">{{ buttonLabel }}</span>
    </home>
  </div>
</template>

<script>
export default {
  components: {
    Home: () => import("@/components/Templates/HomeTemp")
  },
  data() {
    return {
      header: "黒歴史は平成とともに",
      about: `もうすぐ平成が終わります
あなたが生み出してきた数々の黒歴史
全部吐き出してスッキリした状態で令和を迎えませんか？`,
      buttonLabel: "黒歴史を打ち明ける"
    };
  }
};
</script>

<style scoped>
* {
  text-align: center;
}
</style>

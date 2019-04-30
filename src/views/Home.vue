<template>
  <div class="home">
    <home :items="items">
      <span slot="header">{{ header }}</span>
      <span slot="about">{{ about }}</span>
      <span slot="buttonLabel">{{ buttonLabel }}</span>
    </home>
  </div>
</template>

<script>
import { getAllItem } from "@/js/api";

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
      buttonLabel: "黒歴史を打ち明ける",
      items: []
    };
  },
  async mounted() {
    const res = await getAllItem();
    const data = await res.json();
    this.items.push(...data);
  }
};
</script>

<style scoped>
* {
  text-align: center;
}
</style>
